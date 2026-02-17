import { Smile, ShieldCheck, Clock, CheckCircle2, Star, Zap, Activity, Layers, HeartPulse, UserCheck } from 'lucide-react';
import { ServiceItem, ProcessStep, PricingTier, CaseStudy } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Process', href: '#process' },
  { name: 'Case Studies', href: '#gallery' },
  { name: 'Pricing', href: '#pricing' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Single Tooth Implant",
    description: "If one or two teeth are missing, a single implant with a custom crown provides a strong, natural replacement without affecting adjacent teeth.",
    icon: "/icons/services/single-tooth.png"
  },
  {
    title: "Multi-Tooth Implants",
    description: "Implants fuse with the jawbone to create a long-lasting foundation for several missing teeth or larger fixed restorations.",
    icon: "/icons/services/multi-tooth.png"
  },
  {
    title: "Both Jaws",
    description: "We surgically place implants in the jawbone where teeth are missing to act as stable, artificial roots for prosthetic teeth.",
    icon: "/icons/services/both-jaws.png"
  },
  {
    title: "Full Arch (All-on-X)",
    description: "A reliable permanent solution to replace a complete upper or lower arch with fixed, natural-looking teeth.",
    icon: "/icons/services/full-arch.png"
  },
  {
    title: "Denture Stabilisation",
    description: "Implants can be used to anchor dentures firmly, improving comfort, function, and quality of life.",
    icon: "/icons/services/denture.png"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Assessment",
    description: "We evaluate your oral health with advanced 3D scanning and design a personalised treatment plan.",
    image: "/images/process/implant-assessment.png"
  },
  {
    number: "02",
    title: "Bone Preparation",
    description: "If needed, we build up bone structure to ensure a solid foundation for implants.",
    image: "/images/process/bone-augmentation.png"
  },
  {
    number: "03",
    title: "Implant Placement",
    description: "A comfortable procedure performed under local anaesthesia to position the implant in the jawbone.",
    image: "/images/process/implant-placement.png"
  },
  {
    number: "04",
    title: "Healing & Integration",
    description: "The implant integrates with the bone (osseointegration), creating a secure, long-lasting bond.",
    image: "/images/process/healing-period.png"
  },
  {
    number: "05",
    title: "Final Restoration",
    description: "We fit your custom-made crown, bridge or fixed denture.",
    image: "/images/process/final-restoration.png"
  },
  {
    number: "06",
    title: "New Smile",
    description: "Your treatment is complete — enjoy eating, smiling and speaking with confidence.",
    image: "/images/process/complete-smile.png"
  }
];

export const PRICING_TIERS: PricingTier[] = [

  {
    name: "Single Tooth Implant",
    price: "From £2,500",
    features: [
      "Premium titanium implant",
      "Custom ceramic crown",
      "Surgical placement",
      "Post-op review",
      "Lifetime implant warranty"
    ],
    isPopular: true
  },
  {
    name: "Full Arch Solutions",
    price: "Bespoke Quote",
    features: [
      "All-on-X / All-on-4 techniques",
      "Immediate fixed teeth options",
      "Sedation available",
      "Comprehensive aftercare"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Full Mouth Rehabilitation",
    description: "Before and after photos show how properly placed implants can improve function and appearance while boosting confidence.",
    beforeImage: "/images/case-studies/before-implants.png",
    afterImage: "/images/case-studies/after-implants.png"
  }
];

export const BENEFITS = [
  {
    title: "Natural Look & Feel",
    description: "Designed to look, feel, and function exactly like your natural teeth.",
    icon: Smile
  },
  {
    title: "Permanent Solution",
    description: "With proper care, dental implants can last a lifetime, unlike bridges or dentures.",
    icon: ShieldCheck
  },
  {
    title: "Preserves Bone",
    description: "Implants stimulate bone growth and prevent the loss of facial structure and jawbone density.",
    icon: Zap
  },
  {
    title: "Eat What You Like",
    description: "Recover up to 99% of your bite force. Enjoy your favourite foods without restriction.",
    icon: CheckCircle2
  }
];