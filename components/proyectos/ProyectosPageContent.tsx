'use client'

import Image from 'next/image'
import Link from 'next/link'
import { EnerBioButtonPrimary } from '@/components/ui/EnerBioButton'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { proyectos } from '@/lib/data/proyectos'
import { useInView } from '@/lib/hooks/useInView'

const badgeColors: Record<string, string> = {
  'verde-oscuro': 'bg-enerbio-verde-oscuro',
  'azul-gris': 'bg-enerbio-azul-gris',
  'verde-acento': 'bg-enerbio-verde-acento',
}

function Reveal({ children, className = '', delay = 0 }: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isInView } = useInView(0.12, true)
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function ProyectosPageContent() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[500px] items-center py-20 text-white md:min-h-[600px]">
        <Image src="https://cdn-enerbio.misionary.com.ar/Img/proyectos-banner.webp" alt="Proyectos EnerBio" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-enerbio-verde-oscuro/82" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-claro">
            Nuestros Proyectos
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
            Casos reales, resultados concretos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Desde Misiones hasta Paraguay, acompañamos a industrias reales en su transición energética. Cada proyecto combina ingeniería, ejecución y operación adaptadas a los desafíos específicos del cliente.
          </p>

          {/* Métricas rápidas */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { numero: '6', label: 'Proyectos ejecutados' },
              { numero: '>30 MW', label: 'Instalados y en ejecución' },
              { numero: '2', label: 'Países — AR y PY' },
            ].map(m => (
              <div key={m.label}>
                <p className="text-4xl font-bold text-enerbio-verde-acento">{m.numero}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/60">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid de proyectos ── */}
      <section className="bg-enerbio-gris-claro py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {proyectos.map((proyecto, index) => (
              <Reveal key={proyecto.id} delay={index * 80} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl">
                {/* Imagen */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <Image
                    src={proyecto.imagen}
                    alt={`Proyecto EnerBio: ${proyecto.nombre}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col p-6">
                  <span className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold text-white ${badgeColors[proyecto.colorBadge]}`}>
                    {proyecto.tecnologia}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-enerbio-verde-oscuro">
                    {proyecto.nombre}
                  </h2>

                  <p className="mt-2 flex items-center gap-2 text-sm font-medium text-enerbio-azul-gris">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-enerbio-verde-acento">
                      <ServiceIcon name="location" className="h-3 w-3 text-white" />
                    </span>
                    {proyecto.ubicacion}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-6 text-enerbio-gris-texto">
                    {proyecto.descripcion}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-enerbio-gris-claro px-3 py-1.5 text-xs font-semibold text-enerbio-verde-oscuro">
                      {proyecto.capacidad}
                    </span>
                    <span className="rounded-full bg-enerbio-gris-claro px-3 py-1.5 text-xs font-semibold text-enerbio-verde-oscuro">
                      {proyecto.estado}
                    </span>
                  </div>

                  <Link
                    href={`/proyectos/${proyecto.id}`}
                    className="mt-6 inline-flex items-center gap-1 font-semibold text-enerbio-verde-oscuro transition-colors hover:text-enerbio-verde-acento"
                  >
                    Ver proyecto →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 text-center md:py-24">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">
              ¿Sumás tu empresa?
            </p>
            <h2 className="mt-4 text-3xl font-bold text-enerbio-azul-gris md:text-4xl">
              Analicemos tu proyecto energético
            </h2>
            <p className="mt-5 text-lg leading-8 text-enerbio-gris-texto">
              Contanos sobre tu operación y en menos de 48 horas te respondemos con un análisis inicial.
            </p>
            <div className="mt-9">
              <EnerBioButtonPrimary href="/contacto" size="lg">
                Contactanos →
              </EnerBioButtonPrimary>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
