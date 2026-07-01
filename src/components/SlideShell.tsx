import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { StaticImageData } from "next/image";
import SiteNav from "@/components/SiteNav";
import SlideKeyboardNav from "@/components/SlideKeyboardNav";
import { getAdjacentSlides, slides } from "@/data/slides";

type SlideShellProps = {
  path: string;
  theme?: "dark" | "light";
  children: React.ReactNode;
  className?: string;
  backgroundImage?: StaticImageData | string;
  backgroundOverlayClass?: string;
};

export default function SlideShell({
  path,
  theme = "light",
  children,
  className = "",
  backgroundImage,
  backgroundOverlayClass = "bg-dark/55",
}: SlideShellProps) {
  const { prev, next, current } = getAdjacentSlides(path);
  const isDark = theme === "dark";
  const isBrandRoute = path === "/brands" || path.startsWith("/case-studies");
  const hasBackground = Boolean(backgroundImage);
  const footerOnLight =
    (!hasBackground && !isDark) ||
    Boolean(backgroundOverlayClass?.includes("bg-background"));
  const footerLinkClass = footerOnLight
    ? "text-secondary hover:text-black active:text-black"
    : "text-caption hover:text-white active:text-white";

  return (
    <div
      className={`relative flex min-h-screen flex-col ${
        hasBackground
          ? "text-card"
          : isDark
            ? "slide-gradient-dark text-card"
            : "slide-gradient-light text-primary"
      } ${className}`}
    >
      {hasBackground && (
        <>
          {((path && path.startsWith("/case-studies")) || path === "/brands") ? (
            <>
              <Image
                src={backgroundImage!}
                alt=""
                fill
                className="hidden sm:block pointer-events-none object-cover"
                priority={path === "/"}
                sizes="100vw"
              />
              <div className={`hidden sm:block pointer-events-none absolute inset-0 ${backgroundOverlayClass}`} />
            </>
          ) : (
            <>
              <Image
                src={backgroundImage!}
                alt=""
                fill
                className="pointer-events-none object-cover"
                priority={path === "/"}
                sizes="100vw"
              />
              <div className={`pointer-events-none absolute inset-0 ${backgroundOverlayClass}`} />
            </>
          )}
        </>
      )}

      <SlideKeyboardNav path={path} />

      <header className="relative z-20 flex items-center justify-between gap-4 px-6 py-5 md:px-12 md:py-6">
        <div className="ml-auto lg:ml-0">
          <SiteNav light={!hasBackground && !isDark} iconDark={isBrandRoute} />
        </div>

        <div className="hidden sm:flex shrink-0 items-center gap-4">
          <span
            className={`font-heading text-sm font-bold tracking-widest ${
              hasBackground || isDark ? "text-sage" : "text-accent"
            }`}
          >
            {String(current.id).padStart(2, "0")}
          </span>
          <span className="text-xs text-caption">
            / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col">{children}</main>

      <footer
        className={`relative z-20 px-6 py-4 md:px-12 ${
          footerOnLight ? "border-t border-border" : "border-t border-white/10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-6 sm:gap-10">
            {prev ? (
              <Link
                href={prev.path}
                className={`group flex items-center gap-2 text-sm font-medium transition-colors ${footerLinkClass}`}
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">{prev.label}</span>
                <span className="sm:hidden">Prev</span>
              </Link>
            ) : (
              <span className="invisible flex items-center gap-2 text-sm">
                <ChevronLeft className="h-4 w-4" />
                <span>Prev</span>
              </span>
            )}

            {next ? (
              <Link
                href={next.path}
                className={`group flex items-center gap-2 text-sm font-medium transition-colors ${footerLinkClass}`}
              >
                <span className="hidden sm:inline">{next.label}</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <span className="invisible flex items-center gap-2 text-sm">
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </span>
            )}
          </div>

          <nav className="flex items-center justify-center gap-1">
            {slides.map((slide) => (
              <Link
                key={slide.slug}
                href={slide.path}
                title={slide.label}
                className={`h-1.5 rounded-full transition-all ${
                  slide.path === path
                    ? `w-6 ${footerOnLight ? "bg-black" : "bg-white"}`
                    : `w-1.5 ${
                        footerOnLight
                          ? "bg-border hover:bg-black active:bg-black"
                          : "bg-white/20 hover:bg-white active:bg-white"
                      }`
                }`}
              />
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
