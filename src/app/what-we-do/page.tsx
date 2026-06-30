import {
  Smartphone,
  TrendingUp,
  Film,
  Calendar,
  Scissors,
  PenLine,
  Users,
  UserCircle,
} from "lucide-react";
import SlideShell from "@/components/SlideShell";
import SectionHeading from "@/components/SectionHeading";
import HighlightBox from "@/components/HighlightBox";
import { contentQuote, services } from "@/data/portfolio";

const serviceIcons = [
  Smartphone,
  TrendingUp,
  Film,
  Calendar,
  Scissors,
  PenLine,
  Users,
  UserCircle,
];

export default function WhatWeDoPage() {
  return (
    <SlideShell path="/what-we-do" theme="light">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-8 md:px-12 md:py-12">
        <SectionHeading title="What We Do" className="mb-10 animate-fade-up" />

        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = serviceIcons[i] ?? Smartphone;
            return (
              <div
                key={service.title}
                className="animate-fade-up flex items-start gap-4"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-olive-dark text-card shadow-lg">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-secondary">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <HighlightBox>
          {contentQuote.lines.map((line) => (
            <p key={line} className="font-heading text-base font-medium text-primary md:text-lg">
              {line}
            </p>
          ))}
        </HighlightBox>
      </div>
    </SlideShell>
  );
}
