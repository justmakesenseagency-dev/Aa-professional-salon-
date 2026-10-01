import { bridalImg, mehendiImg } from '../data/salonData';
import { Sparkles, CalendarHeart, Check, HeartHandshake } from 'lucide-react';

interface BridalFeatureProps {
  onPlanBridal: () => void;
}

export default function BridalFeature({ onPlanBridal }: BridalFeatureProps) {
  const bridalHighlights = [
    'Ultra-High-Definition & Airbrush Foundation formulas engineered for 16-hour sweat & camera endurance.',
    'Bespoke bridal consultations harmonized with trousseau embroidery, lighting conditions, and skin profile.',
    'Complete mastery over both soft ethereal glass-skin aesthetics and royal high-glam traditional finishes.',
    'Full trousseau service including heritage dupatta draping, jewellery mounting, and nail embellishments.',
  ];

  return (
    <section id="bridal" className="py-24 md:py-32 bg-[#FAF8F5] my-6 rounded-[36px] sm:rounded-[48px] shadow-editorial max-w-[1400px] mx-auto px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Magazine-Style Overlapping Photography */}
          <div className="lg:col-span-6 relative">
            {/* Primary Portrait Card */}
            <div className="relative aspect-[3/4] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl bg-[#EFE8E4]">
              <img
                src={bridalImg}
                alt="AA Professional Salon Premier Bridal Makeup and Wedding Artistry in Ranchi"
                className="w-full h-full object-cover object-center filter contrast-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

              {/* Atelier Stamp */}
              <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 shadow-sm">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#111625] flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3 h-3 text-[#C49A6C]" />
                  Bridal Suite Atelier
                </span>
              </div>
            </div>

            {/* Overlapping Secondary Card (Mehendi / Henna detail) */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-44 sm:w-56 aspect-square rounded-[22px] sm:rounded-[26px] overflow-hidden border-4 border-white shadow-2xl bg-white hidden sm:block">
              <img
                src={mehendiImg}
                alt="Intricate Handcrafted Bridal Mehendi Detail"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[10px] font-mono text-white tracking-wider">
                Fine Art Mehendi
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Planning Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-3 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premier Bridal Makeup & Wedding Styling</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#111625] font-light leading-[1.12] mb-6 [text-wrap:balance]">
              Radiant Bridal Artistry
            </h2>

            <p className="text-base sm:text-lg text-[#4E5668] font-light leading-relaxed mb-8 [text-wrap:balance]">
              AA Professional creates flawless, long-lasting, camera-ready bridal looks through premium products, high-definition techniques, and personal consultations. Support both soft ethereal and high-glam bridal styles.
            </p>

            <div className="space-y-3.5 mb-10 pb-6 border-b border-[#E8DDD8]">
              {bridalHighlights.map((hl) => (
                <div key={hl} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FAF5F2] border border-[#E8DDD8] flex items-center justify-center shrink-0 mt-0.5 text-[#C49A6C]">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-[#5D6577] font-light leading-relaxed">
                    {hl}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onPlanBridal}
                className="px-8 py-3.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <CalendarHeart className="w-4 h-4" />
                <span>Plan Your Bridal Look</span>
              </button>

              <a
                href="https://wa.me/919036551386?text=Hello%20AA%20Professional%20Salon,%20I%20would%20like%20to%20inquire%20about%20Bridal%20Makeover%20Packages."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium text-[#111625] border border-[#D8CCC7] hover:border-[#C49A6C] hover:text-[#C49A6C] rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-[#C49A6C]" />
                <span>WhatsApp Bridal Desk</span>
              </a>
            </div>

            <p className="text-[11px] text-[#868E9E] mt-6 font-mono tracking-wider">
              Private VIP bridal chambers available at Tara Tower, Ranchi & Korrah Rd, Hazaribagh.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
