import heroImg from '../assets/images/hero_salon_cinematic_1790779441083.jpg';
import hairImg from '../assets/images/hair_balayage_lux_1790779454572.jpg';
import bridalImg from '../assets/images/bridal_artistry_portrait_1790779468892.jpg';
import skinImg from '../assets/images/skincare_cosmetology_lux_1790779481607.jpg';
import mehendiImg from '../assets/images/mehendi_bridal_art_1790779496551.jpg';
import nailsImg from '../assets/images/nails_couture_lux_1790779508232.jpg';

export { heroImg, hairImg, bridalImg, skinImg, mehendiImg, nailsImg };

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'beauty' | 'bridal' | 'nails' | 'cosmetology' | 'mehendi';
  shortDesc: string;
  fullDesc: string;
  startingPrice: string;
  duration: string;
  image: string;
  highlights: string[];
}

export const EDITORIAL_SERVICES: ServiceItem[] = [
  {
    id: 'hair',
    name: 'Hair Artistry & Couture',
    category: 'hair',
    shortDesc: 'Bespoke Balayage, precision sculpting, Rebonding, and intensive restorative bond therapies.',
    fullDesc: 'Our master stylists design dimensional colour, tailored geometry, and silky texture transformations customized to your hair profile and personal silhouette.',
    startingPrice: '₹1,200',
    duration: '60–180 mins',
    image: hairImg,
    highlights: ['L’Oréal & Schwarzkopf Professional', 'Custom Formulation Profiling', 'Bond-Protecting Complex']
  },
  {
    id: 'beauty',
    name: 'Skincare & Beauty',
    category: 'beauty',
    shortDesc: 'Cellular oxygenation facials, illuminating rituals, and luxury rejuvenation protocols.',
    fullDesc: 'A holistic curation of deep clarifying, botanical infusion, and youth-restoring skin therapies designed to achieve glass-like radiance and inner calm.',
    startingPrice: '₹1,800',
    duration: '45–90 mins',
    image: skinImg,
    highlights: ['Micro-Exfoliation', 'Hydra-Infusion Rituals', 'Sensory Aromatherapy']
  },
  {
    id: 'bridal',
    name: 'Bridal Makeover',
    category: 'bridal',
    shortDesc: 'Flawless HD & Airbrush wedding makeovers crafted for 16-hour long-wear and cinematic camera brilliance.',
    fullDesc: 'From intimate Sangeet glamour to regal Muhurat elegance, our master bridal artists curate bespoke looks harmonized with your trousseau, skin undertone, and lighting.',
    startingPrice: '₹15,000',
    duration: '180–240 mins',
    image: bridalImg,
    highlights: ['High-Definition & Airbrush', 'Bridal Jewellery & Draping', 'Personalised Trial Session']
  },
  {
    id: 'nails',
    name: 'Nails & Hand Couture',
    category: 'nails',
    shortDesc: 'Architectural gel extensions, French chrome leafing, and restorative luxury Russian manicure rituals.',
    fullDesc: 'Refined hand and nail sculpting using medical-grade sterilization, long-lasting hard gel polymers, and artistic minimalism designed for elegance.',
    startingPrice: '₹1,500',
    duration: '60–90 mins',
    image: nailsImg,
    highlights: ['Russian Dry Manicure', 'Swarovski & Chrome Accents', 'Damage-Free Removal']
  },
  {
    id: 'cosmetology',
    name: 'Clinical Cosmetology',
    category: 'cosmetology',
    shortDesc: 'Dermat-guided chemical peels, targeted hyperpigmentation therapy, and collagen stimulation.',
    fullDesc: 'Advanced cosmetic treatments utilizing clinical-grade bio-active actives, gentle epidermal resurfacing, and LED phototherapy for transformative skin health.',
    startingPrice: '₹2,500',
    duration: '60–75 mins',
    image: skinImg,
    highlights: ['AHA/BHA Precision Peels', 'Non-Invasive Meso-Boost', 'Targeted Acne & Melasma Protocols']
  },
  {
    id: 'mehendi',
    name: 'Fine Art Mehendi',
    category: 'mehendi',
    shortDesc: 'Organic Rajasthani dark-stain henna crafted in delicate bridal florals, figures, and heritage lace.',
    fullDesc: 'Pure triple-filtered Rajasthani organic henna hand-mixed with pure eucalyptus and tea-tree essential oils, ensuring rich mahogany stains and timeless bridal memories.',
    startingPrice: '₹3,000',
    duration: '90–300 mins',
    image: mehendiImg,
    highlights: ['100% Organic Henna', 'Custom Heritage Motifs', 'Deep Mahogany Stain Guarantee']
  },
];

