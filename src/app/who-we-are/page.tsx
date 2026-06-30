import Image from "next/image";
import { Target, TrendingUp, Film, Compass, Palette } from "lucide-react";
import SlideShell from "@/components/SlideShell";
import SectionHeading from "@/components/SectionHeading";
import { studio } from "@/data/portfolio";

const expertiseIcons = [TrendingUp, Target, Film, Compass, Palette];

export default function WhoWeArePage() {
  return (
    <SlideShell path="/who-we-are" theme="light">
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-8 md:px-12 md:py-12">
        <div className="absolute -left-20 top-0 hidden h-full w-1/3 rounded-r-[50%] bg-card lg:block" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up space-y-8">
            <SectionHeading title="Who We Are" />

            <p className="max-w-lg text-base leading-relaxed text-secondary md:text-lg">
              {studio.about}
            </p>

            <ul className="space-y-4">
              {studio.expertise.map((item, i) => {
                const Icon = expertiseIcons[i] ?? Target;
                return (
                  <li key={item} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive-dark text-card">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-heading text-sm font-semibold text-primary md:text-base">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-sage/60" />
            <div className="relative h-[360px] w-[280px] overflow-hidden rounded-[2rem] border-4 border-card shadow-2xl md:h-[420px] md:w-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop"
                alt="Creative team collaborating"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
