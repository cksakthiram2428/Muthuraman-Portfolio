import React, { useEffect, useState, useRef } from 'react';

interface CenteredHeroCutoutProps {
  imageSrc: string;
  altText: string;
}

export const CenteredHeroCutout: React.FC<CenteredHeroCutoutProps> = ({ imageSrc, altText }) => {
  const [cutoutUrl, setCutoutUrl] = useState<string | null>(null);
  const isProcessedRef = useRef(false);

  useEffect(() => {
    if (isProcessedRef.current) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) {
          setCutoutUrl(imageSrc);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;

        // Sample background color from top-left, top-right, and top-center
        const samples = [
          [data[0], data[1], data[2]],
          [data[(width - 1) * 4], data[(width - 1) * 4 + 1], data[(width - 1) * 4 + 2]],
          [data[Math.floor(width / 2) * 4], data[Math.floor(width / 2) * 4 + 1], data[Math.floor(width / 2) * 4 + 2]]
        ];

        const avgBgR = (samples[0][0] + samples[1][0] + samples[2][0]) / 3;
        const avgBgG = (samples[0][1] + samples[1][1] + samples[2][1]) / 3;
        const avgBgB = (samples[0][2] + samples[1][2] + samples[2][2]) / 3;

        // Threshold parameters for studio grey isolation
        const threshold = 38;
        const feather = 18;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Compute Euclidean color distance to sampled background
          const dist = Math.sqrt(
            (r - avgBgR) * (r - avgBgR) +
            (g - avgBgG) * (g - avgBgG) +
            (b - avgBgB) * (b - avgBgB)
          );

          // Grey background has minimal saturation
          const maxChannel = Math.max(r, g, b);
          const minChannel = Math.min(r, g, b);
          const saturationDiff = maxChannel - minChannel;

          if (dist < threshold && saturationDiff < 22) {
            // Full transparent background
            data[i + 3] = 0;
          } else if (dist < threshold + feather && saturationDiff < 25) {
            // Feathered soft edge
            const alphaFactor = (dist - threshold) / feather;
            data[i + 3] = Math.round(data[i + 3] * alphaFactor);
          }
        }

        ctx.putImageData(imgData, 0, 0);

        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setCutoutUrl(url);
            isProcessedRef.current = true;
          } else {
            setCutoutUrl(imageSrc);
          }
        }, 'image/png');
      } catch (err) {
        // Fallback to original image if canvas manipulation encounters restrictions
        setCutoutUrl(imageSrc);
      }
    };

    img.onerror = () => {
      setCutoutUrl(imageSrc);
    };
  }, [imageSrc]);

  return (
    <div className="relative w-full h-full flex items-end justify-center pointer-events-none">
      <img
        src={cutoutUrl || imageSrc}
        alt={altText}
        className="h-full w-auto max-w-full object-contain object-bottom pointer-events-none transition-opacity duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
