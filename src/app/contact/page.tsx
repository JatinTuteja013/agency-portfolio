import { Mail, Phone, MapPin } from "lucide-react";
import SlideShell from "@/components/SlideShell";
import HighlightBox from "@/components/HighlightBox";
import { contactBackground } from "@/data/assets";
import { studio } from "@/data/portfolio";

const contactItems = [
  { icon: Mail, label: "Email", value: studio.contact.email },
  { icon: Phone, label: "Phone", value: studio.contact.phone },
  { icon: MapPin, label: "Location", value: studio.contact.location },
];

export default function ContactPage() {
  return (
    <SlideShell
      path="/contact"
      theme="dark"
      backgroundImage={contactBackground}
      backgroundOverlayClass="bg-dark/65"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-16 md:px-12">
        <div className="animate-fade-up space-y-8 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-card md:text-4xl lg:text-5xl">
            {studio.contactHeading}
          </h2>

          <ul className="space-y-6 text-left">
            {contactItems.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive-dark/80 backdrop-blur-sm">
                  <item.icon className="h-5 w-5 text-sage" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-caption">
                    {item.label}
                  </p>
                  <p className="font-heading text-sm font-semibold text-card md:text-base">
                    {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <HighlightBox dark className="text-left">
            <p className="border-l-2 border-accent pl-4 font-heading text-base font-medium text-sage md:text-lg">
              {studio.closingLine}
            </p>
          </HighlightBox>
        </div>
      </div>
    </SlideShell>
  );
}