export interface SignatureHairRate {
  service: string;
  gender: 'Female' | 'Male' | 'Unisex';
  price: number;
  formattedPrice: string;
  category: string;
  description: string;
}

export const SIGNATURE_HAIR_PRICES: SignatureHairRate[] = [
  {
    service: 'Smoothening',
    gender: 'Female',
    price: 5500,
    formattedPrice: '₹5,500',
    category: 'Smoothening & Texture',
    description: 'Glossy, frizz-free satin finish with keratin sealant for manageable fluidity.'
  },
  {
    service: 'Smoothening',
    gender: 'Male',
    price: 2800,
    formattedPrice: '₹2,800',
    category: 'Smoothening & Texture',
    description: 'Tames unruly waves with a natural soft finish tailored for shorter hairstyles.'
  },
  {
    service: 'Balayage',
    gender: 'Female',
    price: 4000,
    formattedPrice: '₹4,000',
    category: 'Colour Artistry',
    description: 'Hand-painted dimensional transitions that grow out seamlessly with zero harsh lines.'
  },
  {
    service: 'Rebonding',
    gender: 'Female',
    price: 6000,
    formattedPrice: '₹6,000',
    category: 'Smoothening & Texture',
    description: 'Ultra-sleek, mirror-straight transformation infused with micro-keratin nutrients.'
  },
  {
    service: 'Full Hair Colour',
    gender: 'Female',
    price: 2500,
    formattedPrice: '₹2,500',
    category: 'Colour Artistry',
    description: 'Rich, uniform gloss and root-to-tip depth using ammonia-free luxury pigments.'
  },
  {
    service: 'Full Highlights',
    gender: 'Female',
    price: 3500,
    formattedPrice: '₹3,500',
    category: 'Colour Artistry',
    description: 'High-precision micro-foils providing sun-kissed reflection and optical volume.'
  }
];

export const ALL_MENU_CATEGORIES = [
  {
    category: 'Hair Treatments & Texture',
    items: [
      { name: 'Female Rebonding', price: '₹6,000', time: '180 mins', desc: 'Permanent mirror-straight silky lock transformation.' },
      { name: 'Female Smoothening', price: '₹5,500', time: '150 mins', desc: 'Deep protein infusion with satin moisture seal.' },
      { name: 'Male Smoothening', price: '₹2,800', time: '90 mins', desc: 'Natural texture relaxation for executive grooming.' },
      { name: 'Botox Hair Therapy', price: '₹4,500', time: '120 mins', desc: 'Anti-aging hair fiber reconstruction with collagen.' },
      { name: 'Olaplex Bond Multiplier', price: '₹2,200', time: '45 mins', desc: 'Repairs disulphide bonds broken by heat and chemical processing.' },
      { name: 'Cysteine Protein Treatment', price: '₹4,800', time: '120 mins', desc: 'Formaldehyde-free smoothing ritual for delicate locks.' }
    ]
  },
  {
    category: 'Hair Colour & Creative Highlights',
    items: [
      { name: 'Female Balayage Artistry', price: '₹4,000', time: '180 mins', desc: 'Custom freehand sun-kissed gradients in caramel, mocha, or copper.' },
      { name: 'Female Full Highlights', price: '₹3,500', time: '150 mins', desc: 'Dimensional multidirectional micro-weaving throughout.' },
      { name: 'Female Full Hair Colour', price: '₹2,500', time: '90 mins', desc: 'Rich vibrant coverage with high-reflect gloss glaze.' },
      { name: 'Root Touch-Up (Ammonia Free)', price: '₹1,500', time: '60 mins', desc: 'Seamless regrowth match with conditioning shine.' },
      { name: 'Ombre French Fade', price: '₹4,200', time: '150 mins', desc: 'Subtle graduated transition from dark base to luminous ends.' }
    ]
  },
  {
    category: 'Bridal & Trousseau Styling',
    items: [
      { name: 'Signature HD Bridal Makeover', price: '₹15,000', time: '210 mins', desc: 'Full high-definition makeup, hair couture, jewellery setting & dupatta draping.' },
      { name: 'Airbrush Luxury Bridal Experience', price: '₹20,000', time: '240 mins', desc: 'Micro-mist airbrush foundation with waterproof 24h hold & skin prep.' },
      { name: 'Sangeet & Cocktail Glamour', price: '₹7,500', time: '120 mins', desc: 'Dewy luminous base, winged smokey eyes & contemporary textured waves.' },
      { name: 'Groom Luxury Makeover', price: '₹5,000', time: '90 mins', desc: 'Beard sculpting, skin detoxifying hydration, and royal safa styling.' }
    ]
  },
  {
    category: 'Clinical Cosmetology & Facials',
    items: [
      { name: 'Hydra-Glow Dermal Infusion', price: '₹3,200', time: '75 mins', desc: 'Hydro-dermabrasion with peptide serum infusion.' },
      { name: 'Vitamin C Radiance Peel', price: '₹2,800', time: '60 mins', desc: 'Gently dissolves hyperpigmentation and stimulates collagen.' },
      { name: 'Carbon Laser Detox Facial', price: '₹3,500', time: '60 mins', desc: 'Deep pore purification and sebum balancing protocol.' },
      { name: '24K Gold Luxury Illuminating Facial', price: '₹4,000', time: '90 mins', desc: 'Pure colloidal gold leaf massage for youthful elasticity.' }
    ]
  },
  {
    category: 'Nails & Henna Couture',
    items: [
      { name: 'Full Gel Nail Extensions (Acrylic / Soft Gel)', price: '₹2,400', time: '90 mins', desc: 'Hand-sculpted architectural nails with gel polish.' },
      { name: 'French Chrome Minimalist Gel Polish', price: '₹1,500', time: '60 mins', desc: 'Mirror-finish iridescent chrome rim with glossy top coat.' },
      { name: 'Full Bridal Hand & Feet Mehendi', price: '₹8,500', time: '240 mins', desc: 'Intricate royal Rajasthani figures, jali lace, and personalized wedding stories.' },
      { name: 'Arabic Floral Hand Mehendi', price: '₹3,000', time: '90 mins', desc: 'Graceful diagonal bold floral vines and shading.' }
    ]
  }
];

