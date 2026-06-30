import type { ReactNode } from "react";

type HighlightBoxProps = {
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

export default function HighlightBox({
  children,
  dark = false,
  className = "",
}: HighlightBoxProps) {
  return (
    <div
      className={`animate-fade-up rounded-2xl border px-8 py-7 text-center shadow-sm ${
        dark
          ? "border-accent/30 bg-olive-dark/50 backdrop-blur-sm"
          : "border-border bg-card"
      } ${className}`}
    >
      {children}
    </div>
  );
}
