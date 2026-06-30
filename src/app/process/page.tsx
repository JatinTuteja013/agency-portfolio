import {
  Search,
  BarChart3,
  Calendar,
  Camera,
  Send,
  LineChart,
} from "lucide-react";
import SlideShell from "@/components/SlideShell";
import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/data/portfolio";

const stepIcons = [Search, BarChart3, Calendar, Camera, Send, LineChart];

export default function ProcessPage() {
  return (
    <SlideShell path="/process" theme="dark">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-8 md:px-12 md:py-12">
        <SectionHeading title="Our Process" dark className="mb-12 animate-fade-up" />

        <div className="relative space-y-0">
          <div className="absolute bottom-8 left-7 top-8 w-px bg-accent/40 md:left-8" />

          {processSteps.map((step, i) => {
            const Icon = stepIcons[i] ?? Search;
            return (
              <div
                key={step.step}
                className="animate-fade-up relative flex items-start gap-6 pb-10 last:pb-0"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-2 border-accent bg-olive-dark shadow-lg">
                  <Icon className="mb-0.5 h-4 w-4 text-sage" strokeWidth={1.5} />
                  <span className="font-heading text-[10px] font-bold text-card">
                    {step.step}
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="font-heading text-lg font-bold text-card md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed text-caption">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}
