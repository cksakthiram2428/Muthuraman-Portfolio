/**
 * Photo Management & Client-side Background Removal Utility
 * Removes background using Canvas pixel flood-fill and color keying.
 */

const STORAGE_KEY = 'muthuraman_profile_photo';
const EVENT_NAME = 'muthuraman-photo-updated';

export function getActivePhoto(): string {
  if (typeof window === 'undefined') return '/image.png';
  return localStorage.getItem(STORAGE_KEY) || '/image.png';
}

export function setActivePhoto(dataUrl: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, dataUrl);
  } catch (e) {
    console.warn('LocalStorage limit reached for profile photo', e);
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: dataUrl }));
}

export function resetActivePhoto(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: '/image.png' }));
}

export function onPhotoUpdate(callback: (photoUrl: string) => void): () => void {
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<string>;
    callback(customEvent.detail || getActivePhoto());
  };
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
}

/**
 * Client-side Background Removal Algorithm
 * Removes solid, studio, or interior backgrounds using connected-component BFS
 * and edge-feathering directly in an HTML5 canvas.
 */
export async function removeBackgroundClient(
  dataUrl: string,
  tolerance = 25
): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        // Cap max dimension to 1400px for instant responsive processing & storage
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;
        const maxDim = 1400;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) {
          resolve(dataUrl);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;

        // Sample background seeds: perimeter points
        const sampleCoords = [
          [2, 2],
          [width - 3, 2],
          [2, height - 3],
          [width - 3, height - 3],
          [Math.floor(width / 2), 2],
          [2, Math.floor(height / 2)],
          [width - 3, Math.floor(height / 2)],
          [Math.floor(width / 4), 2],
          [Math.floor((3 * width) / 4), 2]
        ];

        const bgSamples: [number, number, number][] = [];
        for (const [sx, sy] of sampleCoords) {
          const sIdx = (sy * width + sx) * 4;
          bgSamples.push([data[sIdx], data[sIdx + 1], data[sIdx + 2]]);
        }

        // Color distance function to background
        function isBgColor(r: number, g: number, b: number): boolean {
          for (const [br, bg, bb] of bgSamples) {
            const dist = Math.hypot(r - br, g - bg, b - bb);
            if (dist < tolerance * 2.8) return true;
          }
          // Neutral grey backdrop detector
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const sat = max - min;
          const avg = (r + g + b) / 3;
          if (sat < 20 && avg > 65 && avg < 225) {
            return true;
          }
          return false;
        }

        // BFS Flood-Fill from perimeter
        const isBg = new Uint8Array(width * height);
        const visited = new Uint8Array(width * height);
        const queue: number[] = [];

        // Enqueue border
        for (let x = 0; x < width; x++) {
          queue.push(x, 0);
          queue.push(x, height - 1);
          visited[x] = 1;
          visited[(height - 1) * width + x] = 1;
        }
        for (let y = 0; y < height; y++) {
          queue.push(0, y);
          queue.push(width - 1, y);
          visited[y * width] = 1;
          visited[y * width + (width - 1)] = 1;
        }

        let head = 0;
        while (head < queue.length) {
          const cx = queue[head++];
          const cy = queue[head++];
          const cIdx = cy * width + cx;
          const byteIdx = cIdx * 4;
          const r = data[byteIdx];
          const g = data[byteIdx + 1];
          const b = data[byteIdx + 2];

          if (isBgColor(r, g, b)) {
            isBg[cIdx] = 1;

            const neighbors = [
              [cx + 1, cy],
              [cx - 1, cy],
              [cx, cy + 1],
              [cx, cy - 1]
            ];

            for (const [nx, ny] of neighbors) {
              if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                const nIdx = ny * width + nx;
                if (!visited[nIdx]) {
                  visited[nIdx] = 1;
                  const nByte = nIdx * 4;
                  if (isBgColor(data[nByte], data[nByte + 1], data[nByte + 2])) {
                    queue.push(nx, ny);
                  }
                }
              }
            }
          }
        }

        // Apply alpha channel & feathering
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            const bIdx = idx * 4;
            if (isBg[idx] === 1) {
              data[bIdx + 3] = 0; // Fully transparent
            } else {
              // Edge smoothing
              let bgNeighbors = 0;
              if (x > 0 && isBg[idx - 1] === 1) bgNeighbors++;
              if (x < width - 1 && isBg[idx + 1] === 1) bgNeighbors++;
              if (y > 0 && isBg[idx - width] === 1) bgNeighbors++;
              if (y < height - 1 && isBg[idx + width] === 1) bgNeighbors++;

              if (bgNeighbors > 0) {
                data[bIdx + 3] = Math.max(40, 255 - bgNeighbors * 45);
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch (err) {
        console.error('Error during client background removal:', err);
        resolve(dataUrl);
      }
    };

    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}
