import { empresas } from "@/lib/data/empresas";

const logosLoop = [...empresas, ...empresas, ...empresas];

export function EmpresasQueConfian() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Empresas que confían</p>
          <h2 className="mt-4 text-3xl font-bold text-enerbio-verde-oscuro md:text-4xl">Industrias que ya eligieron nuestra energía</h2>
          <p className="mt-5 leading-7 text-enerbio-gris-texto">Desde molinos y aserraderos hasta plantas de etanol, acompañamos a empresas de distintos sectores en su transición energética.</p>
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl bg-enerbio-gris-claro py-10">
          <div className="animate-logo-scroll flex gap-16 px-8" aria-label="Empresas clientes">
            {logosLoop.map((empresa, index) => <div key={`${empresa.nombre}-${index}`} className="flex h-16 w-40 shrink-0 items-center justify-center rounded-lg bg-gray-300 px-4 text-center font-semibold text-gray-600 md:h-20">{empresa.nombre}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}