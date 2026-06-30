import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudyPage";
import SlideShell from "@/components/SlideShell";
import { brandProfiles, getBrandProfile } from "@/data/brands";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return brandProfiles.map((brand) => ({ slug: brand.slug }));
}

export default async function CaseStudyRoute({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandProfile(slug);

  if (!brand) notFound();

  return (
    <SlideShell
      path={`/case-studies/${slug}`}
      theme="light"
      backgroundImage={brand.images[0]}
      backgroundOverlayClass="bg-background/88"
    >
      <CaseStudyPage brand={brand} />
    </SlideShell>
  );
}
