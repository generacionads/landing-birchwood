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
    description: "If only one or two teeth are missing, opting for a single implant to support a crown can be a worthwhile solution. In comparison, traditional bridges often require the alteration of adjacent healthy teeth to function correctly.",
    icon: "/icons/services/single-tooth.png"
  },
  {
    title: "Multi Tooth Implants",
    description: "One of the most significant advantages of opting for dental implants is that they fuse with the jawbone when appropriately done, allowing them to last as long as permanent teeth. This also provides solid foundations for multiple-tooth or full-arch dental restorations.",
    icon: "/icons/services/multi-tooth.png"
  },
  {
    title: "Both Jaws",
    description: "involves surgically implanting titanium implants or posts into the jawbone where you used to have teeth to serve as artificial roots for your prosthodontics",
    icon: "/icons/services/both-jaws.png"
  },
  {
    title: "Full Arch Implants (All-on-X)",
    description: "They offer a permanent solution for replacing all teeth in one arch (either the lower or upper jaw), thereby providing a stable, natural-looking smile and enhancing chewing function.",
    icon: "/icons/services/full-arch.png"
  },
  {
    title: "All-on-X (AOX) Dental Implants",
    description: "Dental implant surgery involves surgically placing a small, screw-like post (the implant) into the jawbone to replace a missing tooth root and then attaching a replacement tooth (such as a crown, bridge, or denture) to it.",
    icon: "/icons/services/all-on-x.png"
  },
  {
    title: "Denture Stabilisation",
    description: "Stabilised dentures are increasing in popularity at present, and having implants inserted into the jawbone leads to the possibility of other restoration solutions, such as crowns and bridges. Having dentures firmly secured to implants can significantly improve your quality of life.",
    icon: "/icons/services/denture.png"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Implant Assessment",
    description: "We assess your oral health with state-of-the-art 3D scanners and design a bespoke treatment plan.",
    image: "/images/process/implant-assessment.png"
  },
  {
    number: "02",
    title: "Bone Augmentation",
    description: "If necessary, we build up the bone structure to ensure a solid foundation for your new implants.",
    image: "/images/process/bone-augmentation.png"
  },
  {
    number: "03",
    title: "Implant Placement",
    description: "Painless surgical intervention under local anaesthetic to place the titanium implant into the bone.",
    image: "/images/process/implant-placement.png"
  },
  {
    number: "04",
    title: "Implant Stabilisation Period",
    description: "A healing period (osseointegration) where the implant fuses with the jawbone to create a permanent root.",
    image: "/images/process/healing-period.png"
  },
  {
    number: "05",
    title: "Placing New Teeth",
    description: "We fit your custom-made crown, bridge, or fixed denture onto the stabilised implants.",
    image: "/images/process/final-restoration.png"
  },
  {
    number: "06",
    title: "Complete Smile",
    description: "Your treatment is complete. You leave the clinic ready to smile, eat, and speak with confidence.",
    image: "/images/process/complete-smile.png"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Consultation",
    price: "Free",
    features: [
      "Initial assessment",
      "3D CT Scan (if required)",
      "Bespoke Treatment Plan"
    ]
  },
  {
    name: "Single Tooth Implant",
    price: "From £2,500",
    features: [
      "Premium Titanium Implant",
      "Custom Ceramic Crown",
      "Surgical Placement",
      "Post-operative Review",
      "Lifetime Warranty on Implant"
    ],
    isPopular: true
  },
  {
    name: "Full Arch Solutions",
    price: "Bespoke Quote",
    features: [
      "All-on-4 / All-on-X Techniques",
      "Immediate Fixed Teeth",
      "Sedation Options Available",
      "Comprehensive Aftercare",
      "Full Mouth Rehabilitation"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Full Mouth Rehabilitation",
    description: "Here are the results after this patient had received their dental implant treatment. The appearance of their teeth has been improved considerably.  This patient can eat comfortably, smile, and speak confidently. With the proper maintenance, this smile can last a lifetime.",
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