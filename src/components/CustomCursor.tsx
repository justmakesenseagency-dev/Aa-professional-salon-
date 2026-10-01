import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device or reduced motion preference
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, select, textarea, [role="button"], .interactive-cursor');
        setIsPointer(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full bg-[#C49A6C] transition-transform duration-75 ease-out"
        style={{
          top: 0,
          left: 0,
          width: isPointer ? '6px' : '4px',
          height: isPointer ? '6px' : '4px',
          transform: `translate3d(${position.x - (isPointer ? 3 : 2)}px, ${position.y - (isPointer ? 3 : 2)}px, 0)`,
        }}
      />
      {/* Soft antique-gold ring */}
      <div
        className="pointer-events-none fixed z-50 rounded-full border border-[#C49A6C]/40 transition-all duration-300 ease-out"
        style={{
          top: 0,
          left: 0,
          width: isPointer ? '48px' : '28px',
          height: isPointer ? '48px' : '28px',
          transform: `translate3d(${position.x - (isPointer ? 24 : 14)}px, ${position.y - (isPointer ? 24 : 14)}px, 0)`,
          backgroundColor: isPointer ? 'rgba(196, 154, 108, 0.08)' : 'transparent',
        }}
      />
    </>
  );
}
