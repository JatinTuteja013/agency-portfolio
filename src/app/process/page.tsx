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
        <SectionHeading title="Our Process" dark className="mb-10 animate-fade-up" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i] ?? Search;
            return (
              <div
                key={step.step}
                className="animate-fade-up flex items-start gap-4"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-2 border-accent bg-olive-dark text-card shadow-lg">
                  <Icon className="mb-0.5 h-4 w-4 text-sage" strokeWidth={1.5} />
                  <span className="font-heading text-[10px] font-bold">{step.step}</span>
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold text-card md:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-caption">
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
