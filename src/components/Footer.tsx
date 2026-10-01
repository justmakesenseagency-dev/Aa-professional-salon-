import { Phone, Mail, Clock, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenMenu: () => void;
  onOpenBooking: () => void;
  onOpenFranchise: () => void;
}

export default function Footer({ onOpenMenu, onOpenBooking, onOpenFranchise }: FooterProps) {
  return (
    <footer className="bg-[#111625] text-[#A6AFC2] pt-20 pb-12 text-xs rounded-t-[40px] sm:rounded-t-[56px] mt-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-2xl font-serif tracking-[0.16em] uppercase text-white block">
              AA Professional
            </span>
            <p className="text-xs text-[#8E99AF] max-w-sm leading-relaxed font-light">
              A luxury beauty and makeover sanctuary in Jharkhand. Dedicated to precision hair alchemy, high-definition bridal couture, restorative clinical cosmetology, and fine art mehendi.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C49A6C] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://wa.me/919036551386?text=Hello%20AA%20Professional%20Salon,%20I%20would%20like%20to%20connect%20with%20your%20desk."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C49A6C] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>WhatsApp Desk</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Services Links */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C49A6C] font-mono block">
              Artistry Menu
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#hair-services" className="hover:text-white transition-colors">
                  Signature Hair Artistry
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-white transition-colors">
                  Bridal & Wedding Styling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Clinical Cosmetology
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Nails & Russian Manicures
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Rajasthani Organic Mehendi
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenMenu}
                  className="text-[#C49A6C] hover:underline cursor-pointer"
                >
                  Complete Service Menu →
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Studio & Inquiries */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C49A6C] font-mono block">
              Atelier & Inquiries
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#branches" className="hover:text-white transition-colors">
                  Ranchi Flagship Branch
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-white transition-colors">
                  Hazaribagh Studio
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-white transition-colors">
                  Wedding Consultation Desk
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Reserve Private Appointment
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenFranchise}
                  className="text-[#C49A6C] hover:underline cursor-pointer"
                >
                  Franchise & Partner Inquiries →
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Concierge Contact */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C49A6C] font-mono block">
              Contact & Hours
            </span>
            <div className="space-y-2.5 text-xs font-light">
              <a
                href="tel:+919036551386"
                className="flex items-center gap-2 text-white hover:text-[#C49A6C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C49A6C] shrink-0" />
                <span className="tabular-nums font-mono">+91 90365-51386</span>
              </a>

              <a
                href="mailto:support@aaprofessional.in"
                className="flex items-center gap-2 text-[#D4D9E2] hover:text-[#C49A6C] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C49A6C] shrink-0" />
                <span>support@aaprofessional.in</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#C49A6C] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Monday–Sunday<br />
                  <span className="font-mono text-white">10:00 AM–9:00 PM</span>
                </span>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C49A6C] shrink-0 mt-0.5" />
                <span className="text-[#8E99AF] leading-relaxed">
                  Ranchi: Radium Road<br />
                  Hazaribagh: Korrah Road
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6A768F]">
          <p>© {new Date().getFullYear()} AA Professional Salon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-white transition-colors">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-white transition-colors">Hygiene & Safety Protocols</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
