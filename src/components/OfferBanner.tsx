import { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight } from 'lucide-react';

interface OfferBannerProps {
  onClaimOffer: (code: string) => void;
}

export default function OfferBanner({ onClaimOffer }: OfferBannerProps) {
  const [copied, setCopied] = useState(false);
  const promoCode = 'AAFIRST25';

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    onClaimOffer(promoCode);
  };

  return (
    <section className="py-12 md:py-16 my-6 max-w-[1400px] mx-auto px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 md:p-14 rounded-[32px] sm:rounded-[40px] bg-[#1E2538] text-white shadow-editorial relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-3 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>An Exclusive First Invitation</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white leading-tight mb-4 [text-wrap:balance]">
                25% off every service package for new customers.
              </h2>

              <p className="text-sm md:text-base text-[#D4D9E2] font-light leading-relaxed max-w-xl">
                Experience our signature hair alchemy, high-definition bridal prep, and restorative clinical therapies with our welcoming privilege.
              </p>
            </div>

            {/* Privilege Card & Claim CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:shrink-0">
              <div
                onClick={handleCopy}
                className="flex items-center justify-between gap-4 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 hover:border-[#C49A6C] transition-colors cursor-pointer group"
                title="Click to copy privilege code"
              >
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#A6AFC2] block font-mono">
                    Invitation Code
                  </span>
                  <span className="font-mono text-sm tracking-widest text-[#C49A6C] font-semibold">
                    {promoCode}
                  </span>
                </div>
                <div className="text-[#A6AFC2] group-hover:text-white transition-colors">
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </div>
              </div>

              <button
                onClick={() => onClaimOffer(promoCode)}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white transition-all duration-300 rounded-full whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Claim Invitation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#A6AFC2] font-light relative z-10">
            <span>Valid on all complete packages across Ranchi & Hazaribagh branches.</span>
            <span>Single use per guest · Applied automatically at booking step</span>
          </div>

        </div>
      </div>
    </section>
  );
}
