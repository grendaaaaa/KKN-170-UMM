"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface LightboxPhoto {
  src: string;
  caption: string;
  date?: string;
  activity?: string;
}

interface LightboxProps {
  photos: LightboxPhoto[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({
  photos,
  initialIndex = 0,
  isOpen,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          goNext();
          break;
        case "ArrowLeft":
          goPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goNext, goPrev, onClose]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || photos.length === 0) return null;

  const current = photos[currentIndex];

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Lightbox foto"
    >
      {/* Inner wrapper — stop propagation so clicking photo doesn't close */}
      <div
        className="relative w-full max-w-5xl mx-4 flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/60 rounded-t-xl backdrop-blur-sm">
          <div>
            {current.activity && (
              <p className="text-xs font-semibold text-sage-light tracking-wider uppercase mb-0.5">
                {current.activity}
              </p>
            )}
            {current.date && (
              <p className="text-[11px] text-white/50">{current.date}</p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-white/60">
              {currentIndex + 1} / {photos.length}
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Tutup lightbox"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image area */}
        <div className="relative flex-1 bg-black min-h-[300px] max-h-[72vh]">
          <div className="relative w-full h-full" style={{ minHeight: 300 }}>
            <Image
              key={currentIndex}
              src={current.src}
              alt={current.caption}
              fill
              className="object-contain animate-fade-in"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />

            {/* Fallback */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center bg-black-soft">
              <ZoomIn size={32} className="text-white/20" />
            </div>
          </div>

          {/* Prev button */}
          {photos.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Next button */}
          {photos.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Foto selanjutnya"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        {/* Caption bar */}
        <div className="bg-black/70 backdrop-blur-sm rounded-b-xl px-5 py-3">
          <p className="text-[14px] text-white/90 text-center">{current.caption}</p>
        </div>

        {/* Thumbnail strip */}
        {photos.length > 1 && (
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 px-1 justify-center flex-wrap">
            {photos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 border-2 ${
                  idx === currentIndex
                    ? "border-forest scale-110"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
                aria-label={`Lihat foto ${idx + 1}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
                <div className="absolute inset-0 -z-10 bg-gray-border" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
