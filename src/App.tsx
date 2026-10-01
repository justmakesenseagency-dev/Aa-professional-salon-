import { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import PersistentBookingButton from './components/PersistentBookingButton';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import ServicesSection from './components/ServicesSection';
import SignatureHair from './components/SignatureHair';
import BridalFeature from './components/BridalFeature';
import LookbookSection from './components/LookbookSection';
import OfferBanner from './components/OfferBanner';
import BranchesSection from './components/BranchesSection';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ServiceMenuModal from './components/ServiceMenuModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import FranchiseModal from './components/FranchiseModal';
import { ServiceItem } from './data/salonData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [, setPreloaderFinished] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [franchiseModalOpen, setFranchiseModalOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  // Booking cross-state
  const [bookingBranch, setBookingBranch] = useState<'ranchi' | 'hazaribagh'>('ranchi');
  const [bookingService, setBookingService] = useState<string>('Female Smoothening');
  const [bookingPrice, setBookingPrice] = useState<number | undefined>(5500);
  const [claimedPromo, setClaimedPromo] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDirect = (serviceName: string, price?: number) => {
    setBookingService(serviceName);
    if (price) setBookingPrice(price);
    scrollToSection('booking');
  };

  const handleSelectBranchForBooking = (branchId: 'ranchi' | 'hazaribagh') => {
    setBookingBranch(branchId);
    scrollToSection('booking');
  };

  const handleClaimOffer = (code: string) => {
    setClaimedPromo(code);
    scrollToSection('booking');
  };

  const handlePlanBridal = () => {
    setBookingService('Signature HD Bridal Makeover');
    setBookingPrice(15000);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-[#F4EBE8] text-[#111625] selection:bg-[#C49A6C]/30 selection:text-[#111625] relative">
      {/* Luxury Preloader with AA Monogram & Hair Strand Sweep */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Soft desktop cursor */}
      <CustomCursor />

      {/* Floating Top Bar */}
      <Navbar
        onOpenBooking={() => scrollToSection('booking')}
        onOpenMenu={() => setMenuModalOpen(true)}
      />

      {/* Main Website Canvas on Soft Dusty-Blush Surround */}
      <main className="relative z-10">
        {/* 1. Oversized Editorial Hero */}
        <Hero
          onBookClick={() => scrollToSection('booking')}
          onExploreClick={() => scrollToSection('lookbook')}
        />

        {/* 2. Brand Introduction with Asymmetric Sage-Green Grid */}
        <BrandIntro />

        {/* 3. Services (6 Editorial Cards) */}
        <ServicesSection
          onDiscover={(service) => setSelectedServiceDetail(service)}
        />

        {/* 4. Signature Hair Services (Airy Package Cards) */}
        <SignatureHair
          onOpenCompleteMenu={() => setMenuModalOpen(true)}
          onBookService={(name, price) => handleBookDirect(name, price)}
        />

        {/* 5. Bridal Feature (Regal Makeover Section) */}
        <BridalFeature
          onPlanBridal={handlePlanBridal}
        />

        {/* 6. Lookbook & Hair Transformations */}
        <LookbookSection />

        {/* 7. Special Privileges & Offer Banner */}
        <OfferBanner
          onClaimOffer={handleClaimOffer}
        />

        {/* 8. Studio Branches (Ranchi & Hazaribagh) */}
        <BranchesSection
          onSelectBranchForBooking={handleSelectBranchForBooking}
        />

        {/* 9. Visual Interactive Booking Engine */}
        <BookingSection
          initialBranch={bookingBranch}
          initialService={bookingService}
          initialPrice={bookingPrice}
          claimedPromo={claimedPromo}
        />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenMenu={() => setMenuModalOpen(true)}
        onOpenBooking={() => scrollToSection('booking')}
        onOpenFranchise={() => setFranchiseModalOpen(true)}
      />

      {/* Persistent Floating Quick Book Pill */}
      <PersistentBookingButton
        onBookClick={() => scrollToSection('booking')}
      />

      {/* Floating Direct WhatsApp Button */}
      <a
        href="https://wa.me/919036551386?text=Hi%20AA%20Professional%20Salon,%20I%20would%20like%20to%20inquire%20about%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Concierge"
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform flex items-center justify-center cursor-pointer hover:bg-[#20ba59]"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Complete Rate Card Modal */}
      <ServiceMenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        onSelectServiceToBook={(name) => {
          setMenuModalOpen(false);
          handleBookDirect(name);
        }}
      />

      {/* Single Service Discovery Modal */}
      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onBookService={(name) => {
          setSelectedServiceDetail(null);
          handleBookDirect(name);
        }}
      />

      {/* Franchise & Partnership Inquiry Modal */}
      <FranchiseModal
        isOpen={franchiseModalOpen}
        onClose={() => setFranchiseModalOpen(false)}
      />
    </div>
  );
}
