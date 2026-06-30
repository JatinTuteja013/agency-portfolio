import { brandProfiles } from "@/data/brands";

export type SlideMeta = {
  id: number;
  slug: string;
  label: string;
  path: string;
  theme: "dark" | "light";
};

const caseStudySlides: SlideMeta[] = brandProfiles.map((brand, i) => ({
  id: 6 + i,
  slug: brand.slug,
  label: brand.name,
  path: `/case-studies/${brand.slug}`,
  theme: "light" as const,
}));

export const slides: SlideMeta[] = [
  { id: 1, slug: "cover", label: "Cover", path: "/", theme: "dark" },
  { id: 2, slug: "who-we-are", label: "Who We Are", path: "/who-we-are", theme: "light" },
  { id: 3, slug: "what-we-do", label: "What We Do", path: "/what-we-do", theme: "light" },
  { id: 4, slug: "process", label: "Our Process", path: "/process", theme: "dark" },
  { id: 5, slug: "brands", label: "Brands", path: "/brands", theme: "light" },
  ...caseStudySlides,
  {
    id: 6 + brandProfiles.length,
    slug: "why-us",
    label: "Why Work With Us",
    path: "/why-us",
    theme: "dark",
  },
  {
    id: 7 + brandProfiles.length,
    slug: "contact",
    label: "Let's Work Together",
    path: "/contact",
    theme: "dark",
  },
];

export function getSlideByPath(path: string) {
  return slides.find((s) => s.path === path) ?? slides[0];
}

export function getAdjacentSlides(path: string) {
  const index = slides.findIndex((s) => s.path === path);
  return {
    prev: index > 0 ? slides[index - 1] : null,
    next: index < slides.length - 1 ? slides[index + 1] : null,
    current: slides[index] ?? slides[0],
  };
}
