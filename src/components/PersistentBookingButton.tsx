import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface PersistentBookingButtonProps {
  onBookClick: () => void;
}

export default function PersistentBookingButton({ onBookClick }: PersistentBookingButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const bookingEl = document.getElementById('booking');
      let isInBookingSection = false;

      if (bookingEl) {
        const rect = bookingEl.getBoundingClientRect();
        isInBookingSection = rect.top < window.innerHeight && rect.bottom > 100;
      }

      setIsVisible(scrollPos > 350 && !isInBookingSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-30 transition-all duration-300">
      <button
        onClick={onBookClick}
        className="group flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-white hover:bg-[#FAF8F5] text-[#111625] border border-[#E8DDD8] hover:border-[#C49A6C] rounded-full shadow-editorial transition-all duration-300 cursor-pointer"
        aria-label="Book Appointment"
      >
        <span className="w-2 h-2 rounded-full bg-[#C49A6C] animate-pulse" />
        <Calendar className="w-3.5 h-3.5 text-[#C49A6C]" />
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] font-medium text-[#111625] group-hover:text-[#C49A6C] transition-colors whitespace-nowrap">
          Book Appointment
        </span>
      </button>
    </div>
  );
}
