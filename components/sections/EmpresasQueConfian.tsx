import Image from "next/image";
import { empresas } from "@/lib/data/empresas";
import { Reveal } from "@/components/ui/Reveal";

export function EmpresasQueConfian() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Empresas que confían</p>
          <h2 className="mt-4 text-3xl font-bold text-enerbio-azul-gris md:text-4xl">Industrias que ya eligieron nuestra energía</h2>
          <p className="mt-5 leading-7 text-enerbio-gris-texto">Desde molinos y aserraderos hasta plantas de etanol, acompañamos a empresas de distintos sectores en su transición energética.</p>
        </Reveal>
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4" aria-label="Empresas clientes">
            {empresas.map((empresa) => (
              <div
                key={empresa.nombre}
                className="group flex items-center justify-center rounded-xl border border-gray-100 bg-enerbio-gris-claro px-6 py-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={empresa.logo}
                    alt={empresa.nombre}
                    fill
                    className="object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    sizes="(max-width: 640px) 45vw, 22vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
