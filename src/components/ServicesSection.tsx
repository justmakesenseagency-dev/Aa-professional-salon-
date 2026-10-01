import { ArrowUpRight, Sparkles } from 'lucide-react';
import { EDITORIAL_SERVICES, ServiceItem } from '../data/salonData';

interface ServicesSectionProps {
  onDiscover: (service: ServiceItem) => void;
}

export default function ServicesSection({ onDiscover }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF8F5] my-6 rounded-[36px] sm:rounded-[48px] shadow-editorial max-w-[1400px] mx-auto px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E8DDD8] gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-3 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Haute Beauty Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#111625] font-light leading-tight">
              Artistry Crafted For You
            </h2>
          </div>
          <p className="text-sm text-[#5D6577] max-w-sm font-light leading-relaxed">
            Six distinct masteries performed in private suites using certified formulations and individualized consultations.
          </p>
        </div>

        {/* Editorial Image-Driven Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EDITORIAL_SERVICES.map((service, idx) => (
            <article
              key={service.id}
              onClick={() => onDiscover(service)}
              className="group relative flex flex-col bg-[#FFFFFF] border border-[#EBE3DE] hover:border-[#C49A6C] transition-all duration-500 rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm hover:shadow-card-hover cursor-pointer"
            >
              {/* Rounded Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EBE7]">
                <img
                  src={service.image}
                  alt={`AA Professional Salon — ${service.name}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Category Number Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#111625] bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                    0{idx + 1} · {service.category}
                  </span>
                </div>

                {/* Starting Price subtle indicator */}
                <div className="absolute bottom-3 right-4 z-10 text-[11px] text-white font-mono tabular-nums bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                  From {service.startingPrice}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#111625] mb-2.5 group-hover:text-[#C49A6C] transition-colors duration-300">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5D6577] leading-relaxed font-light mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer Link & Action */}
                <div className="pt-4 border-t border-[#F0E8E4] flex items-center justify-between">
                  <span className="text-xs text-[#868E9E] font-light">
                    Est. {service.duration}
                  </span>

                  <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#C49A6C] group-hover:text-[#111625] font-medium transition-all duration-300 group-hover:translate-x-1">
                    <span>Discover</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