export interface LookbookEntry {
  id: string;
  title: string;
  category: 'Hair' | 'Bridal' | 'Makeup' | 'Nails' | 'Mehendi';
  technique: string;
  artistNote: string;
  image: string;
  tag: string;
}

export const LOOKBOOK_ITEMS: LookbookEntry[] = [
  {
    id: 'lb-1',
    title: 'Warm Chestnut & Caramel Balayage',
    category: 'Hair',
    technique: 'Hand-swept balayage with Olaplex No. 1 & 2',
    artistNote: 'Tailored for warm undertones to capture radiant sunlight movement with zero blunt edges.',
    image: hairImg,
    tag: '[AA Professional Portfolio Archive / Master Stylist Series]'
  },
  {
    id: 'lb-2',
    title: 'The Royal Muhurat Bride',
    category: 'Bridal',
    technique: 'Matte-luminous HD base, kohl drama & traditional rose bun',
    artistNote: 'Balanced to withstand intense venue lighting while maintaining skin-like translucency.',
    image: bridalImg,
    tag: '[AA Professional Portfolio Archive / Master Stylist Series]'
  },
  {
    id: 'lb-3',
    title: 'Liquid Glass Skin Rejuvenation',
    category: 'Makeup',
    technique: 'Hydra-dermabrasion & peptide micro-mist',
    artistNote: 'Non-invasive collagen revival creating a natural lit-from-within glow.',
    image: skinImg,
    tag: '[AA Professional Portfolio Archive / Master Stylist Series]'
  },
  {
    id: 'lb-4',
    title: 'Heritage Marwar Bridal Mehendi',
    category: 'Mehendi',
    technique: '100% Rajasthani triple-sifted organic henna',
    artistNote: 'Intricate peacock and jharokha architecture drawn with ultra-fine botanical cones.',
    image: mehendiImg,
    tag: '[AA Professional Portfolio Archive / Master Stylist Series]'
  },
  {
    id: 'lb-5',
    title: 'Champagne Chrome Glass Nails',
    category: 'Nails',
    technique: 'Russian cuticle prep with glazed champagne pigment',
    artistNote: 'Understated luxury suited for contemporary brides and minimalist evening wear.',
    image: nailsImg,
    tag: '[AA Professional Portfolio Archive / Master Stylist Series]'
  },
  {
    id: 'lb-6',
    title: 'Satin Silk Smoothening Transformation',
    category: 'Hair',
    technique: 'Nano-keratin thermal realignment',
    artistNote: 'Converted dense coarse curls into featherlight flowing satin with long-lasting humidity guard.',
    image: heroImg,
    tag: '[AA Professional Portfolio Archive / Master Stylist Series]'
  }
];

export interface BranchInfo {
  id: 'ranchi' | 'hazaribagh';
  city: string;
  name: string;
  address: string;
  landmark: string;
  phone: string;
  email: string;
  hours: string;
  pincode: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
  facilities: string[];
}

