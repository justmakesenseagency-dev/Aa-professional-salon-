import { useState } from 'react';
import { SALON_FAQS } from '../data/salonData';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FAF8F5] my-6 rounded-[36px] sm:rounded-[48px] shadow-editorial max-w-[1400px] mx-auto px-6 sm:px-12 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C49A6C] mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#111625] font-light mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#5D6577] font-light max-w-lg mx-auto leading-relaxed">
            Essential information regarding our studio operating hours, reservation process, bespoke consultations, and salon policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {SALON_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;
            return (
              <div
                key={faq.question}
                className="bg-[#FFFFFF] border border-[#EBE3DE] hover:border-[#D8CCC7] rounded-[20px] transition-colors duration-200 overflow-hidden shadow-sm"
              >
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C49A6C]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-[11px] font-mono text-[#C49A6C] uppercase tracking-wider shrink-0 font-medium">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif text-[#111625]">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C49A6C] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-6 pt-0 text-sm text-[#5D6577] font-light leading-relaxed border-t border-[#F2EAE6]"
                  >
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Footnote */}
        <div className="mt-12 p-6 rounded-[22px] bg-[#FFFFFF] border border-[#EBE3DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5D6577] shadow-sm">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-4 h-4 text-[#C49A6C] shrink-0" />
            <span>Have a specific inquiry not listed above?</span>
          </div>
          <a
            href="mailto:support@aaprofessional.in"
            className="text-[#C49A6C] hover:text-[#111625] font-mono uppercase tracking-wider transition-colors font-medium"
          >
            support@aaprofessional.in →
          </a>
        </div>

      </div>
    </section>
  );
}
