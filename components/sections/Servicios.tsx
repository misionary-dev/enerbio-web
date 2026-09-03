import { Button } from "@/components/ui/Button";
import { servicios } from "@/lib/data/servicios";

export function Servicios() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Nuestros Servicios</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-enerbio-verde-oscuro md:text-5xl">Un ciclo integral, un solo partner energético</h2>
          <p className="mt-6 text-lg leading-8 text-enerbio-gris-texto">Acompañamos cada proyecto energético en todas sus etapas, desde la evaluación inicial hasta la operación diaria, con un equipo multidisciplinario que integra ingeniería, ejecución y sustentabilidad.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicios.map((servicio, index) => (
            <div key={servicio.numero} className="relative rounded-2xl border-t-4 border-enerbio-verde-acento bg-white p-8 text-center shadow-md">
              <p className="font-montserrat text-4xl font-bold text-enerbio-verde-acento">{servicio.numero}</p>
              <span className="mt-4 block text-4xl" aria-hidden="true">{servicio.icono}</span>
              <h3 className="mt-4 text-xl font-bold text-enerbio-verde-oscuro">{servicio.titulo}</h3>
              <p className="mt-4 text-sm leading-6 text-enerbio-gris-texto">{servicio.descripcion}</p>
              {index < servicios.length - 1 && <span className="absolute -right-5 top-1/2 z-10 hidden text-3xl text-enerbio-verde-acento lg:block" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-2xl bg-enerbio-azul-gris p-8 text-white md:mt-20 md:p-12">
          <span className="inline-flex rounded-full bg-enerbio-verde-acento px-4 py-2 text-xs font-semibold uppercase tracking-widest">Transversal a todo el ciclo</span>
          <div className="mt-6 grid gap-4 md:grid-cols-[100px_1fr] md:items-center">
            <p className="font-montserrat text-5xl font-bold text-white/60">05</p>
            <div><h3 className="text-2xl font-bold">Ambiental y Sustentabilidad</h3><p className="mt-3 max-w-3xl leading-7 text-white/90">Impacto ambiental, huella de carbono, certificaciones IREC y bonos de carbono. Presente en cada etapa del proyecto para operar responsablemente.</p></div>
          </div>
        </div>
        <div className="mt-16 text-center"><Button href="/servicios">Conocé cada servicio en detalle →</Button></div>
      </div>
    </section>
  );
}