import { metricas } from "@/lib/data/metricas";

export function MetricasDestacadas() {
  return (
    <section className="relative z-10 -mt-24 px-4 md:px-6 lg:px-8" aria-label="Métricas destacadas">
      <div className="mx-auto grid max-w-6xl rounded-2xl bg-white px-8 py-10 shadow-2xl md:grid-cols-4 md:px-12 md:py-12">
        {metricas.map((metrica, index) => (
          <div key={metrica.etiqueta} className={`px-4 py-6 text-center md:py-0 ${index > 0 ? "border-t border-gray-200 md:border-l md:border-t-0" : ""}`}>
            <p className="font-montserrat text-4xl font-bold text-enerbio-verde-oscuro md:text-5xl">{metrica.numero}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-gray-600">{metrica.etiqueta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}