import { useState } from 'react';
import { ALL_MENU_CATEGORIES } from '../data/salonData';
import { X, Sparkles, Clock } from 'lucide-react';

interface ServiceMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceToBook: (serviceName: string, priceStr: string) => void;
}

export default function ServiceMenuModal({
  isOpen,
  onClose,
  onSelectServiceToBook,
}: ServiceMenuModalProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  if (!isOpen) return null;

  const currentCategory = ALL_MENU_CATEGORIES[activeCategoryIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[85vh] bg-[#FFFFFF] border border-[#EBE3DE] rounded-[28px] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#F2EAE6] flex items-start justify-between bg-[#FAF8F5]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-2 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Artistry Catalog</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#111625]">
              Complete Service Menu & Tariffs
            </h3>
            <p className="text-xs text-[#5D6577] font-light mt-1">
              Applicable across Ranchi & Hazaribagh locations. Consultation included.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-[#F2EAE6] text-[#111625] transition-colors cursor-pointer border border-[#E8DDD8]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Tab Strip */}
        <div className="flex overflow-x-auto border-b border-[#F2EAE6] px-6 sm:px-8 py-3 gap-2 no-scrollbar bg-[#FFFFFF]">
          {ALL_MENU_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap rounded-full transition-all cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-[#C49A6C] text-white shadow-sm font-semibold'
                  : 'text-[#6A7282] hover:text-[#111625] bg-[#F7F2EF]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1 bg-[#FAF8F5]">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DDD8]">
            <span className="text-xs uppercase tracking-wider text-[#C49A6C] font-mono font-medium">
              {currentCategory.category} ({currentCategory.items.length} Treatments)
            </span>
            <span className="text-[11px] text-[#868E9E] italic">
              Premium salon grade formulations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCategory.items.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-[20px] bg-white border border-[#EBE3DE] hover:border-[#C49A6C] transition-colors flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h4 className="text-base font-serif text-[#111625] group-hover:text-[#C49A6C] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-base font-serif text-[#C49A6C] font-mono tabular-nums font-semibold shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#5D6577] font-light leading-relaxed mb-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#F2EAE6] flex items-center justify-between text-xs">
                  <span className="text-[#868E9E] flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-[#C49A6C]" />
                    {item.time}
                  </span>

                  <button
                    onClick={() => {
                      onSelectServiceToBook(item.name, item.price);
                      onClose();
                    }}
                    className="px-3.5 py-1 text-[11px] uppercase tracking-wider text-[#C49A6C] hover:text-white hover:bg-[#C49A6C] border border-[#C49A6C] rounded-full transition-colors cursor-pointer"
                  >
                    Select & Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="p-4 sm:p-5 border-t border-[#F2EAE6] bg-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6A7282]">
          <span>
            *Customized wedding trousseau or bridal entourage packages available on request.
          </span>
          <a
            href="tel:+919036551386"
            className="text-[#C49A6C] hover:underline font-mono font-medium"
          >
            Direct Desk: +91 90365-51386
          </a>
        </div>
      </div>
    </div>
  );
}
