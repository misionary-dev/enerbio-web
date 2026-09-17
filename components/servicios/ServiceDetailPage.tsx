'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import type { ServicePageData } from '@/lib/data/servicePages'
import { EnerBioButtonAccent, EnerBioButtonPrimary } from '@/components/ui/EnerBioButton'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { useInView } from '@/lib/hooks/useInView'

function Reveal({ children, className = '' }: { children: (visible: boolean) => ReactNode; className?: string }) {
  const { ref, isInView } = useInView(0.15, true)
  return <div ref={ref} className={className}>{children(isInView)}</div>
}

const reveal = (visible: boolean) => `transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`

export function ServiceDetailPage({ service }: { service: ServicePageData }) {
  return (
    <main>
      <section className="relative flex min-h-[500px] items-center bg-[url('https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb.webp')] bg-cover bg-center text-white md:min-h-[55vh]">
        <div className="absolute inset-0 bg-enerbio-verde-oscuro/82" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 md:px-6 lg:px-8">
          <div className="animate-fade-in flex gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-enerbio-verde-claro"><Link href="/servicios">Servicios</Link><span>/</span><span>{service.eyebrow}</span></div>
          <h1 className="animate-fade-up delay-200 mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{service.title}</h1>
          <p className="animate-fade-in delay-500 mt-7 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">{service.intro}</p>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-24 md:py-32">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
          {(visible) => <><div><p className={`${reveal(visible)} text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento`}>Qué hacemos</p><h2 className={`${reveal(visible)} mt-4 text-4xl font-bold leading-tight text-enerbio-azul-gris md:text-5xl`} style={{ transitionDelay: '120ms' }}>{service.sectionTitle}</h2><p className={`${reveal(visible)} mt-7 text-lg leading-8 text-enerbio-gris-texto`} style={{ transitionDelay: '240ms' }}>{service.description}</p></div><div className={`${reveal(visible)} flex aspect-[4/3] items-center justify-center rounded-2xl bg-enerbio-azul-gris p-10 text-center text-white`} style={{ transitionDelay: '180ms' }}><div><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-enerbio-verde-acento p-4"><ServiceIcon name={service.icon} className="h-full w-full" /></span><p className="mt-6 text-xl font-bold">Equipo especializado</p><p className="mt-2 text-sm text-white/75">Capacidad técnica aplicada a tu proyecto</p></div></div></>}
        </Reveal>
      </section>

      <section className="bg-white py-24 md:py-32">
        <Reveal className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {(visible) => <><div className={`${reveal(visible)} max-w-3xl`}><p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Servicios específicos</p><h2 className="mt-4 text-4xl font-bold text-enerbio-azul-gris md:text-5xl">Capacidades para cada desafío</h2></div><div className="mt-14 grid gap-6 md:grid-cols-2">{service.services.map((item, index) => <article key={item.title} className={`${reveal(visible)} group grid overflow-hidden rounded-2xl border border-gray-200 bg-[#F8F8F8] sm:grid-cols-[92px_1fr]`} style={{ transitionDelay: `${140 + index * 120}ms` }}><div className="flex min-h-24 items-center justify-center bg-enerbio-verde-oscuro p-6 text-white transition-colors group-hover:bg-enerbio-azul-gris"><ServiceIcon name={item.icon} className="h-10 w-10" /></div><div className="p-7"><h3 className="text-2xl font-bold text-enerbio-verde-oscuro">{item.title}</h3><p className="mt-4 leading-7 text-enerbio-gris-texto">{item.description}</p></div></article>)}</div></>}
        </Reveal>
      </section>

      {service.environmentalNote && <section className="bg-enerbio-azul-gris py-16 text-white"><Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-4 md:flex-row md:items-center md:px-6 lg:px-8">{(visible) => <><div className={`${reveal(visible)} max-w-3xl`}><p className="text-sm font-semibold uppercase tracking-[0.18em] text-enerbio-verde-claro">Unidad especializada</p><h2 className="mt-3 text-3xl font-bold">Enerbio Ambiental</h2><p className="mt-3 leading-7 text-white/80">Estos servicios también están disponibles para empresas fuera del sector energético.</p></div><div className={reveal(visible)} style={{ transitionDelay: '160ms' }}><EnerBioButtonAccent href="/enerbio-ambiental" className="text-white">Conocé más →</EnerBioButtonAccent></div></>}</Reveal></section>}

      <section className="bg-white py-20 text-center md:py-24"><Reveal className="mx-auto max-w-3xl px-4 md:px-6">{(visible) => <><h2 className={`${reveal(visible)} text-4xl font-bold text-enerbio-azul-gris md:text-5xl`}>{service.ctaTitle}</h2><p className={`${reveal(visible)} mx-auto mt-5 max-w-2xl text-lg leading-8 text-enerbio-gris-texto`} style={{ transitionDelay: '140ms' }}>Conversemos sobre tu necesidad y preparemos una propuesta adecuada para tu operación.</p><div className={`${reveal(visible)} mt-9`} style={{ transitionDelay: '280ms' }}><EnerBioButtonPrimary href="/contacto">{service.ctaLabel} →</EnerBioButtonPrimary></div></>}</Reveal></section>
    </main>
  )
}