import {
  Search,
  Lightbulb,
  Clock,
  MessageCircle,
  Target,
  Layers,
} from "lucide-react";
import SlideShell from "@/components/SlideShell";
import SectionHeading from "@/components/SectionHeading";
import HighlightBox from "@/components/HighlightBox";
import { whyWorkWithUs, whyQuote } from "@/data/portfolio";

const whyIcons = [Search, Lightbulb, Clock, MessageCircle, Target, Layers];

export default function WhyUsPage() {
  return (
    <SlideShell path="/why-us" theme="dark">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-8 md:px-12 md:py-12">
        <SectionHeading title="Why Work With Us" dark className="mb-12 animate-fade-up" />

        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {whyWorkWithUs.map((item, i) => {
            const Icon = whyIcons[i] ?? Search;
            return (
              <div
                key={item.title}
                className="animate-fade-up flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-olive-dark/50">
                  <Icon className="h-6 w-6 text-sage" strokeWidth={1.5} />
                </span>
                <h3 className="font-heading text-xs font-bold text-card md:text-sm">
                  {item.title}
                </h3>
                <p className="mt-1 hidden text-[10px] text-caption lg:block">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <HighlightBox dark>
          <p className="font-heading text-lg font-semibold leading-relaxed text-card md:text-xl">
            {whyQuote}
          </p>
        </HighlightBox>
      </div>
    </SlideShell>
  );
}
