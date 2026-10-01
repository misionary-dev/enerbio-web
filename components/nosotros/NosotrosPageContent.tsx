'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { EnerBioButtonAccent, EnerBioButtonPrimary, EnerBioButtonSecondary } from '@/components/ui/EnerBioButton'
import { useInView } from '@/lib/hooks/useInView'

const principles = [
  {
    title: 'Nuestra Misión',
    text: 'Desarrollar, financiar, construir y operar proyectos de generación de energía renovable integrados a la industria, aportando soluciones técnicas y sostenibles que impulsen la competitividad de nuestros clientes.',
    icon: <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 4a6 6 0 1 1-6 6 6 6 0 0 1 6-6Zm0 3a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />,
  },
  {
    title: 'Nuestra Visión',
    text: 'Ser el partner energético de referencia en proyectos renovables de Argentina y Paraguay, liderando la transición energética de la industria regional con excelencia técnica y compromiso ambiental.',
    icon: <path d="M12 4C6.5 4 2.1 8.8 1 12c1.1 3.2 5.5 8 11 8s9.9-4.8 11-8c-1.1-3.2-5.5-8-11-8Zm0 13a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />,
  },
  {
    title: 'Nuestros Valores',
    text: 'Cercanía al recurso y al cliente. Excelencia técnica. Compromiso con la sostenibilidad. Transparencia y transferencia de conocimiento local.',
    icon: <path d="M12 22C8.8 19.1 3 15.2 3 9.5A4.5 4.5 0 0 1 11 6.7l1 1 1-1A4.5 4.5 0 0 1 21 9.5c0 5.7-5.8 9.6-9 12.5Z" />,
  },
]

function RevealGroup({ children, className = '' }: { children: (isInView: boolean) => ReactNode; className?: string }) {
  const { ref, isInView } = useInView(0.15, true)

  return (
    <div ref={ref} className={className}>{children(isInView)}</div>
  )
}

const revealClass = (isInView: boolean) =>
  `transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`

