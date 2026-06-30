import type { StaticImageData } from "next/image";

import bruhaus01 from "./bruhaus_official/01.jpeg";
import bruhaus02 from "./bruhaus_official/02.jpeg";
import bruhaus03 from "./bruhaus_official/03.jpeg";
import bruhausLogo from "./bruhaus_official/logo.jpg";

import khakhratoz01 from "./khakhratoz/01.jpeg";
import khakhratoz02 from "./khakhratoz/02.jpeg";
import khakhratoz03 from "./khakhratoz/03.jpeg";
import khakhratozLogo from "./khakhratoz/logo.jpg";

import physio01 from "./physiofitbytanisha/01.jpeg";
import physio02 from "./physiofitbytanisha/02.jpeg";
import physio03 from "./physiofitbytanisha/03.jpeg";
import physioLogo from "./physiofitbytanisha/logo.jpg";

import shantaz01 from "./shantaz_technofoods/01.jpeg";
import shantaz02 from "./shantaz_technofoods/02.jpeg";
import shantazLogo from "./shantaz_technofoods/logo.jpg";

import slein01 from "./slein.in/01.jpeg";
import slein02 from "./slein.in/02.jpeg";
import slein03 from "./slein.in/03.jpeg";
import sleinLogo from "./slein.in/logo.jpg";

import supriya01 from "./supriyalifestylebazaar/01.jpeg";
import supriya02 from "./supriyalifestylebazaar/02.jpeg";
import supriya03 from "./supriyalifestylebazaar/03.jpeg";
import supriyaLogo from "./supriyalifestylebazaar/logo.jpg";

import xfashion01 from "./xfashionfabrics/01.jpeg";
import xfashion02 from "./xfashionfabrics/02.jpeg";
import xfashion03 from "./xfashionfabrics/03.jpeg";
import xfashionLogo from "./xfashionfabrics/logo.jpg";

export type BrandProfile = {
  slug: string;
  name: string;
  instagram: string;
  instagramUrl: string;
  logo: StaticImageData;
  logoInitials: string;
  images: StaticImageData[];
  challenge: string;
  strategy: string[];
  deliverables: string[];
  mockupLabel: string;
  highlights: string[];
  accentColor: string;
};

