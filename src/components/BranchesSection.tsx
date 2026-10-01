import { useState } from 'react';
import { BRANCHES, BranchInfo } from '../data/salonData';
import { MapPin, Phone, Mail, Clock, Navigation, Check, ExternalLink, Sparkles } from 'lucide-react';

interface BranchesSectionProps {
  onSelectBranchForBooking: (branchId: 'ranchi' | 'hazaribagh') => void;
}

export default function BranchesSection({ onSelectBranchForBooking }: BranchesSectionProps) {
  const [selectedBranch, setSelectedBranch] = useState<'ranchi' | 'hazaribagh'>('ranchi');

  const activeBranchData = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];

  return (
    <section id="branches" className="py-24 md:py-32 bg-[#FAF8F5] my-6 rounded-[36px] sm:rounded-[48px] shadow-editorial max-w-[1400px] mx-auto px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-[#E8DDD8] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-3 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Locations & Sanctuaries</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#111625] font-light">
              Our Studio Addresses
            </h2>
          </div>
          <p className="text-sm text-[#5D6577] max-w-md font-light leading-relaxed">
            Visit our two premier destinations in Jharkhand—designed with private consulting suites, hygienic sterilization bays, and serene lounge hospitality.
          </p>
        </div>

        {/* Branch Selection Buttons */}
        <div className="flex items-center gap-3 mb-10">
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBranch(b.id)}
              className={`px-6 py-3 text-xs uppercase tracking-[0.16em] font-medium rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                selectedBranch === b.id
                  ? 'bg-[#C49A6C] text-white shadow-sm'
                  : 'bg-white text-[#5D6577] hover:text-[#111625] border border-[#E8DDD8]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{b.city} Studio</span>
            </button>
          ))}
        </div>

        {/* Detailed Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Selected Branch Info Card */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#EBE3DE] rounded-[28px] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C49A6C] bg-[#FAF5F2] border border-[#EFE5E0] px-3 py-1 rounded-full">
                  {activeBranchData.city} Flagship Destination
                </span>
                <span className="text-xs text-[#556B5F] font-mono flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#556B5F] animate-pulse" />
                  Open Today
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#111625] mb-6">
                {activeBranchData.name}
              </h3>

              {/* Coordinates & Detailed Address */}
              <div className="space-y-6 mb-8 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C49A6C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#868E9E] uppercase tracking-wider block font-mono">
                      Exact Address
                    </span>
                    <p className="text-[#111625] font-light leading-relaxed">
                      {activeBranchData.address}
                    </p>
                    <p className="text-xs text-[#6A7282] mt-1 italic">
                      Landmark: {activeBranchData.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#C49A6C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#868E9E] uppercase tracking-wider block font-mono">
                      Operating Hours
                    </span>
                    <p className="text-[#111625] font-light font-mono tabular-nums">
                      {activeBranchData.hours}
                    </p>
                    <p className="text-xs text-[#6A7282] mt-0.5">
                      Open 7 days a week, including festival seasons
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#C49A6C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#868E9E] uppercase tracking-wider block font-mono">
                      Concierge Desk
                    </span>
                    <a
                      href={`tel:${activeBranchData.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-[#C49A6C] hover:underline font-mono text-base tabular-nums font-medium"
                    >
                      {activeBranchData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#C49A6C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#868E9E] uppercase tracking-wider block font-mono">
                      Official Email
                    </span>
                    <a
                      href="mailto:support@aaprofessional.in"
                      className="text-[#C49A6C] hover:underline font-mono text-sm"
                    >
                      support@aaprofessional.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Suite Facilities */}
              <div className="pt-6 border-t border-[#F2EAE6] mb-8">
                <span className="text-xs uppercase tracking-[0.2em] text-[#868E9E] block mb-3 font-mono">
                  Studio Amenities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeBranchData.facilities.map((fac) => (
                    <div key={fac} className="flex items-center gap-2 text-xs text-[#4E5668]">
                      <Check className="w-3.5 h-3.5 text-[#556B5F]" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Branch Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-[#F2EAE6]">
              <button
                onClick={() => onSelectBranchForBooking(activeBranchData.id)}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full text-center transition-colors shadow-sm cursor-pointer"
              >
                Reserve at {activeBranchData.city}
              </button>

              <a
                href={activeBranchData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-xs uppercase tracking-[0.16em] font-medium text-[#111625] border border-[#D8CCC7] hover:border-[#C49A6C] hover:text-[#C49A6C] rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C49A6C]" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3 h-3 text-[#868E9E]" />
              </a>
            </div>
          </div>

          {/* Right Column: Alternate branch quick card & Clean Map Frame */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {BRANCHES.filter((b) => b.id !== selectedBranch).map((other) => (
              <div
                key={other.id}
                onClick={() => setSelectedBranch(other.id)}
                className="p-6 rounded-[24px] bg-[#FFFFFF] border border-[#EBE3DE] hover:border-[#C49A6C] cursor-pointer transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase text-[#C49A6C]">
                    Alternate Location
                  </span>
                  <span className="text-xs text-[#868E9E]">Switch to view →</span>
                </div>
                <h4 className="text-xl font-serif text-[#111625] mb-2">{other.city} Studio</h4>
                <p className="text-xs text-[#5D6577] line-clamp-2 leading-relaxed mb-3">
                  {other.address}
                </p>
                <div className="text-xs text-[#C49A6C] font-mono tabular-nums font-medium">
                  {other.phone}
                </div>
              </div>
            ))}

            {/* Clean Map Frame */}
            <div className="rounded-[24px] overflow-hidden border border-[#EBE3DE] bg-[#FFFFFF] aspect-[16/10] relative shadow-sm">
              <iframe
                title={`${activeBranchData.name} Map Location`}
                src={activeBranchData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-full border border-[#EBE3DE] flex items-center justify-between text-[11px] text-[#5D6577] shadow-sm">
                <span className="truncate pr-2">{activeBranchData.landmark}</span>
                <a
                  href={activeBranchData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C49A6C] hover:underline shrink-0 font-mono font-medium flex items-center gap-1"
                >
                  Open Maps <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
