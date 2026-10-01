import { useState, useEffect } from 'react';
import { heroImg, hairImg } from '../data/salonData';
import { Sparkles, Scissors, MapPin, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onBookClick, onExploreClick }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(isReduced);

    if (isReduced) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = reducedMotion ? 0 : Math.min(scrollY * 0.08, 32);

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#FAF8F5] rounded-b-[36px] sm:rounded-b-[56px] shadow-editorial overflow-hidden">
      {/* 1. Abstract Depth Background: Soft Botanical Curves & Silk Swirls */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Radial Warm Light Glows */}
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#F7EFE9] rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-[#EFE4DC] rounded-full blur-3xl opacity-50" />
        
        {/* Subtle Silk-Like Vector Curves */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04] text-[#111625]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          fill="none"
        >
          <path
            d="M-100,200 C300,50 600,450 1100,180 C1300,80 1500,280 1600,320"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M-50,450 C400,250 800,650 1200,380 C1400,250 1550,500 1650,420"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M100,700 C500,500 900,800 1350,550"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* Film grain texture overlay for tactile print-magazine luxury */}
        <div className="absolute inset-0 film-grain opacity-[0.018]" />
      </div>

      {/* 2. Watermark Typography in Background */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 whitespace-nowrap opacity-[0.035] text-[#111625] hidden sm:block">
        <span className="text-[130px] md:text-[180px] lg:text-[220px] font-serif font-light tracking-widest">
          AA Professional
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Massive Serif Brand Typography */}
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-[#111625] font-light tracking-tight leading-[0.95] [text-wrap:balance]">
            AA Professional
          </h1>
        </div>

        {/* 3-Column Interlocking Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Supporting Text, CTAs, and Floating Diagnostic Card */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C49A6C] font-mono block font-medium">
                Where Beauty Meets Confidence
              </span>
              <p className="text-sm sm:text-base text-[#4E5668] font-light leading-relaxed max-w-sm">
                Expert hair, skin, bridal, nail and beauty artistry—personalised for the person you are becoming.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onBookClick}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-2 group"
              >
                <span>Book Your Experience</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onExploreClick}
                className="px-4 py-3 text-xs uppercase tracking-[0.14em] font-medium text-[#111625] hover:text-[#C49A6C] transition-colors cursor-pointer"
              >
                Explore Our Work →
              </button>
            </div>

            {/* Floating Card 1: Diagnostic Consultations */}
            <div className="bg-white p-5 rounded-[22px] shadow-editorial border border-[#EBE3DE] max-w-xs transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF5F2] border border-[#EFE5E0] flex items-center justify-center text-[#C49A6C]">
                  <Scissors className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <span className="text-xs font-serif text-[#111625] font-semibold block leading-tight">
                    Diagnostic Consultations
                  </span>
                  <span className="text-[10px] text-[#868E9E] font-mono uppercase tracking-wider">
                    Ranchi & Hazaribagh
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[#5D6577] font-light leading-snug">
                Every service begins with diagnostic hair and skin profiling to protect fiber integrity.
              </p>
            </div>
          </div>

          {/* Center Column: Arched Editorial Beauty Visual Portal */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div
              className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[3/4] rounded-t-full rounded-b-[40px] overflow-hidden shadow-2xl bg-[#EFE8E4] border-4 border-white select-none transition-transform duration-500 ease-out"
              style={{
                transform: `translate3d(0, -${parallaxOffset}px, 0)`,
              }}
            >
              <img
                src={heroImg}
                alt="AA Professional Salon Hairstyling and Makeover Atelier"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle cinematic vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5F0]/15 via-transparent to-transparent" />
              
              {/* Delicate Botanical Hair Swirl Graphic Watermark in Corner */}
              <div className="absolute top-6 right-6 opacity-30 pointer-events-none">
                <Sparkles className="w-5 h-5 text-white" />
              </div>

              {/* Atelier Stamp Badge */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/40 shadow-sm text-center">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#111625] font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#C49A6C]" />
                  Haute Beauty Atelier
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Statement Philosophy Headline & Arched Privilege Card */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 order-3">
            {/* Primary Headline */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C49A6C] font-mono block font-medium">
                The Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111625] font-light leading-[1.12] [text-wrap:balance]">
                Beauty, in its most confident form.
              </h2>
            </div>

            {/* Floating Arched Privilege Card */}
            <div className="bg-[#1E2538] text-white p-6 rounded-[28px] shadow-editorial border border-white/10 max-w-xs transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden">
              {/* Mini arch visual header */}
              <div className="relative aspect-[16/9] w-full rounded-[16px] overflow-hidden mb-4 bg-black/40">
                <img
                  src={hairImg}
                  alt="AA Professional Salon Hair Artistry"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2538] via-transparent to-transparent" />
                <div className="absolute top-2 left-2">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#C49A6C] bg-black/70 px-2 py-0.5 rounded-full">
                    Welcome Gift
                  </span>
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-serif text-white font-light mb-1">
                25% Off
              </div>
              <p className="text-[11px] text-[#A6AFC2] font-light leading-snug mb-3">
                For new guests across every signature hair, bridal, and beauty package.
              </p>

              <button
                onClick={onBookClick}
                className="w-full py-2.5 text-[11px] uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-colors cursor-pointer text-center"
              >
                Claim Privilege →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Operational Bar */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-[#E8DDD8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5D6577] font-light">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C49A6C]" />
            <span className="text-[#111625] font-medium">Ranchi Flagship:</span>
            <span>Tara Tower, Radium Road</span>
          </div>

          <div className="hidden md:block text-[#D1C5BF]">/</div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C49A6C]" />
            <span className="text-[#111625] font-medium">Hazaribagh Studio:</span>
            <span>Korrah Rd, Jabra</span>
          </div>

          <div className="hidden md:block text-[#D1C5BF]">/</div>

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#C49A6C]" />
            <span className="text-[#111625] font-medium">Studio Hours:</span>
            <span className="font-mono tabular-nums">Mon–Sun 10:00 AM–9:00 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
}
