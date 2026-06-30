import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import PhoneCarousel from "@/components/PhoneCarousel";
import SectionHeading from "@/components/SectionHeading";
import type { BrandProfile } from "@/data/brands";

function DetailCard({
  title,
  accentColor,
  children,
}: {
  title: string;
  accentColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/92 p-5 shadow-sm backdrop-blur-md">
      <h3
        className="mb-3 font-heading text-xs font-bold uppercase tracking-widest"
        style={{ color: accentColor }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function CaseStudyPage({ brand }: { brand: BrandProfile }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-8 md:px-12 md:py-12">
      <div className="mb-8 flex items-start justify-between gap-4 animate-fade-up">
        <SectionHeading label="Case Study" title={brand.name} />
        <a
          href={brand.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-border/70 bg-card/92 p-3 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
          title={`Visit ${brand.instagram} on Instagram`}
        >
          <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-border bg-card">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
              sizes="56px"
            />
          </div>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-secondary transition-colors group-hover:text-accent">
            <InstagramIcon className="h-3 w-3" />
            {brand.instagram}
          </span>
        </a>
      </div>

      <div className="grid flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up space-y-4" style={{ animationDelay: "0.1s" }}>
          <DetailCard title="Challenge" accentColor={brand.accentColor}>
            <p className="text-sm leading-relaxed text-secondary md:text-base">
              {brand.challenge}
            </p>
          </DetailCard>

          <DetailCard title="Strategy" accentColor={brand.accentColor}>
            <ul className="space-y-2">
              {brand.strategy.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-primary">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: brand.accentColor }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </DetailCard>

          <DetailCard title="Deliverables" accentColor={brand.accentColor}>
            <ul className="space-y-2">
              {brand.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-primary">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${brand.accentColor}22` }}
                  >
                    <Check className="h-3 w-3" style={{ color: brand.accentColor }} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </DetailCard>

          <Link
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-xs font-semibold transition-colors hover:opacity-80"
            style={{ color: brand.accentColor }}
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            View work on Instagram
          </Link>
        </div>

        <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <PhoneCarousel
            images={brand.images}
            label={brand.mockupLabel}
            highlights={brand.highlights}
            accentColor={brand.accentColor}
          />
        </div>
      </div>
    </div>
  );
}
