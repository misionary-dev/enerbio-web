'use client'

import Image from 'next/image'
import Link from 'next/link'
import { EnerBioButtonAccent, EnerBioButtonPrimary } from '@/components/ui/EnerBioButton'
import { GaleriaImagenes } from '@/components/ui/GaleriaImagenes'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import type { Proyecto } from '@/lib/data/proyectos'
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

export function ProyectoDetallePage({ proyecto }: { proyecto: Proyecto }) {
  return (
    <main>
      {/* ── Hero con imagen de portada ── */}
      <section className="relative flex min-h-[55vh] items-end bg-enerbio-verde-oscuro pb-14 text-white md:min-h-[65vh]">
        <Image
          src={proyecto.imagen}
          alt={`Proyecto EnerBio: ${proyecto.nombre}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-enerbio-verde-oscuro/95 via-enerbio-verde-oscuro/55 to-enerbio-verde-oscuro/20" />

        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <Link
            href="/proyectos"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-enerbio-verde-claro transition-colors hover:text-white"
          >
            ← Proyectos
          </Link>

          <div>
            <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold text-white ${badgeColors[proyecto.colorBadge]}`}>
              {proyecto.tecnologia}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            {proyecto.nombre}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 text-sm text-white/80">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-enerbio-verde-acento">
                <ServiceIcon name="location" className="h-3 w-3 text-white" />
              </span>
              {proyecto.ubicacion}
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white">
              {proyecto.capacidad}
            </span>
            <span className="rounded-full bg-enerbio-verde-acento px-3 py-1 text-sm font-semibold text-enerbio-verde-oscuro">
              {proyecto.estado}
            </span>
          </div>
        </div>
      </section>

      {/* ── Descripción + datos clave ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">
                Descripción del proyecto
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-enerbio-azul-gris md:text-4xl">
                {proyecto.nombre}
              </h2>
              <div className="mt-6 space-y-4">
                {proyecto.descripcionCompleta.map((parrafo, i) => (
                  <p key={i} className="text-lg leading-8 text-enerbio-gris-texto">
                    {parrafo}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid gap-3">
                {(
                  [
                    { label: 'Tecnología', value: proyecto.tecnologia },
                    { label: 'Capacidad instalada', value: proyecto.capacidad },
                    { label: 'Estado', value: proyecto.estado },
                    { label: 'Ubicación', value: proyecto.ubicacion },
                  ] as const
                ).map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-gray-100 bg-enerbio-gris-claro p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-enerbio-verde-acento">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold text-enerbio-verde-oscuro">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Galería de imágenes ── */}
      <section className="bg-enerbio-gris-claro py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">
              Galería
            </p>
            <h2 className="mt-3 text-3xl font-bold text-enerbio-azul-gris md:text-4xl">
              Imágenes del proyecto
            </h2>
            <p className="mt-3 text-enerbio-gris-texto">
              Hacé clic en cualquier imagen para verla en tamaño completo.
            </p>
          </Reveal>
          <GaleriaImagenes imagenes={proyecto.galeria} nombre={proyecto.nombre} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-enerbio-azul-gris py-20 text-white md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-claro">
            ¿Te interesa?
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            ¿Querés desarrollar un proyecto similar?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/80">
            Contanos sobre tu operación y analizamos la mejor solución energética para tu industria.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <EnerBioButtonAccent href="/contacto">
              Contactanos →
            </EnerBioButtonAccent>
            <Link
              href="/proyectos"
              className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