export function NosotrosPageContent() {
  return (
    <main>
      <section className="relative flex min-h-[500px] items-center overflow-hidden text-white md:min-h-[60vh]">
        <Image src="https://cdn-enerbio.misionary.com.ar/Banners/PortadaNosotros.jpg" alt="EnerBio — Quiénes somos" fill className="object-cover object-bottom" priority />
        <div className="absolute inset-0 bg-enerbio-verde-oscuro/80" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 md:px-6 lg:px-8">
          <p className="animate-fade-in text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-claro">Nosotros</p>
          <h1 className="animate-fade-up delay-200 mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Ingeniería energética con raíces en el corazón de Misiones</h1>
          <p className="animate-fade-in delay-500 mt-7 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">Somos una empresa de desarrollo integral de proyectos energéticos renovables. Trabajamos con biomasa, biogás y solar, acompañando a la industria desde el análisis inicial hasta la operación diaria.</p>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-24 md:py-32">
        <RevealGroup className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {(isInView) => <>
          <div className={`${revealClass(isInView)} relative aspect-[4/3] overflow-hidden rounded-2xl`}>
            <Image src="https://cdn-enerbio.misionary.com.ar/Img/ImagenEquipo.jpg" alt="Equipo EnerBio" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <p className={`${revealClass(isInView)} text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento`} style={{ transitionDelay: '100ms' }}>Nuestra historia</p>
            <h2 className={`${revealClass(isInView)} mt-4 text-4xl font-bold leading-tight text-enerbio-azul-gris md:text-5xl`} style={{ transitionDelay: '200ms' }}>De Misiones a la región: la historia de EnerBio</h2>
            <div className={`${revealClass(isInView)} mt-7 space-y-5 text-base leading-7 text-enerbio-gris-texto md:text-lg md:leading-8`} style={{ transitionDelay: '300ms' }}>
              <p>EnerBio nació en Leandro N. Alem, Misiones, con la convicción de que el desarrollo energético renovable debía hacerse cerca del recurso. Nos radicamos en el polo forestal más importante de Argentina, rodeados de la biomasa que hoy transformamos en energía.</p>
              <p>La expansión hacia Paraguay marcó un antes y un después. Nuestra participación en Alcogreen, una planta de cogeneración para la industria del etanol, consolidó nuestra experiencia regional en soluciones para la agroindustria sudamericana.</p>
              <p>Hoy contamos con más de 25 profesionales en Argentina y Paraguay, O&M propio en planta desde 2022 y más de 30 MW instalados y en ejecución.</p>
            </div>
            <div className={`${revealClass(isInView)} mt-8 border-l border-enerbio-verde-acento bg-white p-5 text-sm text-enerbio-gris-texto`} style={{ transitionDelay: '420ms' }}><strong className="text-enerbio-verde-oscuro">Historia en actualización.</strong> El año de fundación y los primeros hitos se incorporarán una vez validados.</div>
          </div>
          </>}
        </RevealGroup>
      </section>

      <section className="bg-white py-24 md:py-32">
        <RevealGroup className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {(isInView) => <>
          <div className={`${revealClass(isInView)} max-w-3xl`}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Quiénes somos</p>
            <h2 className="mt-4 text-4xl font-bold text-enerbio-azul-gris md:text-5xl">Los pilares de nuestra empresa</h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <article key={principle.title} className={`${revealClass(isInView)} group border-t-4 border-enerbio-verde-acento bg-[#F8F8F8] p-8 md:p-10`} style={{ transitionDelay: `${160 + index * 160}ms` }}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-enerbio-verde-oscuro p-4 text-white transition-transform duration-300 group-hover:-translate-y-1"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{principle.icon}</svg></span>
                <h3 className="mt-7 text-2xl font-bold text-enerbio-verde-oscuro">{principle.title}</h3>
                <p className="mt-4 leading-7 text-enerbio-gris-texto">{principle.text}</p>
              </article>
            ))}
          </div>
          <p className={`${revealClass(isInView)} mt-6 text-sm text-gray-500`} style={{ transitionDelay: '680ms' }}>Redacción institucional propuesta, pendiente de validación final.</p>
          </>}
        </RevealGroup>
      </section>

      <section className="bg-enerbio-verde-oscuro py-24 text-white md:py-32">
        <RevealGroup className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-2 lg:px-8">
          {(isInView) => <>
          <div>
            <p className={`${revealClass(isInView)} text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-claro`}>Nuestra filosofía</p>
            <h2 className={`${revealClass(isInView)} mt-4 text-4xl font-bold leading-tight md:text-5xl`} style={{ transitionDelay: '120ms' }}>Los proyectos energéticos se desarrollan mejor cerca del recurso</h2>
            <blockquote className={`${revealClass(isInView)} mt-9 border-l border-enerbio-verde-acento pl-6 text-xl italic leading-8 text-white/90 md:text-2xl md:leading-9`} style={{ transitionDelay: '240ms' }}>“Desarrollar energía con gente que conoce el sector y está a 50 o 100 kilómetros del proyecto, marca una diferencia enorme.”</blockquote>
            <div className={revealClass(isInView)} style={{ transitionDelay: '360ms' }}><p className="mt-5 font-semibold text-enerbio-verde-claro">Nicolás Barberis</p><p className="text-sm text-white/70">Gerente de Proyectos EnerBio Argentina y Paraguay</p></div>
            <p className={`${revealClass(isInView)} mt-8 max-w-xl leading-7 text-white/85`} style={{ transitionDelay: '480ms' }}>El know-how local es tan importante como la excelencia técnica. Trabajamos cerca del recurso, con equipos formados en el territorio que entienden la industria regional y sus necesidades reales.</p>
          </div>
          <div className={`${revealClass(isInView)} relative aspect-[4/3] overflow-hidden rounded-2xl`} style={{ transitionDelay: '260ms' }}>
            <Image src="https://cdn-enerbio.misionary.com.ar/Img/IMG_8738.jpg" alt="Campo, tecnología y biomasa — EnerBio en operación" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          </>}
        </RevealGroup>
      </section>

<section className="bg-white py-20 text-center md:py-24">
        <RevealGroup className="mx-auto max-w-3xl px-4 md:px-6">
          {(isInView) => <><h2 className={`${revealClass(isInView)} text-4xl font-bold text-enerbio-azul-gris md:text-5xl`}>Analicemos tu proyecto energético</h2><p className={`${revealClass(isInView)} mx-auto mt-5 max-w-2xl text-lg leading-8 text-enerbio-gris-texto`} style={{ transitionDelay: '140ms' }}>Contanos sobre tu industria y evaluemos juntos la mejor solución renovable para tu operación.</p><div className={`${revealClass(isInView)} mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row`} style={{ transitionDelay: '280ms' }}><EnerBioButtonPrimary href="/contacto" size="lg">Contactanos</EnerBioButtonPrimary><EnerBioButtonAccent href="/proyectos" size="lg" className="text-white">Ver nuestros proyectos</EnerBioButtonAccent></div></>}
        </RevealGroup>
      </section>
    </main>
  )
}