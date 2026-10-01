import Image from "next/image";
import { empresas } from "@/lib/data/empresas";
import { Reveal } from "@/components/ui/Reveal";

const logosLoop = [...empresas, ...empresas, ...empresas];

export function EmpresasQueConfian() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Empresas que confían</p>
          <h2 className="mt-4 text-3xl font-bold text-enerbio-azul-gris md:text-4xl">Industrias que ya eligieron nuestra energía</h2>
          <p className="mt-5 leading-7 text-enerbio-gris-texto">Desde molinos y aserraderos hasta plantas de etanol, acompañamos a empresas de distintos sectores en su transición energética.</p>
        </Reveal>
        <Reveal className="group mt-12 overflow-hidden rounded-2xl bg-enerbio-gris-claro py-10">
          <div className="animate-logo-scroll flex gap-16 px-8 group-hover:[animation-play-state:paused]" aria-label="Empresas clientes">
            {logosLoop.map((empresa, index) => (
              <div key={`${empresa.nombre}-${index}`} className="relative flex h-16 w-40 shrink-0 items-center justify-center md:h-20">
                <Image
                  src={empresa.logo}
                  alt={empresa.nombre}
                  fill
                  className="object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
