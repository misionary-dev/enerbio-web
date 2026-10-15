import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/servicios/ServiceDetailPage";
import { servicePages } from "@/lib/data/servicePages";

export function generateStaticParams() {
  return servicePages
    .filter((s) => s.slug !== "ambiental-y-sustentabilidad")
    .map((s) => ({ slug: s.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug && s.slug !== "ambiental-y-sustentabilidad");
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