export const BRANCHES: BranchInfo[] = [
  {
    id: 'ranchi',
    city: 'Ranchi',
    name: 'AA Professional Flagship Studio',
    address: 'Tara Tower, Ground Floor, Kutchery Chowk, Radium Road, opposite Maharaja Hotel, Ranchi – 834001',
    landmark: 'Opposite Maharaja Hotel, Radium Road',
    phone: '+91 90365-51386',
    email: 'support@aaprofessional.in',
    hours: 'Monday–Sunday, 10:00 AM–9:00 PM',
    pincode: '834001',
    googleMapsUrl: 'https://maps.google.com/?q=Tara+Tower+Kutchery+Chowk+Radium+Road+Ranchi+834001',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Tara%20Tower,%20Kutchery%20Chowk,%20Radium%20Road,%20Ranchi%20834001&t=&z=15&ie=UTF8&iwloc=&output=embed',
    facilities: ['Dedicated VIP Bridal Suite', 'Private Aesthetic Rooms', 'Complimentary Valet Parking', 'Espresso & Herbal Tea Bar']
  },
  {
    id: 'hazaribagh',
    city: 'Hazaribagh',
    name: 'AA Professional Hazaribagh Studio',
    address: 'Korrah Rd, Jabra, Hazaribagh, Jharkhand 825303',
    landmark: 'Near Jabra Crossing, Korrah Road',
    phone: '+91 90365-51386',
    email: 'support@aaprofessional.in',
    hours: 'Monday–Sunday, 10:00 AM–9:00 PM',
    pincode: '825303',
    googleMapsUrl: 'https://maps.google.com/?q=Korrah+Rd+Jabra+Hazaribagh+Jharkhand+825303',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Korrah%20Rd,%20Jabra,%20Hazaribagh,%20Jharkhand%20825303&t=&z=15&ie=UTF8&iwloc=&output=embed',
    facilities: ['Full Hair Transformation Floor', 'Bridal Dressing Pods', 'Dedicated Nail Studio', 'Hygienic Sterilization Bay']
  }
];

export const STYLISTS = [
  { id: 'first_available', name: 'First Available Senior Artist', role: 'Curated by Concierge Desk', experience: 'Salon Certified' },
  { id: 'master_hair', name: 'Master Hair Director', role: 'Hair Sculpting & Texture Specialist', experience: 'Senior Direction' },
  { id: 'colour_specialist', name: 'Senior Colour Specialist', role: 'Balayage & Pigment Formulations', experience: 'Senior Direction' },
  { id: 'bridal_lead', name: 'Lead Bridal Makeover Artist', role: 'HD & Airbrush Bridal Styling', experience: 'Senior Direction' },
  { id: 'skin_specialist', name: 'Clinical Aesthetician', role: 'Cosmetology & Dermal Therapies', experience: 'Senior Direction' }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const SALON_FAQS: FAQItem[] = [
  {
    category: 'Hours & Operations',
    question: 'What are the official salon hours for AA Professional?',
    answer: 'AA Professional operates Monday–Sunday, 10:00 AM–9:00 PM across both our Ranchi flagship (Tara Tower, Radium Road) and Hazaribagh studio (Korrah Road).'
  },
  {
    category: 'Reservations',
    question: 'How do I book an appointment?',
    answer: 'Appointments can be reserved online through our 5-step visual booking flow on this website, or directly by contacting our concierge desk via phone or WhatsApp at +91 90365-51386. Our concierge confirms your private suite within 30 minutes.'
  },
  {
    category: 'Disciplines',
    question: 'What beauty and styling services do you provide?',
    answer: 'We provide specialized hair artistry (smoothening, balayage, rebonding, color, and bond repairs), skincare and beauty rituals, high-definition bridal makeovers, nail sculpting, clinical cosmetology peels, and Rajasthani organic mehendi.'
  },
  {
    category: 'Policies',
    question: 'What is the appointment cancellation policy?',
    answer: 'We request that guests notify us at least 4 hours in advance for standard salon services, or 48 hours for bridal makeup and wedding parties, allowing our concierge to accommodate waitlisted guests.'
  },
  {
    category: 'Consultations',
    question: 'Do you offer consultations before hair, skin, or bridal treatments?',
    answer: 'Yes. Every technical service begins with a complimentary diagnostic consultation. Our artists assess hair integrity, scalp conditions, facial contouring, and personal goals before formulating custom treatments.'
  },
  {
    category: 'Hair Care',
    question: 'How often should I schedule a haircut or trim?',
    answer: 'For optimal hair health, shape preservation, and split-end prevention, we recommend scheduling a precision trim every 6 to 8 weeks, or every 10 to 12 weeks for guests growing out layered length.'
  }
];

export const TIME_SLOTS = [
  '10:30 AM',
  '11:30 AM',
  '12:30 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
  '06:30 PM',
  '07:30 PM'
];
