import { notFound } from "next/navigation";
import { ProyectoDetallePage } from "@/components/proyectos/ProyectoDetallePage";
import { proyectos } from "@/lib/data/proyectos";

export function generateStaticParams() {
  return proyectos.map((p) => ({ id: p.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const proyecto = proyectos.find((p) => p.id === id);
  if (!proyecto) notFound();
  return <ProyectoDetallePage proyecto={proyecto} />;
}
