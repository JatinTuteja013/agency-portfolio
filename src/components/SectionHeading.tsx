type SectionHeadingProps = {
  label?: string;
  title: string;
  className?: string;
  dark?: boolean;
};

export default function SectionHeading({
  label,
  title,
  className = "",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {label}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl ${
          dark ? "text-card" : "text-primary"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
