import { hairImg, skinImg } from '../data/salonData';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export default function BrandIntro() {
  return (
    <section id="brand-intro" className="py-24 md:py-32 bg-[#FAF8F5] relative my-6 rounded-[36px] sm:rounded-[48px] shadow-editorial max-w-[1400px] mx-auto px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Heart of Style</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#111625] font-light leading-tight">
            The AA Professional Journey
          </h2>
        </div>

        {/* Asymmetric Editorial Grid (Inspired by Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Top-Left Dark Feature Box (Matching reference top-left dark box) */}
          <div className="md:col-span-7 bg-[#1E2538] text-white p-8 sm:p-12 rounded-[28px] flex flex-col justify-between shadow-editorial relative overflow-hidden">
            <div className="relative z-10 space-y-5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C49A6C] font-mono block">
                Bespoke Beauty Sanctuary
              </span>
              <p className="text-base sm:text-lg text-[#F4ECE9] font-light leading-relaxed">
                AA Professional is a sanctuary where high-end beauty meets deeply personal care. The salon combines expert artistry, premium products, modern techniques, and tailored consultations to create timeless looks that inspire confidence.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs text-[#A6AFC2] font-light">
                Operating across Ranchi & Hazaribagh
              </div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-colors cursor-pointer"
              >
                <span>Our Artistry</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Top-Right Photographic Card */}
          <div className="md:col-span-5 rounded-[28px] overflow-hidden aspect-[4/3] md:aspect-auto shadow-editorial relative group bg-[#EFE8E4]">
            <img
              src={hairImg}
              alt="AA Professional Hair Artistry and Consultation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8DDD8]">
                Master Craft
              </span>
              <p className="text-sm font-serif text-[#FFFFFF]">Precision Color & Texture Alchemy</p>
            </div>
          </div>

          {/* Bottom-Left Photographic Card */}
          <div className="md:col-span-4 rounded-[28px] overflow-hidden aspect-[4/3] md:aspect-auto shadow-editorial relative group bg-[#EFE8E4]">
            <img
              src={skinImg}
              alt="AA Professional Skincare and Cosmetology"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8DDD8]">
                Sanctuary Care
              </span>
              <p className="text-sm font-serif text-[#FFFFFF]">Restorative Dermal Therapies</p>
            </div>
          </div>

          {/* Bottom-Center Sage Green Feature Card (Matching Reference's Sage Card!) */}
          <div className="md:col-span-8 bg-[#556B5F] text-white p-8 sm:p-10 rounded-[28px] shadow-editorial flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#E4ECE7] font-mono block mb-5">
              The AA Professional Standard
            </span>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-white text-[#556B5F] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base text-[#F4ECE9] font-light leading-snug">
                  Expert stylists & aesthetic artists with years of certified master salon experience.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-white text-[#556B5F] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base text-[#F4ECE9] font-light leading-snug">
                  Modern chemical and clinical techniques blended with timeless, personalized elegance.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-white text-[#556B5F] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base text-[#F4ECE9] font-light leading-snug">
                  A welcoming private sanctuary built specifically for guest comfort and unhurried self-care.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
