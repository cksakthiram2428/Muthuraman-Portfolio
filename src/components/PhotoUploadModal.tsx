import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, RefreshCw, Check, Image as ImageIcon } from 'lucide-react';
import { setActivePhoto, resetActivePhoto } from '../utils/photoManager';

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
  const [preview, setPreview] = useState<string>(currentPhoto);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreview(currentPhoto);
  }, [currentPhoto]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPreview(result);
          setActivePhoto(result);
          setSuccessMsg('Photo updated successfully');
          setTimeout(() => setSuccessMsg(''), 3000);
        }
        setIsProcessing(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    resetActivePhoto();
    setPreview('/muthuraman.png');
    setSuccessMsg('Reset to default photo');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-modal-title"
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <ImageIcon size={18} />
            </div>
            <div>
              <h2 id="photo-modal-title" className="font-bold text-lg text-slate-900">
                Profile Photo
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                Active photo displayed across portfolio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Current Photo Preview */}
        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-900 flex items-end justify-center">
            <img
              src={preview}
              alt="Muthuraman C K Preview"
              className="w-full h-full object-contain object-bottom scale-110 drop-shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          {successMsg && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium animate-in fade-in">
              <Check size={12} />
              <span>{successMsg}</span>
            </div>
          )}
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          aria-label="Upload photo"
        />

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-xs font-medium">
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-xs disabled:opacity-50"
          >
            <Upload size={14} />
            <span>{isProcessing ? 'Processing...' : 'Upload Photo'}</span>
          </button>

          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          >
            <RefreshCw size={14} />
            <span>Reset Default</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-400 text-center font-mono">
          Accepts PNG, JPG, or WebP. Transparent backgrounds recommended.
        </p>
      </div>
    </div>
  );
};
