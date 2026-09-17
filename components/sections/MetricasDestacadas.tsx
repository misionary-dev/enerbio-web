"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useInView } from "@/lib/hooks/useInView";
import { metricas } from "@/lib/data/metricas";

export function MetricasDestacadas() {
  const { ref, isInView } = useInView(0.3, true);

  return (
    <section className="relative -mt-24 px-4 before:absolute before:inset-x-0 before:bottom-0 before:top-24 before:bg-[#F8F8F8] md:-mt-32 md:px-6 md:before:top-32 lg:px-8" aria-label="Métricas destacadas">
      <div
        ref={ref}
        className={`relative z-10 mx-auto grid max-w-6xl rounded-2xl bg-white px-8 py-10 shadow-2xl transition-all duration-700 ease-out md:grid-cols-4 md:px-12 md:py-12 ${isInView ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}
      >
        {metricas.map((metrica, index) => (
          <div key={metrica.etiqueta} className={`px-4 py-6 text-center md:py-0 ${index > 0 ? "border-t border-gray-200 md:border-l md:border-t-0" : ""}`}>
            <p className="font-montserrat text-4xl font-bold text-enerbio-verde-oscuro md:text-5xl">
              <AnimatedCounter value={metrica.numero} duration={2000} isActive={isInView} />
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-gray-600">{metrica.etiqueta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}