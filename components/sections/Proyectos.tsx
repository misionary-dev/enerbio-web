import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { proyectos } from "@/lib/data/proyectos";

const badgeColors = { "verde-oscuro": "bg-enerbio-verde-oscuro", "azul-gris": "bg-enerbio-azul-gris", "verde-acento": "bg-enerbio-verde-acento" };

export function Proyectos() {
  return (
    <section className="bg-enerbio-gris-claro py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Nuestros Proyectos</p>
          <h2 className="mt-4 text-4xl font-bold text-enerbio-verde-oscuro md:text-5xl">Casos reales, resultados concretos</h2>
          <p className="mt-6 text-lg leading-8 text-enerbio-gris-texto">Desde Misiones hasta Paraguay, acompañamos a industrias reales en su transición energética. Cada proyecto combina ingeniería, ejecución y operación adaptadas a los desafíos específicos del cliente.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {proyectos.map((proyecto, index) => (
            <article key={proyecto.id} className={`overflow-hidden rounded-2xl bg-white shadow-md ${index === 4 ? "lg:col-start-2" : ""}`}>
              <div className="flex aspect-[4/3] items-center justify-center bg-gray-200 px-6 text-center text-gray-500">Imagen: {proyecto.nombre}</div>
              <div className="p-6">
                <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold text-white ${badgeColors[proyecto.colorBadge]}`}>{proyecto.tecnologia}</span>
                <h3 className="mt-4 text-2xl font-bold text-enerbio-verde-oscuro">{proyecto.nombre}</h3>
                <p className="mt-2 text-sm font-medium text-enerbio-azul-gris">📍 {proyecto.ubicacion}</p>
                <p className="mt-4 text-sm leading-6 text-enerbio-gris-texto">{proyecto.descripcion}</p>
                <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-enerbio-gris-claro px-3 py-1.5 text-xs font-semibold text-enerbio-verde-oscuro">{proyecto.capacidad}</span><span className="rounded-full bg-enerbio-gris-claro px-3 py-1.5 text-xs font-semibold text-enerbio-verde-oscuro">{proyecto.estado}</span></div>
                <Link href="/proyectos" className="mt-6 inline-block font-semibold text-enerbio-verde-oscuro hover:text-enerbio-verde-acento">Ver detalle →</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center"><Button href="/proyectos">Ver todos nuestros proyectos →</Button></div>
      </div>
    </section>
  );
}