import React from 'react';
import { X } from 'lucide-react';

export const VideoModal = ({ isOpen, videoSrc, onClose }) => {
  if (!isOpen) return null;

  const autoplaySrc = videoSrc.includes('?')
    ? `${videoSrc}&autoplay=1&modestbranding=1&showinfo=0`
    : `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-[#0BCEAF] transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative pt-[56.25%] w-full bg-black">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={autoplaySrc}
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
