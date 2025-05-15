import { Gmail } from "@/components/icons/Gmail";
import { Twitter } from "@/components/icons/twitter";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export const media = [
  {
    id: 1,
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61572546119542",
  },
  {
    id: 2,
    icon: Instagram,
    href: "https://www.instagram.com/hestiaforcandles/",

  },
  { id: 3, icon: MessageCircle, href: "https://wa.me/", color: "#25D366" },

  {
    id: 5,
    icon: Twitter,
    href: "https://x.com/hestiacandles/status/1884625507095818435?t=XeRhA69uDGTVYXmozqGJDw&s=19",
  },
  {
    id: 6,
    icon: Gmail,
    href: "mailto:mostaphyasser18@gmail.com?",

  },
];

// ################################hero-section ########################################


// Updated carousel images with custom button text
export const carouselImages = [
  {
    id: 1,
    src: '/images/hero-img/slider1.webp',
    alt: 'About Us',
    title: "Engineering Excellence Since 2005",
    description: "Trusted EPCC partner across the Levant region",
    pageLink: "/about-us",
    buttonText: "Discover Our Story"
  },
  {
    id: 2,
    src: '/images/hero-img/slider2.jpg',
    alt: 'Specialties',
    title: "Complete Oil & Gas Solutions",
    description: "From pipelines to tank farms and metering stations",
    pageLink: "/specialties",
    buttonText: "Explore Services"
  },
  {
    id: 3,
    src: '/images/hero-img/slider3.jpg',
    alt: 'Expertise',
    title: "End-to-End Project Management",
    description: "Design, procurement, construction, and commissioning",
    pageLink: "/expertise",
    buttonText: "View Capabilities"
  },
  {
    id: 4,
    src: '/images/hero-img/slider4.jpg',
    alt: 'Principle',
    title: "Values That Drive Success",
    description: "Honesty, accountability, and continuous improvement",
    pageLink: "/principle",
    buttonText: "Our Principles"
  }

];