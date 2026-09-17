"use client";

import { useInView } from "@/lib/hooks/useInView";
import { pilares } from "@/lib/data/pilares";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function PropuestaValor() {
  const { ref, isInView } = useInView(0.3, true);

  return (
    <section className="overflow-hidden bg-gradient-to-br from-enerbio-verde-oscuro to-enerbio-azul-gris py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out md:px-6 lg:px-8 ${isInView ? "translate-y-0 opacity-100" : "-translate-y-[30px] opacity-0"}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-claro">Por qué EnerBio</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">Cuatro razones que nos hacen tu partner energético</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">No solo construimos centrales de energía renovable: las desarrollamos, financiamos, operamos y las hacemos parte de tu industria.</p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {pilares.map((pilar, index) => (
            <Reveal key={pilar.titulo} delay={index * 100} className="group grid min-h-48 overflow-hidden rounded-2xl bg-white shadow-lg sm:grid-cols-[112px_1fr]">
              <div className="flex min-h-24 items-center justify-center bg-enerbio-verde-acento p-7 sm:min-h-full">
                <span className="block h-12 w-12 text-white transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
                  <ServiceIcon name={pilar.icono} className="h-full w-full" />
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 md:p-8">
                <h3 className="text-xl font-bold leading-7 text-enerbio-verde-oscuro md:text-2xl">{pilar.titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-enerbio-gris-texto md:text-base">{pilar.descripcion}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}