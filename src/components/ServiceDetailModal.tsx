import { ServiceItem } from '../data/salonData';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onBookService,
}: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#FFFFFF] border border-[#EBE3DE] rounded-[28px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#111625] hover:text-[#C49A6C] transition-colors cursor-pointer shadow-sm border border-[#E8DDD8]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Visual */}
        <div className="md:w-1/2 relative aspect-[4/3] md:aspect-auto min-h-[260px] bg-[#FAF8F5]">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 z-10 md:hidden">
            <span className="text-xs font-mono uppercase text-[#111625] bg-white/90 px-3 py-1 rounded-full">
              {service.category}
            </span>
          </div>
        </div>

        {/* Right Side: Information */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-2 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.category} Mastery</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#111625] mb-3">
              {service.name}
            </h3>

            <p className="text-xs text-[#5D6577] font-light leading-relaxed mb-6">
              {service.fullDesc}
            </p>

            {/* Protocol Highlights */}
            <div className="space-y-2.5 mb-6">
              <span className="text-[11px] uppercase tracking-wider text-[#111625] font-mono block font-medium">
                Standard Protocols:
              </span>
              {service.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs text-[#4E5668]">
                  <Check className="w-3.5 h-3.5 text-[#556B5F] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#FAF8F5] border border-[#E8DDD8] rounded-[16px] flex items-center justify-between text-xs font-mono">
              <span className="text-[#868E9E]">Starting From:</span>
              <span className="text-base text-[#C49A6C] font-serif font-semibold">{service.startingPrice}</span>
            </div>
          </div>

          <div className="pt-6 border-t border-[#F2EAE6] mt-6 flex items-center justify-between gap-4">
            <span className="text-xs text-[#868E9E]">
              Est. {service.duration}
            </span>

            <button
              onClick={() => {
                onBookService(service.name);
                onClose();
              }}
              className="px-6 py-2.5 text-xs uppercase tracking-wider font-medium bg-[#C49A6C] text-white hover:bg-[#B38859] transition-colors rounded-full flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
