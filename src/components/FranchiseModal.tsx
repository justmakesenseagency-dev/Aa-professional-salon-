import { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FranchiseModal({ isOpen, onClose }: FranchiseModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Ranchi',
    investmentRange: '₹35L – ₹50L',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FFFFFF] border border-[#EBE3DE] rounded-[28px] p-6 sm:p-8 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white hover:bg-[#F2EAE6] text-[#111625] transition-colors cursor-pointer border border-[#E8DDD8]"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#FAF5F2] border border-[#EFE5E0] flex items-center justify-center mx-auto mb-4 text-[#C49A6C]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#111625] mb-2">
              Inquiry Received
            </h3>
            <p className="text-xs text-[#5D6577] leading-relaxed mb-6 font-light">
              Thank you, {form.name}. Our franchise development desk will review your details for {form.city} and contact you directly via {form.phone}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs uppercase tracking-wider bg-[#C49A6C] text-white font-medium rounded-full cursor-pointer shadow-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-1 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Partnership Atelier</span>
              </div>
              <h3 className="text-2xl font-serif text-[#111625]">
                Franchise & Partner Inquiries
              </h3>
              <p className="text-xs text-[#5D6577] font-light mt-1">
                Partner with Eastern India’s emerging luxury salon brand.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#6A7282] font-mono">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-full px-4 py-2.5 text-xs text-[#111625] focus:border-[#C49A6C] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#6A7282] font-mono">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 90000-00000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-full px-4 py-2.5 text-xs text-[#111625] focus:border-[#C49A6C] focus:outline-none font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#6A7282] font-mono">
                Proposed City / Location *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Jamshedpur, Dhanbad, Bokaro, Patna"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-full px-4 py-2.5 text-xs text-[#111625] focus:border-[#C49A6C] focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#6A7282] font-mono">
                Investment Appetite
              </label>
              <select
                value={form.investmentRange}
                onChange={(e) => setForm({ ...form, investmentRange: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-full px-4 py-2.5 text-xs text-[#111625] focus:border-[#C49A6C] focus:outline-none"
              >
                <option value="₹25L – ₹35L">₹25 Lakhs – ₹35 Lakhs (Studio Format)</option>
                <option value="₹35L – ₹50L">₹35 Lakhs – ₹50 Lakhs (Flagship Format)</option>
                <option value="₹50L+">₹50 Lakhs+ (Multi-Floor Bridal Lounge)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#6A7282] font-mono">
                Prior Retail / Salon Experience (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Briefly tell us about your background or commercial space available..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-[#D8CCC7] rounded-[18px] px-4 py-2.5 text-xs text-[#111625] focus:border-[#C49A6C] focus:outline-none resize-none"
              />
            </div>

            <div className="pt-4 border-t border-[#F2EAE6] flex items-center justify-between">
              <span className="text-[11px] text-[#868E9E]">
                Direct Line: +91 90365-51386
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs uppercase tracking-wider font-medium bg-[#C49A6C] text-white hover:bg-[#B38859] rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