const brands: BrandProfile[] = [
  {
    slug: "bru-haus-cafe",
    name: "Brü Haus Café",
    instagram: "@bruhaus_official",
    instagramUrl: "https://www.instagram.com/bruhaus_official/",
    logo: bruhausLogo,
    logoInitials: "BH",
    images: [bruhaus01, bruhaus02, bruhaus03],
    challenge:
      "Build a premium café presence and increase awareness through engaging social media content.",
    strategy: [
      "Premium food & beverage storytelling",
      "Reel-first content strategy",
      "Seasonal campaigns",
      "Influencer collaborations",
    ],
    deliverables: [
      "Social Media Strategy",
      "Reels",
      "Event Campaigns",
      "Influencer Marketing",
      "Content Planning",
      "Caption Writing",
      "Story Content",
    ],
    mockupLabel: "Café Feed",
    highlights: ["Food Reels", "Event Coverage", "Story Content"],
    accentColor: "#8B6F47",
  },
  {
    slug: "khakhratoz",
    name: "Khakhratoz",
    instagram: "@khakhratoz",
    instagramUrl: "https://www.instagram.com/khakhratoz/",
    logo: khakhratozLogo,
    logoInitials: "KZ",
    images: [khakhratoz01, khakhratoz02, khakhratoz03],
    challenge:
      "Position Khakhratoz as a modern, healthy, and premium snacking brand.",
    strategy: [
      "Product-first storytelling",
      "Trend-driven Reels",
      "Healthy lifestyle positioning",
      "Premium visual branding",
    ],
    deliverables: [
      "Social Media Strategy",
      "Instagram Reels",
      "Carousel Posts",
      "Campaign Creatives",
      "YouTube Shorts",
      "Copywriting",
      "SEO & Hashtags",
    ],
    mockupLabel: "Snack Brand",
    highlights: ["Product Reels", "Carousels", "Campaign Creatives"],
    accentColor: "#C17F3B",
  },
  {
    slug: "physio-fit",
    name: "Physio Fit",
    instagram: "@physiofitbytanisha",
    instagramUrl: "https://www.instagram.com/physiofitbytanisha/",
    logo: physioLogo,
    logoInitials: "PF",
    images: [physio01, physio02, physio03],
    challenge:
      "Create awareness around children's fitness and educate parents through engaging content.",
    strategy: [
      "Parent-focused educational content",
      "Play-based fitness storytelling",
      "Summer Camp promotion",
      "Community engagement",
    ],
    deliverables: [
      "Content Strategy",
      "Reels",
      "Carousels",
      "Campaign Content",
      "YouTube Shorts",
      "Caption Writing",
      "Content Calendar",
    ],
    mockupLabel: "Fitness Content",
    highlights: ["Kids Fitness", "Educational Reels", "Summer Camp"],
    accentColor: "#3D8B8B",
  },
  {
    slug: "shantaz-technofoods",
    name: "Shantaz Technofoods",
    instagram: "@shantaz_technofoods",
    instagramUrl: "https://www.instagram.com/shantaz_technofoods/",
    logo: shantazLogo,
    logoInitials: "ST",
    images: [shantaz01, shantaz02],
    challenge:
      "Position Shantaz as a trusted automation and food manufacturing partner.",
    strategy: [
      "Educational manufacturing content",
      "Business-focused storytelling",
      "Product showcase",
      "Automation & robotics positioning",
    ],
    deliverables: [
      "Social Media Management",
      "Reels",
      "Carousel Posts",
      "Product Positioning",
      "YouTube Shorts",
      "Copywriting",
      "Creative Planning",
    ],
    mockupLabel: "Manufacturing",
    highlights: ["Factory Reels", "Product Showcase", "B2B Content"],
    accentColor: "#4A6FA5",
  },
  {
    slug: "slein",
    name: "SLEIN",
    instagram: "@slein.in",
    instagramUrl: "https://www.instagram.com/slein.in/",
    logo: sleinLogo,
    logoInitials: "SL",
    images: [slein01, slein02, slein03],
    challenge:
      "Build a premium lingerie brand focused on comfort, confidence, and everyday wear.",
    strategy: [
      "Lifestyle branding",
      "Product education",
      "Influencer marketing",
      "UGC campaigns",
    ],
    deliverables: [
      "Brand Strategy",
      "Reels",
      "Carousel Posts",
      "Influencer Campaign",
      "Pinterest SEO",
      "Caption Writing",
      "Community Management",
    ],
    mockupLabel: "Lifestyle Feed",
    highlights: ["Lifestyle Reels", "Influencer UGC", "Product Education"],
    accentColor: "#9B6B8E",
  },
  {
    slug: "supriya-lifestyle-bazaar",
    name: "Supriya Lifestyle Bazaar",
    instagram: "@supriyalifestylebazaar",
    instagramUrl: "https://www.instagram.com/supriyalifestylebazaar/",
    logo: supriyaLogo,
    logoInitials: "SLB",
    images: [supriya01, supriya02, supriya03],
    challenge:
      "Increase awareness and drive footfall for recurring lifestyle exhibitions.",
    strategy: [
      "Event storytelling",
      "Influencer marketing",
      "Countdown campaigns",
      "Live event coverage",
    ],
    deliverables: [
      "Event Strategy",
      "Reels",
      "Story Content",
      "Influencer Scripts",
      "Campaign Planning",
      "Copywriting",
      "Community Engagement",
    ],
    mockupLabel: "Event Coverage",
    highlights: ["Live Events", "Countdown Campaigns", "Influencer Reels"],
    accentColor: "#B85C38",
  },
  {
    slug: "xfashion",
    name: "XFashion",
    instagram: "@xfashionfabrics",
    instagramUrl: "https://www.instagram.com/xfashionfabrics/",
    logo: xfashionLogo,
    logoInitials: "XF",
    images: [xfashion01, xfashion02, xfashion03],
    challenge:
      "Position XFashion as a premium fabric destination through educational content.",
    strategy: [
      "Fabric storytelling",
      "Educational content",
      "Premium branding",
      "SEO-focused content",
    ],
    deliverables: [
      "Social Media Strategy",
      "Reels",
      "Carousel Posts",
      "Caption Writing",
      "Product Storytelling",
      "Content Direction",
      "SEO Optimization",
    ],
    mockupLabel: "Fabric Feed",
    highlights: ["Fabric Reels", "Educational Posts", "Premium Branding"],
    accentColor: "#6B5B95",
  },
];

export const brandProfiles: BrandProfile[] = [...brands].sort((a, b) =>
  a.name.localeCompare(b.name),
);

export function getBrandProfile(slug: string) {
  return brandProfiles.find((b) => b.slug === slug);
}
