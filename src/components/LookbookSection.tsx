import { useState, useRef } from 'react';
import { LOOKBOOK_ITEMS, LookbookEntry } from '../data/salonData';
import { Sparkles, Maximize2, X, ChevronRight, ChevronLeft } from 'lucide-react';

export default function LookbookSection() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Hair' | 'Bridal' | 'Makeup' | 'Nails' | 'Mehendi'>('All');
  const [activeItem, setActiveItem] = useState<LookbookEntry | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Hair', 'Bridal', 'Makeup', 'Nails', 'Mehendi'] as const;

  const filteredItems = selectedFilter === 'All'
    ? LOOKBOOK_ITEMS
    : LOOKBOOK_ITEMS.filter((item) => item.category === selectedFilter);

  const scrollHorizontal = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="lookbook" className="py-24 md:py-32 bg-[#FAF8F5] my-6 rounded-[36px] sm:rounded-[48px] shadow-editorial max-w-[1400px] mx-auto px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header matching Reference "Our Work Speaks for Itself" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-8 border-b border-[#E8DDD8] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-3 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial Transformation Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#111625] font-light">
              Beauty Through Our Lens
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-[#5D6577] max-w-xs font-light leading-relaxed">
              Real client transformations from our Ranchi and Hazaribagh master color and bridal suites.
            </p>
            {/* Circular arrow buttons matching reference */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={() => scrollHorizontal('left')}
                className="w-11 h-11 rounded-full border border-[#D8CCC7] bg-white hover:border-[#C49A6C] flex items-center justify-center text-[#111625] hover:text-[#C49A6C] transition-all shadow-sm cursor-pointer"
                aria-label="Scroll lookbook left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollHorizontal('right')}
                className="w-11 h-11 rounded-full border border-[#D8CCC7] bg-white hover:border-[#C49A6C] flex items-center justify-center text-[#111625] hover:text-[#C49A6C] transition-all shadow-sm cursor-pointer"
                aria-label="Scroll lookbook right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 text-xs tracking-[0.14em] uppercase font-medium rounded-full transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#C49A6C] text-white shadow-sm'
                  : 'bg-[#FFFFFF] text-[#6A7282] hover:text-[#111625] border border-[#E8DDD8]'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="hidden sm:inline-block text-xs text-[#868E9E] ml-auto font-mono tabular-nums">
            {filteredItems.length} Archive Studies
          </span>
        </div>

        {/* DESKTOP: Horizontal Lookbook with Rounded Angled Cards inspired by reference */}
        <div
          ref={scrollContainerRef}
          className="hidden md:flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 pt-2 snap-x snap-mandatory"
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative flex-none w-[320px] snap-start bg-[#FFFFFF] border border-[#EBE3DE] hover:border-[#C49A6C] transition-all duration-300 rounded-[28px] overflow-hidden shadow-sm hover:shadow-card-hover flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F2EBE7]">
                <img
                  src={item.image}
                  alt={`AA Professional Salon — ${item.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Replacement label badge */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-[#111625] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                  <button
                    onClick={() => setActiveItem(item)}
                    className="p-2 rounded-full bg-white/90 text-[#111625] hover:text-[#C49A6C] backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                    title="Expand View"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#E8DDD8] font-mono block mb-1">
                    {item.category} Discipline
                  </span>
                  <h3 className="text-lg font-serif text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Technical Footnote */}
              <div className="p-5 flex flex-col justify-between flex-1 text-xs">
                <p className="text-[#5D6577] font-light leading-relaxed mb-3">
                  <strong className="text-[#111625] font-normal">Method: </strong>
                  {item.technique}
                </p>
                <div className="pt-3 border-t border-[#F2EAE6] flex items-center justify-between text-[#868E9E]">
                  <span className="italic truncate pr-2">{item.artistNote}</span>
                  <button
                    onClick={() => setActiveItem(item)}
                    className="text-[#C49A6C] hover:text-[#111625] uppercase tracking-wider text-[11px] font-medium shrink-0 cursor-pointer"
                  >
                    View Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE: Clean Vertical Stack */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] border border-[#EBE3DE] rounded-[24px] overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F2EBE7]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[9px] font-mono text-[#111625] bg-white/90 px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <button
                    onClick={() => setActiveItem(item)}
                    className="p-1.5 rounded-full bg-white/90 text-[#111625]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                  <span className="text-[10px] uppercase font-mono text-[#E8DDD8] block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif text-white">{item.title}</h3>
                </div>
              </div>
              <div className="p-4 text-xs">
                <p className="text-[#5D6577] font-light mb-2">
                  <strong className="text-[#111625] font-normal">Method: </strong>
                  {item.technique}
                </p>
                <button
                  onClick={() => setActiveItem(item)}
                  className="text-[#C49A6C] hover:underline uppercase text-[11px] font-medium font-mono"
                >
                  Examine Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FFFFFF] border border-[#EBE3DE] rounded-[28px] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 text-[#111625] hover:text-[#C49A6C] transition-colors cursor-pointer shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="lg:w-3/5 relative aspect-square sm:aspect-[4/3] lg:aspect-auto min-h-[300px] bg-[#FAF8F5]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-mono text-[#111625] bg-white/90 px-3 py-1 rounded-full shadow-sm">
                  {activeItem.tag}
                </span>
              </div>
            </div>

            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C49A6C] block mb-2 font-mono">
                  {activeItem.category} Portfolio Study
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#111625] mb-4">
                  {activeItem.title}
                </h3>

                <div className="space-y-4 text-xs text-[#5D6577] font-light leading-relaxed">
                  <div>
                    <h4 className="text-[#111625] uppercase tracking-wider text-[11px] mb-1 font-medium">
                      Technique Blueprint
                    </h4>
                    <p>{activeItem.technique}</p>
                  </div>
                  <div>
                    <h4 className="text-[#111625] uppercase tracking-wider text-[11px] mb-1 font-medium">
                      Stylist Notes
                    </h4>
                    <p>{activeItem.artistNote}</p>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8DDD8] rounded-[16px] text-[11px]">
                    <span className="text-[#C49A6C] block mb-1 font-medium">Authentic Transformation</span>
                    Captured at AA Professional Flagship Studio, Radium Road, Ranchi.
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#F2EAE6] mt-6 flex items-center justify-between">
                <span className="text-xs text-[#868E9E]">
                  Appointment Available
                </span>
                <button
                  onClick={() => {
                    setActiveItem(null);
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium bg-[#C49A6C] text-white rounded-full hover:bg-[#B38859] transition-colors cursor-pointer"
                >
                  Book Look
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
