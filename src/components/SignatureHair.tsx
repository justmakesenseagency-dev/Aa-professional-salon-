import { useState } from 'react';
import { SIGNATURE_HAIR_PRICES } from '../data/salonData';
import { Sparkles, ArrowRight, Scissors, Sparkle, Flame, Layers } from 'lucide-react';

interface SignatureHairProps {
  onOpenCompleteMenu: () => void;
  onBookService: (serviceName: string, price: number) => void;
}

export default function SignatureHair({ onOpenCompleteMenu, onBookService }: SignatureHairProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Smoothening & Texture' | 'Colour Artistry'>('All');

  const filteredRates = activeTab === 'All'
    ? SIGNATURE_HAIR_PRICES
    : SIGNATURE_HAIR_PRICES.filter((rate) => rate.category === activeTab);

  const keyDisciplines = [
    'Smoothening',
    'Colour',
    'Balayage',
    'Highlights',
    'Rebonding',
    'Styling',
    'Treatments'
  ];

  return (
    <section id="hair-services" className="py-24 md:py-32 bg-[#FAF8F5] my-6 rounded-[36px] sm:rounded-[48px] shadow-editorial max-w-[1400px] mx-auto px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block matching Reference "Our Pricing & Packages" style */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Hair Menu & Tariffs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#111625] font-light mb-4">
            Our Pricing & Packages
          </h2>
          <p className="text-sm text-[#5D6577] font-light leading-relaxed">
            Transparent, real salon rates for chemical transformations, texture restructuring, and dimensional hand-painted hair color.
          </p>

          {/* Filter segment tabs */}
          <div className="mt-8 inline-flex p-1 bg-[#EFE8E4] rounded-full">
            {(['All', 'Smoothening & Texture', 'Colour Artistry'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-white text-[#111625] shadow-sm'
                    : 'text-[#6A7282] hover:text-[#111625]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid (Matching reference's 3-4 card columnar package layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRates.map((item, idx) => (
            <div
              key={`${item.gender}-${item.service}`}
              className="bg-[#FFFFFF] border border-[#EBE3DE] hover:border-[#C49A6C] transition-all duration-300 rounded-[24px] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-card-hover group"
            >
              <div>
                {/* Header Icon + Gender Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF5F2] border border-[#EFE5E0] flex items-center justify-center text-[#C49A6C]">
                    <Scissors className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#868E9E] bg-[#F7F2EF] px-2.5 py-0.5 rounded-full">
                    {item.gender}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-[#111625] mb-2 group-hover:text-[#C49A6C] transition-colors">
                  {item.gender} {item.service}
                </h3>

                <p className="text-xs text-[#5D6577] leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Price baseline & Gold action button */}
              <div className="pt-6 border-t border-[#F2EAE6] flex flex-col space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-[#868E9E] uppercase tracking-wider">
                    Package Tariff
                  </span>
                  <span className="text-2xl font-serif font-light text-[#111625] tabular-nums font-medium text-antique-gold">
                    {item.formattedPrice}
                  </span>
                </div>

                <button
                  onClick={() => onBookService(`${item.gender} ${item.service}`, item.price)}
                  className="w-full py-3 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-colors text-center shadow-sm cursor-pointer"
                >
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Menu Banner Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-[24px] bg-[#FFFFFF] border border-[#EBE3DE] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase tracking-wider text-[#C49A6C] font-mono font-medium">
              Comprehensive Service Catalog
            </span>
            <p className="text-sm text-[#4E5668] font-light">
              Looking for root touchups, hair spa, Olaplex, Botox, or nail sculpting?
            </p>
          </div>

          <button
            onClick={onOpenCompleteMenu}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.16em] font-medium text-[#111625] hover:text-[#C49A6C] border border-[#D8CCC7] hover:border-[#C49A6C] rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Explore Complete Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
