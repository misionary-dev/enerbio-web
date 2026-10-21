import Image from "next/image";
import { EnerBioButtonPrimary } from "@/components/ui/EnerBioButton";
import { Reveal } from "@/components/ui/Reveal";

export function SobreNosotrosPY() {
  return (
    <section className="relative bg-[#F8F8F8] pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="left" className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="https://cdn-enerbio.misionary.com.ar/Img/Nosotros_Inicio.webp"
            alt="Equipo EnerBio en planta"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal direction="right">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Sobre Nosotros</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-enerbio-azul-gris md:text-5xl">Desarrollamos energía renovable cerca del recurso, cerca de tu proyecto</h2>
            <div className="mt-7 max-w-xl space-y-6 text-base leading-7 text-enerbio-gris-texto md:text-lg md:leading-8">
              <p>Contamos con una base en Asunción, Paraguay, desde donde acompañamos el desarrollo industrial del país y aprovechamos su enorme potencial para proyectos energéticos, especialmente vinculados con biomasa y energías renovables. Si bien EnerBio nace en Argentina, hoy estamos presentes en Paraguay para estar cerca de cada proyecto.</p>
              <p>Creemos que los proyectos energéticos se desarrollan mejor cerca del recurso y cerca del cliente. Trabajamos con biomasa forestal, biogás y solar, transformando residuos industriales en energía firme y sostenible: potencia disponible los 365 días del año, integrada a cada proceso productivo.</p>
            </div>
            <div className="mt-8"><EnerBioButtonPrimary href="/py/nosotros" size="lg">Conocé nuestra historia →</EnerBioButtonPrimary></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
