import { useState } from 'react';
import { BRANCHES, STYLISTS, TIME_SLOTS } from '../data/salonData';
import {
  Sparkles,
  CheckCircle,
  Clock,
  Send,
  Tag,
  ArrowRight,
  ArrowLeft,
  Calendar
} from 'lucide-react';

interface BookingSectionProps {
  initialBranch?: 'ranchi' | 'hazaribagh';
  initialService?: string;
  initialPrice?: number;
  claimedPromo?: string;
}

const AVAILABLE_BOOKING_SERVICES = [
  { id: 'f_smooth', name: 'Female Smoothening', price: 5500, cat: 'Hair' },
  { id: 'm_smooth', name: 'Male Smoothening', price: 2800, cat: 'Hair' },
  { id: 'f_balayage', name: 'Female Balayage Artistry', price: 4000, cat: 'Hair' },
  { id: 'f_rebond', name: 'Female Rebonding', price: 6000, cat: 'Hair' },
  { id: 'f_colour', name: 'Female Full Hair Colour', price: 2500, cat: 'Hair' },
  { id: 'f_highlight', name: 'Female Full Highlights', price: 3500, cat: 'Hair' },
  { id: 'hd_bridal', name: 'Signature HD Bridal Makeover', price: 15000, cat: 'Bridal' },
  { id: 'airbrush_bridal', name: 'Airbrush Luxury Bridal Experience', price: 20000, cat: 'Bridal' },
  { id: 'hydra_facial', name: 'Hydra-Glow Dermal Infusion', price: 3200, cat: 'Beauty' },
  { id: 'gold_facial', name: '24K Gold Illuminating Facial', price: 4000, cat: 'Beauty' },
  { id: 'gel_nails', name: 'Full Gel Nail Extensions', price: 2400, cat: 'Nails' },
  { id: 'bridal_mehendi', name: 'Full Bridal Hand & Feet Mehendi', price: 8500, cat: 'Mehendi' },
];

