"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { EnerBioButtonAccent } from "@/components/ui/EnerBioButton";
import { useInView } from "@/lib/hooks/useInView";

const pilaresAmbiental: { icono: ReactNode; titulo: string; subtitulo: string }[] = [
  {
    icono: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.8 3.2C12.9 3.7 7.7 6.1 5.2 10c-1.7 2.6-1.4 5.5.4 7.3 2.1-4.1 5.4-7.2 9.8-9.4-3.7 2.8-6.4 6.2-8.1 10.3 2.3 1.2 5.1.6 6.9-1.3 3.3-3.5 4.8-8.6 5.6-13.7Z" /></svg>,
    titulo: "Consultoría y Evaluaciones Ambientales",
    subtitulo: "Estudios de impacto, prefactibilidades y auditorías",
  },
  {
    icono: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0-5 1.4 3.1h-2.8L12 0Zm0 24-1.4-3.1h2.8L12 24ZM0 12l3.1-1.4v2.8L0 12Zm24 0-3.1 1.4v-2.8L24 12ZM3.5 3.5l3.2 1.2-2 2-1.2-3.2Zm17 17-3.2-1.2 2-2 1.2 3.2Zm0-17-1.2 3.2-2-2 3.2-1.2Zm-17 17 1.2-3.2 2 2-3.2 1.2Z" /></svg>,
    titulo: "Soluciones en Energías Renovables",
    subtitulo: "Biomasa, biogás y sistemas fotovoltaicos",
  },
  {
    icono: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h3v18H3V3Zm5 8h3v10H8V11Zm5-5h3v15h-3V6Zm5 8h3v7h-3v-7Z" /></svg>,
    titulo: "Certificaciones y Huella de Carbono",
    subtitulo: "Bonos de carbono, IREC y proyectos AFOLU",
  },
];

export function EnerbioAmbiental() {
  const { ref, isInView } = useInView(0.2, true);
  const revealClass = () =>
    `transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`;

  return (
    <section className="bg-enerbio-azul-gris py-24 text-white md:py-32">
      <div ref={ref} className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
        <div>
          <div className={revealClass()} style={{ transitionDelay: "0ms" }}><Badge>Unidad de negocio</Badge></div>
          <h2 className={`${revealClass()} mt-6 text-5xl font-bold md:text-6xl`} style={{ transitionDelay: "120ms" }}>Enerbio Ambiental</h2>
          <p className={`${revealClass()} mt-5 max-w-xl text-lg leading-8 text-enerbio-verde-claro md:text-xl`} style={{ transitionDelay: "240ms" }}>Consultoría ambiental integral para empresas que buscan operar con responsabilidad y visión sostenible.</p>
          <p className={`${revealClass()} mt-6 max-w-2xl leading-7 text-white/90`} style={{ transitionDelay: "360ms" }}>Somos la unidad de negocio de EnerBio especializada en soluciones ambientales. Acompañamos a empresas de todos los sectores con estudios de impacto, sistemas de gestión ambiental, cálculo de huella de carbono y comercialización de bonos, incluyendo proyectos AFOLU.</p>
          <div className="mt-8 space-y-3">
            {pilaresAmbiental.map((pilar, index) => (
              <div key={pilar.titulo} className={`${revealClass()} group flex items-center gap-4 rounded-lg border-l-4 border-enerbio-verde-acento py-3 pl-4 hover:bg-white/5`} style={{ transitionDelay: `${480 + index * 100}ms` }}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-enerbio-verde-acento p-3 text-white transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105" aria-hidden="true">
                  {pilar.icono}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{pilar.titulo}</h3>
                  <p className="mt-1 text-sm text-white/75">{pilar.subtitulo}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`${revealClass()} mt-9`} style={{ transitionDelay: "820ms" }}><EnerBioButtonAccent href="/enerbio-ambiental" size="lg" className="text-white">Descubrí Enerbio Ambiental →</EnerBioButtonAccent></div>
        </div>
        <div className={`${revealClass()} relative aspect-square overflow-hidden rounded-2xl`} style={{ transitionDelay: "300ms" }}>
          <Image
            src="https://cdn-enerbio.misionary.com.ar/Img/aerial-shot-turbines-beautiful-green-fields-near-plowed-farms.webp"
            alt="Turbinas eólicas — Enerbio Ambiental"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}