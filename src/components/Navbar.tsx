import { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
}

export default function Navbar({ onOpenBooking, onOpenMenu }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileDrawerOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 md:px-8 py-3 sm:py-4 ${
          scrolled ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#EAE0D8]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* 1. Left: Brand Monogram & Title */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#111625] text-white flex items-center justify-center font-serif text-sm font-semibold tracking-wider group-hover:bg-[#C49A6C] transition-colors">
              AA
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#111625] leading-none">
                AA Professional
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#868E9E]">
                Ranchi & Hazaribagh
              </span>
            </div>
          </a>

          {/* 2. Center: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-[0.18em] text-[#4E5668]">
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-[#C49A6C] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('signature-hair')}
              className="hover:text-[#C49A6C] transition-colors cursor-pointer"
            >
              Signature Hair
            </button>
            <button
              onClick={() => scrollToSection('bridal')}
              className="hover:text-[#C49A6C] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-[#C49A6C]" />
              Bridal
            </button>
            <button
              onClick={() => scrollToSection('lookbook')}
              className="hover:text-[#C49A6C] transition-colors cursor-pointer"
            >
              Lookbook
            </button>
            <button
              onClick={() => scrollToSection('branches')}
              className="hover:text-[#C49A6C] transition-colors cursor-pointer"
            >
              Studios
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-[#C49A6C] transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={onOpenMenu}
              className="hover:text-[#C49A6C] transition-colors cursor-pointer underline underline-offset-4"
            >
              Rate Card
            </button>
          </nav>

          {/* 3. Right: Call Concierge & Book CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+919036551386"
              className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#111625] hover:text-[#C49A6C] transition-colors px-3 py-2 rounded-full border border-[#E4D8CE] bg-white/70"
            >
              <Phone className="w-3.5 h-3.5 text-[#C49A6C]" />
              <span>+91 90365-51386</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-[#111625] hover:bg-[#C49A6C] text-white text-xs font-mono uppercase tracking-[0.16em] transition-all duration-300 shadow-sm cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C49A6C]" />
              <span className="hidden xs:inline">Book Experience</span>
              <span className="xs:hidden">Book</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label="Open mobile menu"
              onClick={() => setMobileDrawerOpen(true)}
              className="lg:hidden p-2 rounded-lg text-[#111625] hover:bg-black/5"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm lg:hidden">
          <div className="w-[85%] max-w-sm bg-[#FAF8F5] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EAE0D8]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#111625] text-white flex items-center justify-center font-serif text-xs font-semibold">
                    AA
                  </div>
                  <span className="font-serif text-lg font-semibold text-[#111625]">
                    AA Professional
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1 rounded-full hover:bg-black/5 text-[#111625]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 py-8 text-sm font-mono uppercase tracking-wider text-[#111625]">
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left py-2 hover:text-[#C49A6C] border-b border-[#F0E6DE]"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('signature-hair')}
                  className="text-left py-2 hover:text-[#C49A6C] border-b border-[#F0E6DE]"
                >
                  Signature Hair Care
                </button>
                <button
                  onClick={() => scrollToSection('bridal')}
                  className="text-left py-2 hover:text-[#C49A6C] border-b border-[#F0E6DE] flex items-center justify-between"
                >
                  <span>Bridal Makeover</span>
                  <Sparkles className="w-4 h-4 text-[#C49A6C]" />
                </button>
                <button
                  onClick={() => scrollToSection('lookbook')}
                  className="text-left py-2 hover:text-[#C49A6C] border-b border-[#F0E6DE]"
                >
                  Lookbook & Transformations
                </button>
                <button
                  onClick={() => scrollToSection('branches')}
                  className="text-left py-2 hover:text-[#C49A6C] border-b border-[#F0E6DE]"
                >
                  Studios (Ranchi & Hazaribagh)
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-left py-2 hover:text-[#C49A6C] border-b border-[#F0E6DE]"
                >
                  Frequently Asked Questions
                </button>
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onOpenMenu();
                  }}
                  className="text-left py-2 text-[#C49A6C] font-semibold"
                >
                  View Complete Rate Card →
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#EAE0D8] space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                <MapPin className="w-4 h-4 text-[#C49A6C]" />
                <span>Ranchi Flagship & Hazaribagh Studio</span>
              </div>
              <a
                href="tel:+919036551386"
                className="w-full py-3 rounded-xl bg-[#FAF5F0] border border-[#E4D8CE] flex items-center justify-center gap-2 text-xs font-mono text-[#111625] font-medium"
              >
                <Phone className="w-4 h-4 text-[#C49A6C]" />
                <span>Call +91 90365-51386</span>
              </a>
              <button
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-[#111625] hover:bg-[#C49A6C] text-white text-xs font-mono uppercase tracking-widest text-center"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