export default function BookingSection({
  initialBranch = 'ranchi',
  initialService,
  initialPrice,
  claimedPromo = '',
}: BookingSectionProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedBranch, setSelectedBranch] = useState<'ranchi' | 'hazaribagh'>(initialBranch);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['Female Smoothening']
  );
  const [selectedStylist, setSelectedStylist] = useState<string>('first_available');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [selectedTime, setSelectedTime] = useState<string>('11:30 AM');
  const [promoCode, setPromoCode] = useState<string>(claimedPromo || '');
  const [promoApplied, setPromoApplied] = useState<boolean>(!!claimedPromo);
  
  // Guest details
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState('');

  const steps = [
    { num: 1, label: 'Branch' },
    { num: 2, label: 'Services' },
    { num: 3, label: 'Stylist' },
    { num: 4, label: 'Schedule' },
    { num: 5, label: 'Details' },
  ];

  const calculateTotal = () => {
    let subtotal = 0;
    selectedServices.forEach((svcName) => {
      const match = AVAILABLE_BOOKING_SERVICES.find((s) => s.name === svcName);
      if (match) subtotal += match.price;
      else if (initialPrice && svcName === initialService) subtotal += initialPrice;
      else subtotal += 3000;
    });

    const discount = promoApplied ? Math.round(subtotal * 0.25) : 0;
    return {
      subtotal,
      discount,
      finalTotal: subtotal - discount,
    };
  };

  const totals = calculateTotal();

  const handleToggleService = (svcName: string) => {
    if (selectedServices.includes(svcName)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svcName));
      }
    } else {
      setSelectedServices([...selectedServices, svcName]);
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'AAFIRST25') {
      setPromoApplied(true);
    }
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please provide your name and phone number to complete your reservation.');
      return;
    }
    const randomId = `AA-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBookingId(randomId);
    setBookingConfirmed(true);
  };

  const activeBranchObj = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];
  const activeStylistObj = STYLISTS.find((s) => s.id === selectedStylist) || STYLISTS[0];

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#FAF8F5] my-6 rounded-[36px] sm:rounded-[48px] shadow-editorial max-w-[1400px] mx-auto px-6 sm:px-12 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Concierge Atelier</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#111625] font-light mb-4 [text-wrap:balance]">
            Reserve Your AA Professional Experience
          </h2>
          <p className="text-sm md:text-base text-[#5D6577] font-light leading-relaxed">
            Follow our five-step bespoke reservation flow. Every appointment includes a one-on-one diagnostic consultation prior to treatment.
          </p>
        </div>

        {/* 5-Step Visual Flow Indicator */}
        <div className="mb-14">
          <div className="flex items-center justify-between relative max-w-2xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[1px] bg-[#E8DDD8] z-0" />

            {steps.map((st) => {
              const isPast = currentStep > st.num;
              const isCurrent = currentStep === st.num;
              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => !bookingConfirmed && setCurrentStep(st.num)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono transition-all duration-300 ${
                      isCurrent
                        ? 'bg-[#C49A6C] text-white shadow-md font-medium scale-110'
                        : isPast
                        ? 'bg-white border-2 border-[#C49A6C] text-[#C49A6C]'
                        : 'bg-white border border-[#E0D5D0] text-[#868E9E]'
                    }`}
                  >
                    {isPast ? <CheckCircle className="w-4 h-4 text-[#C49A6C]" /> : `0${st.num}`}
                  </div>
                  <span
                    className={`text-[11px] uppercase tracking-wider mt-2.5 transition-colors hidden sm:block ${
                      isCurrent
                        ? 'text-[#C49A6C] font-semibold'
                        : isPast
                        ? 'text-[#111625]'
                        : 'text-[#868E9E]'
                    }`}
                  >
                    {st.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Confirmation Receipt State */}
        {bookingConfirmed ? (
          <div className="p-8 sm:p-12 rounded-[28px] bg-white border border-[#EBE3DE] text-center max-w-2xl mx-auto shadow-editorial">
            <div className="w-16 h-16 rounded-full bg-[#FAF5F2] border border-[#EFE5E0] flex items-center justify-center mx-auto mb-6 text-[#C49A6C]">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C49A6C] block mb-2 font-medium">
              Appointment Request Lodged
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#111625] mb-4">
              We Look Forward to Welcoming You
            </h3>

            <p className="text-sm text-[#5D6577] font-light leading-relaxed mb-8">
              Your request reference is <strong className="font-mono text-[#111625]">{confirmedBookingId}</strong>.
              Our concierge at {activeBranchObj.city} Studio will review calendar availability and contact you via phone or WhatsApp within 30 minutes to confirm your scheduled slot.
            </p>

            {/* Receipt Summary Details */}
            <div className="p-6 bg-[#FAF8F5] border border-[#EBE3DE] rounded-[20px] text-left text-xs space-y-3 mb-8">
              <div className="flex justify-between border-b border-[#E8DDD8] pb-2">
                <span className="text-[#868E9E]">Guest Name:</span>
                <span className="text-[#111625] font-medium">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8DDD8] pb-2">
                <span className="text-[#868E9E]">Location:</span>
                <span className="text-[#111625]">{activeBranchObj.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8DDD8] pb-2">
                <span className="text-[#868E9E]">Selected Service(s):</span>
                <span className="text-[#111625] text-right font-medium">{selectedServices.join(', ')}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8DDD8] pb-2">
                <span className="text-[#868E9E]">Preferred Date & Time:</span>
                <span className="text-[#111625] font-mono">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8DDD8] pb-2">
                <span className="text-[#868E9E]">Stylist Preference:</span>
                <span className="text-[#111625]">{activeStylistObj.name}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-serif">
                <span className="text-[#C49A6C]">Estimated Rate:</span>
                <span className="text-[#C49A6C] font-mono tabular-nums font-semibold">
                  ₹{totals.finalTotal.toLocaleString()} {promoApplied && '(25% Welcome Discount Applied)'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/919036551386?text=Hello%20AA%20Professional%20Salon,%20I%20have%20submitted%20booking%20request%20${confirmedBookingId}%20for%20${encodeURIComponent(formData.fullName)}%20at%20${selectedBranch}%20on%20${selectedDate}%20at%20${selectedTime}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-medium bg-[#25D366] text-black hover:bg-[#20ba59] rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Notify Concierge on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setBookingConfirmed(false);
                  setCurrentStep(1);
                }}
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-[#5D6577] hover:text-[#111625] border border-[#D8CCC7] rounded-full cursor-pointer"
              >
                Start New Booking
              </button>
            </div>
          </div>
        ) : (
          /* Step-By-Step Interactive Form */
          <div className="bg-[#FFFFFF] border border-[#EBE3DE] rounded-[32px] p-6 sm:p-10 shadow-editorial">
            
            {/* Step 1: Branch Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C49A6C] block mb-1 font-medium">
                    Step 1 of 5
                  </span>
                  <h3 className="text-2xl font-serif text-[#111625]">
                    Choose Your Sanctuary Branch
                  </h3>
                  <p className="text-xs text-[#5D6577] font-light mt-1">
                    Select your preferred salon destination in Jharkhand.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {BRANCHES.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => setSelectedBranch(b.id)}
                      className={`p-6 rounded-[22px] border cursor-pointer transition-all duration-300 ${
                        selectedBranch === b.id
                          ? 'bg-[#FAF5F2] border-[#C49A6C] shadow-sm'
                          : 'bg-white border-[#E8DDD8] hover:border-[#D1C5BF]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono uppercase text-[#C49A6C] font-medium">
                          {b.city} Branch
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedBranch === b.id
                              ? 'border-[#C49A6C] bg-[#C49A6C]'
                              : 'border-[#D1C5BF]'
                          }`}
                        >
                          {selectedBranch === b.id && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                      <h4 className="text-xl font-serif text-[#111625] mb-2">{b.name}</h4>
                      <p className="text-xs text-[#5D6577] leading-relaxed mb-4">
                        {b.address}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-[#868E9E] font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#C49A6C]" />
                        <span>{b.hours}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#F2EAE6] flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Proceed to Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Services Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C49A6C] block mb-1 font-medium">
                    Step 2 of 5
                  </span>
                  <h3 className="text-2xl font-serif text-[#111625]">
                    Select Artistry Services
                  </h3>
                  <p className="text-xs text-[#5D6577] font-light mt-1">
                    Choose one or multiple tailored treatments (you can also select bespoke styling on arrival).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[380px] overflow-y-auto pr-1">
                  {AVAILABLE_BOOKING_SERVICES.map((s) => {
                    const isSelected = selectedServices.includes(s.name);
                    return (
                      <div
                        key={s.id}
                        onClick={() => handleToggleService(s.name)}
                        className={`p-4 rounded-[18px] border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#FAF5F2] border-[#C49A6C] shadow-sm'
                            : 'bg-white border-[#E8DDD8] hover:border-[#D1C5BF]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase text-[#868E9E]">
                            {s.cat}
                          </span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-[#C49A6C] bg-[#C49A6C]' : 'border-[#D1C5BF]'
                            }`}
                          >
                            {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                        </div>
                        <h4 className="text-sm font-serif text-[#111625] mb-2">{s.name}</h4>
                        <div className="text-xs font-mono text-[#C49A6C] font-semibold tabular-nums">
                          ₹{s.price.toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-[18px] bg-[#FAF8F5] border border-[#E8DDD8] flex items-center justify-between text-xs">
                  <div className="text-[#5D6577]">
                    <span>{selectedServices.length} Service(s) Chosen</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#868E9E] mr-2">Estimated:</span>
                    <span className="font-serif text-[#111625] text-base font-semibold">
                      ₹{totals.subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#F2EAE6] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider text-[#5D6577] hover:text-[#111625] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Choose Stylist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Stylist Selection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C49A6C] block mb-1 font-medium">
                    Step 3 of 5
                  </span>
                  <h3 className="text-2xl font-serif text-[#111625]">
                    Select Your Artist or Specialist
                  </h3>
                  <p className="text-xs text-[#5D6577] font-light mt-1">
                    Choose from our master-certified colorists, HD bridal artists, or clinical aestheticians.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {STYLISTS.map((st) => (
                    <div
                      key={st.id}
                      onClick={() => setSelectedStylist(st.id)}
                      className={`p-5 rounded-[20px] border cursor-pointer transition-all duration-200 ${
                        selectedStylist === st.id
                          ? 'bg-[#FAF5F2] border-[#C49A6C] shadow-sm'
                          : 'bg-white border-[#E8DDD8] hover:border-[#D1C5BF]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono text-[#C49A6C] font-medium">
                          {st.experience}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedStylist === st.id
                              ? 'border-[#C49A6C] bg-[#C49A6C]'
                              : 'border-[#D1C5BF]'
                          }`}
                        >
                          {selectedStylist === st.id && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                      <h4 className="text-lg font-serif text-[#111625] mb-1">{st.name}</h4>
                      <p className="text-xs text-[#5D6577] font-light">{st.role}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#F2EAE6] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider text-[#5D6577] hover:text-[#111625] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Select Time</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Schedule Selection */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C49A6C] block mb-1 font-medium">
                    Step 4 of 5
                  </span>
                  <h3 className="text-2xl font-serif text-[#111625]">
                    Preferred Date & Time Slot
                  </h3>
                  <p className="text-xs text-[#5D6577] font-light mt-1">
                    Our studios welcome guests 7 days a week from 10:00 AM to 9:00 PM.
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="booking-date" className="block text-xs uppercase tracking-wider text-[#6A7282] font-mono">
                    Select Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-full px-5 py-3 text-sm text-[#111625] focus:border-[#C49A6C] focus:outline-none font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#6A7282] font-mono">
                    Available Time Windows
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-3 px-2 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                          selectedTime === t
                            ? 'bg-[#C49A6C] text-white border-[#C49A6C] font-medium shadow-sm'
                            : 'bg-white border-[#E0D5D0] text-[#5D6577] hover:border-[#C49A6C]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#F2EAE6] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider text-[#5D6577] hover:text-[#111625] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(5)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Guest Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Guest Details & Review */}
            {currentStep === 5 && (
              <form onSubmit={handleSubmitBooking} className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C49A6C] block mb-1 font-medium">
                    Step 5 of 5
                  </span>
                  <h3 className="text-2xl font-serif text-[#111625]">
                    Guest Details & Privilege Verification
                  </h3>
                  <p className="text-xs text-[#5D6577] font-light mt-1">
                    Provide your contact info so our concierge desk can confirm your private suite.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="guest-full-name" className="text-xs uppercase tracking-wider text-[#6A7282] font-mono">
                      Full Name *
                    </label>
                    <input
                      id="guest-full-name"
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-full px-5 py-3 text-sm text-[#111625] focus:border-[#C49A6C] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="guest-phone-number" className="text-xs uppercase tracking-wider text-[#6A7282] font-mono">
                      Phone Number *
                    </label>
                    <input
                      id="guest-phone-number"
                      type="tel"
                      required
                      placeholder="+91 98765-43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-full px-5 py-3 text-sm text-[#111625] focus:border-[#C49A6C] focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="guest-email-address" className="text-xs uppercase tracking-wider text-[#6A7282] font-mono">
                    Email Address (Optional)
                  </label>
                  <input
                    id="guest-email-address"
                    type="email"
                    placeholder="ananya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-full px-5 py-3 text-sm text-[#111625] focus:border-[#C49A6C] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="guest-special-requests" className="text-xs uppercase tracking-wider text-[#6A7282] font-mono">
                    Special Consultation Notes / Allergies / Occasion
                  </label>
                  <textarea
                    id="guest-special-requests"
                    rows={2}
                    placeholder="e.g. Sensitive scalp, bridal muhurat date in November, balayage tone preference..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-[20px] px-5 py-3 text-sm text-[#111625] focus:border-[#C49A6C] focus:outline-none resize-none"
                  />
                </div>

                {/* Promo Code Input */}
                <div className="p-4 rounded-[20px] bg-[#FAF8F5] border border-[#E8DDD8] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5D6577]">
                    <span className="flex items-center gap-1.5 font-mono uppercase tracking-wider">
                      <Tag className="w-3.5 h-3.5 text-[#C49A6C]" />
                      Privilege Code
                    </span>
                    {promoApplied && (
                      <span className="text-[#556B5F] font-mono font-medium">
                        25% Welcome Privilege Applied
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code (e.g. AAFIRST25)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-white border border-[#D8CCC7] rounded-full px-4 py-2 text-xs text-[#111625] font-mono uppercase focus:border-[#C49A6C] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-5 py-2 text-xs uppercase tracking-wider font-medium bg-[#111625] hover:bg-[#C49A6C] text-white rounded-full transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Live Cost Estimation Card */}
                <div className="p-5 rounded-[20px] bg-[#FAF8F5] border border-[#E8DDD8] space-y-2 text-xs">
                  <div className="flex justify-between text-[#5D6577]">
                    <span>Branch & Stylist:</span>
                    <span className="text-[#111625] font-medium">{activeBranchObj.city} · {activeStylistObj.name}</span>
                  </div>
                  <div className="flex justify-between text-[#5D6577]">
                    <span>Appointment Time:</span>
                    <span className="text-[#111625] font-mono">{selectedDate} @ {selectedTime}</span>
                  </div>
                  <div className="flex justify-between text-[#5D6577]">
                    <span>Subtotal ({selectedServices.length} items):</span>
                    <span className="text-[#111625] font-mono tabular-nums font-semibold">₹{totals.subtotal.toLocaleString()}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-[#556B5F] font-medium">
                      <span>25% New Customer Privilege:</span>
                      <span className="font-mono tabular-nums">-₹{totals.discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-[#E8DDD8] flex justify-between text-base font-serif">
                    <span className="text-[#C49A6C]">Estimated Total:</span>
                    <span className="text-[#C49A6C] font-mono tabular-nums font-semibold">₹{totals.finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF5F2] border border-[#EFE5E0] rounded-[16px] text-[11px] text-[#6A7282] leading-relaxed">
                  <strong>Reservation Notice:</strong> Appointment availability is subject to calendar slot confirmation. Our concierge will contact you via phone or WhatsApp within 30 minutes to confirm your private suite.
                </div>

                <div className="pt-6 border-t border-[#F2EAE6] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider text-[#5D6577] hover:text-[#111625] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium bg-[#C49A6C] hover:bg-[#B38859] text-white rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <span>Request Reservation</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
