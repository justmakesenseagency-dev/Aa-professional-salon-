import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Respect reduced-motion immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      onComplete();
      return;
    }

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1300);

    const finishTimer = setTimeout(() => {
      setIsDone(true);
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] transition-opacity duration-700 ease-out pointer-events-none ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Monogram Box with Strand Wave */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
          {/* Subtle luminous halo */}
          <div className="absolute inset-0 rounded-full bg-[#C49A6C]/10 blur-2xl" />

          {/* SVG Strand of light sweeping through */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 160 160"
            fill="none"
          >
            <path
              d="M 10 140 C 40 130, 60 40, 80 80 C 100 120, 120 30, 150 20"
              stroke="#C49A6C"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="animate-strand-sweep opacity-85"
            />
            <path
              d="M 20 150 C 50 120, 70 60, 90 90 C 110 110, 130 50, 145 35"
              stroke="#B38859"
              strokeWidth="0.85"
              strokeDasharray="80"
              className="animate-strand-sweep opacity-50"
              style={{ animationDelay: '0.35s' }}
            />
          </svg>

          {/* Serif Monogram */}
          <span className="text-5xl sm:text-6xl font-serif tracking-[0.18em] text-[#111625] relative z-10 pl-2 font-light">
            AA
          </span>
        </div>

        {/* Brand Caption */}
        <div className="mt-4 flex flex-col items-center space-y-1">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#C49A6C] font-mono font-medium">
            AA Professional
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#717684] font-light">
            Haute Beauty Atelier · Ranchi & Hazaribagh
          </span>
        </div>

        {/* Minimal loading hairline */}
        <div className="w-24 h-[1px] bg-[#E8DDD8] mt-6 overflow-hidden relative">
          <div className="absolute inset-0 bg-[#C49A6C] animate-[pulse_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
