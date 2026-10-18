import React, { useState, useRef } from 'react';
import { X, Upload, Sparkles, Check, RefreshCw, Sliders, Image as ImageIcon } from 'lucide-react';
import { removeBackgroundClient, setActivePhoto, resetActivePhoto } from '../utils/photoManager';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto
}) => {
  const [selectedRawImage, setSelectedRawImage] = useState<string | null>(null);
  const [processedCutout, setProcessedCutout] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [removeBgEnabled, setRemoveBgEnabled] = useState<boolean>(true);
  const [tolerance, setTolerance] = useState<number>(25);
  const [showAppliedToast, setShowAppliedToast] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const processImageFile = async (dataUrl: string, tol = tolerance) => {
    setSelectedRawImage(dataUrl);
    setIsProcessing(true);
    try {
      const cutout = await removeBackgroundClient(dataUrl, tol);
      setProcessedCutout(cutout);
    } catch (e) {
      console.error(e);
      setProcessedCutout(dataUrl);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) processImageFile(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) processImageFile(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApply = () => {
    const photoToUse = removeBgEnabled
      ? (processedCutout || selectedRawImage || currentPhoto)
      : (selectedRawImage || currentPhoto);

    if (photoToUse) {
      setActivePhoto(photoToUse);
      setShowAppliedToast(true);
      setTimeout(() => {
        setShowAppliedToast(false);
        onClose();
      }, 900);
    }
  };

  const handleReset = () => {
    resetActivePhoto();
    setSelectedRawImage(null);
    setProcessedCutout(null);
    setShowAppliedToast(true);
    setTimeout(() => {
      setShowAppliedToast(false);
      onClose();
    }, 900);
  };

  const previewSource = selectedRawImage
    ? (removeBgEnabled && processedCutout ? processedCutout : selectedRawImage)
    : currentPhoto;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-hn"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 text-slate-900 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
              <Sparkles size={16} />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Use Your Real Photo &amp; Face
              </h2>
              <p className="text-xs text-slate-500">
                Transparent cutout automatically applied across the entire website
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* File Dropzone */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-6 text-center transition-all bg-slate-50/50 hover:bg-blue-50/20 cursor-pointer group"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Upload size={22} />
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {selectedRawImage ? 'Choose a different photo' : 'Drag & drop your face photo here, or click to browse'}
              </div>
              <p className="text-xs text-slate-500 max-w-sm">
                Upload your exact face photo (PNG, JPG, WEBP). Background removal is processed automatically in your browser.
              </p>
            </div>
          </div>

          {/* Controls: Remove Background toggle & sensitivity */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-100/70 border border-slate-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={removeBgEnabled}
                onChange={(e) => setRemoveBgEnabled(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-xs font-semibold text-slate-800">
                Remove Background (Transparent Cutout)
              </span>
            </label>

            {removeBgEnabled && selectedRawImage && (
              <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
                <Sliders size={13} className="text-slate-400" />
                <span>Sensitivity:</span>
                <input
                  type="range"
                  min="10"
                  max="45"
                  value={tolerance}
                  onChange={(e) => {
                    const newTol = Number(e.target.value);
                    setTolerance(newTol);
                    if (selectedRawImage) processImageFile(selectedRawImage, newTol);
                  }}
                  className="w-24 accent-blue-600 cursor-pointer"
                />
                <span className="w-6 text-right">{tolerance}</span>
              </div>
            )}
          </div>

          {/* Live Hero Simulation Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span>LIVE HERO PREVIEW (BEHIND TEXT EFFECT)</span>
              {isProcessing && (
                <span className="text-blue-600 animate-pulse flex items-center gap-1">
                  <RefreshCw size={12} className="animate-spin" />
                  Removing background...
                </span>
              )}
            </div>

            <div 
              className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden flex items-end justify-center border border-slate-300 shadow-inner select-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, #909296 0%, #808286 55%, #727478 100%)'
              }}
            >
              {/* Simulated giant text layer */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-85">
                <span className="text-[12vw] sm:text-[9vw] font-bold text-white tracking-tight whitespace-nowrap">
                  MUTHURAMAN
                </span>
              </div>

              {/* Simulated hairline divider */}
              <div className="absolute inset-x-4 bottom-6 h-[1px] bg-white/70 pointer-events-none" />

              {/* Subject Cutout */}
              <div className="relative z-10 h-full w-auto flex items-end justify-center pb-2">
                <img
                  src={previewSource}
                  alt="Preview"
                  className="h-[85%] w-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50/80">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <RefreshCw size={13} />
            <span>Reset to Default</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              disabled={isProcessing}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-50"
            >
              <Check size={14} />
              <span>Apply to Entire Website</span>
            </button>
          </div>
        </div>

        {/* Success Toast */}
        {showAppliedToast && (
          <div className="absolute inset-x-0 bottom-4 mx-auto w-max px-4 py-2 rounded-full bg-slate-950 text-white text-xs font-semibold shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
            <Check size={14} className="text-emerald-400" />
            <span>Applied real photo without background!</span>
          </div>
        )}
      </div>
    </div>
  );
};
