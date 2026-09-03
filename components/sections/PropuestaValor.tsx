import { Card } from "@/components/ui/Card";
import { pilares } from "@/lib/data/pilares";

export function PropuestaValor() {
  return (
    <section className="bg-gradient-to-br from-enerbio-verde-oscuro to-enerbio-azul-gris py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-claro">Por qué EnerBio</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">Cuatro razones que nos hacen tu partner energético</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">No solo construimos centrales de energía renovable: las desarrollamos, financiamos, operamos y las hacemos parte de tu industria.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {pilares.map((pilar) => (
            <Card key={pilar.titulo} className="p-8 text-center md:p-10">
              <span className="text-5xl" aria-hidden="true">{pilar.icono}</span>
              <h3 className="mt-6 text-xl font-bold leading-7 text-enerbio-verde-oscuro">{pilar.titulo}</h3>
              <p className="mt-4 text-sm leading-6 text-enerbio-gris-texto md:text-base">{pilar.descripcion}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}