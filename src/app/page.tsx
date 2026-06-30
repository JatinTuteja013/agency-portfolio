import SlideShell from "@/components/SlideShell";
import { coverBackground } from "@/data/assets";

export default function CoverPage() {
  return (
    <SlideShell path="/" theme="dark" backgroundImage={coverBackground} backgroundOverlayClass="bg-dark/55">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-16 text-center md:px-12">
        <div className="animate-fade-up">
          <h1 className="font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-card sm:text-4xl md:text-5xl lg:text-6xl">
            We Turn Brands Into Stories{" "}
            <span className="text-sage">People Love To Remember</span>
          </h1>
        </div>
      </div>
    </SlideShell>
  );
}
