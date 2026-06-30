import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import SlideShell from "@/components/SlideShell";
import SectionHeading from "@/components/SectionHeading";
import HighlightBox from "@/components/HighlightBox";
import { brandProfiles } from "@/data/brands";
import { brandsQuote } from "@/data/portfolio";

export default function BrandsPage() {
  return (
    <SlideShell path="/brands" theme="light">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-8 md:px-12 md:py-12">
        <SectionHeading title="Brands We've Worked With" className="mb-10 animate-fade-up" />

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {brandProfiles.map((brand, i) => (
            <div
              key={brand.slug}
              className="animate-fade-up group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <Link
                href={`/case-studies/${brand.slug}`}
                className="flex flex-1 flex-col items-center justify-center"
              >
                <div className="relative mb-3 h-20 w-full md:h-24">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 40vw, 20vw"
                  />
                </div>
                <p className="font-heading text-xs font-bold text-primary md:text-sm">
                  {brand.name}
                </p>
              </Link>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-1 text-[10px] text-caption transition-colors hover:text-accent"
              >
                <InstagramIcon className="h-3 w-3" />
                {brand.instagram}
              </a>
            </div>
          ))}
        </div>

        <HighlightBox>
          <Star className="mx-auto mb-4 h-6 w-6 fill-sage text-accent" />
          {brandsQuote.lines.map((line) => (
            <p key={line} className="font-heading text-lg font-semibold text-primary md:text-xl">
              {line}
            </p>
          ))}
        </HighlightBox>
      </div>
    </SlideShell>
  );
}
