import { Button } from "@/components/ui/Button";

export function SobreNosotros() {
  return (
    <section className="bg-enerbio-gris-claro pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-gray-200 px-8 text-center text-gray-500">
          <span>Imagen: Planta EnerBio en operación</span>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Sobre Nosotros</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-enerbio-verde-oscuro md:text-5xl">Desarrollamos energía renovable cerca del recurso, cerca de tu proyecto</h2>
          <div className="mt-7 max-w-xl space-y-6 text-base leading-7 text-enerbio-gris-texto md:text-lg md:leading-8">
            <p>Somos una empresa de ingeniería energética nacida en Leandro N. Alem, Misiones —el polo forestal más importante de Argentina. Desde aquí acompañamos a la industria en su transición hacia fuentes renovables, con equipos técnicos formados en el territorio y presencia en Argentina y Paraguay.</p>
            <p>Creemos que los proyectos energéticos se desarrollan mejor cerca del recurso y cerca del cliente. Trabajamos con biomasa forestal, biogás y solar, transformando residuos industriales en energía firme y sostenible: potencia disponible los 365 días del año, integrada a cada proceso productivo.</p>
          </div>
          <Button href="/nosotros" className="mt-8">Conocé nuestra historia →</Button>
        </div>
      </div>
    </section>
  );
}