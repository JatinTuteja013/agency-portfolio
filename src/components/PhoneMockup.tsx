import Image, { type StaticImageData } from "next/image";

type PhoneMockupProps = {
  label?: string;
  imageSrc?: string | StaticImageData;
  highlights?: string[];
  className?: string;
};

export default function PhoneMockup({
  label = "Instagram Feed",
  imageSrc = "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=800&fit=crop",
  highlights = [],
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="relative">
        <div className="absolute -inset-3 rounded-[2.5rem] bg-sage/60 blur-xl" />
        <div className="relative rounded-[2.2rem] border-[3px] border-dark bg-dark p-2 shadow-2xl">
          <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-primary" />
          <div className="relative aspect-[9/19.5] w-[220px] overflow-hidden rounded-[1.8rem] bg-background md:w-[260px]">
            <Image
              src={imageSrc}
              alt={label}
              fill
              className="object-cover"
              sizes="260px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="rounded-full bg-dark/60 px-3 py-1 text-[10px] font-medium text-card backdrop-blur-sm">
                {label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {highlights.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
