'use client'

import type { FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EnerBioButtonAccent, EnerBioButtonSecondary } from '@/components/ui/EnerBioButton'
import { Reveal } from '@/components/ui/Reveal'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import type { ServiceIconName } from '@/components/ui/ServiceIcon'

const inputClass = 'mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-enerbio-gris-texto outline-none transition focus:border-enerbio-verde-acento focus:ring-2 focus:ring-enerbio-verde-acento/20'
const labelClass = 'text-sm font-semibold text-enerbio-verde-oscuro'

const pilares: { icon: ServiceIconName; title: string; description: string; items: string[] }[] = [
  {
    icon: 'environment',
    title: 'Consultoría y Evaluaciones Ambientales',
    description: 'Ofrecemos estudios de impacto ambiental, prefactibilidades y auditorías que garantizan el cumplimiento normativo y la sostenibilidad de tus proyectos.',
    items: ['Estudios de Impacto Ambiental', 'Prefactibilidades Ambientales', 'Auditorías Ambientales', 'Sistemas de Gestión Ambiental', 'Planes de Monitoreo'],
  },
  {
    icon: 'energy',
    title: 'Soluciones en Energías Renovables',
    description: 'Diseñamos estrategias para la generación de energía limpia: biomasa, biogás y sistemas fotovoltaicos, reduciendo el impacto ambiental y mejorando la eficiencia.',
    items: ['Asesoramiento en biomasa', 'Proyectos de biogás', 'Sistemas fotovoltaicos', 'Análisis de eficiencia energética', 'Estrategias de transición energética'],
  },
  {
    icon: 'certificate',
    title: 'Certificaciones y Huella de Carbono',
    description: 'Acompañamos en certificaciones ambientales, cálculo de huella de carbono y comercialización de bonos, promoviendo la sostenibilidad en cada iniciativa.',
    items: ['Cálculo Huella de Carbono Organizacional', 'Cálculo Huella de Carbono de Producto', 'Certificaciones IREC', 'Comercialización de Bonos de Carbono', 'Proyectos AFOLU'],
  },
]

const servicios: { icon: ServiceIconName; title: string; description: string; ideal: string[] }[] = [
  {
    icon: 'analysis',
    title: 'Prefactibilidades Ambientales',
    description: 'Análisis preliminar para evaluar la viabilidad ambiental de proyectos, identificando riesgos y oportunidades antes de la inversión.',
    ideal: ['Empresas que planean inversiones industriales', 'Desarrolladores de proyectos energéticos', 'Industrias en zonas sensibles'],
  },
  {
    icon: 'contract',
    title: 'Estudio de Impacto Ambiental',
    description: 'Evaluación detallada y multidisciplinaria de los efectos de un proyecto sobre el medio ambiente, cumpliendo con normativas vigentes.',
    ideal: ['Proyectos de infraestructura energética', 'Instalaciones industriales', 'Desarrollos que requieren habilitación ambiental'],
  },
  {
    icon: 'maintenance',
    title: 'Sistema de Gestión Ambiental',
    description: 'Implementación de sistemas para controlar, prevenir y mitigar impactos ambientales en las operaciones diarias de tu empresa.',
    ideal: ['Empresas con operaciones industriales continuas', 'Organizaciones buscando certificación ISO 14001', 'Industrias con alto impacto operativo'],
  },
  {
    icon: 'predictability',
    title: 'Plan de Monitoreo Ambiental',
    description: 'Diseño de estrategias para medir y verificar el cumplimiento ambiental a lo largo del tiempo, con reportes periódicos.',
    ideal: ['Proyectos aprobados con compromisos ambientales', 'Empresas con monitoreo exigido por autoridad', 'Operaciones en zonas protegidas'],
  },
  {
    icon: 'certificate',
    title: 'Auditorías Ambientales',
    description: 'Revisión y evaluación de procesos para asegurar el cumplimiento de normativas y estándares ambientales nacionales e internacionales.',
    ideal: ['Empresas en proceso de certificación', 'Compliance con casa matriz internacional', 'Due diligence para inversores'],
  },
  {
    icon: 'carbon',
    title: 'Cálculo de Huella de Carbono',
    description: 'Medición completa de emisiones de gases de efecto invernadero —organizacional o de producto— para reducir el impacto ambiental.',
    ideal: ['Empresas con compromisos de sostenibilidad', 'Exportadores que requieren declaraciones ESG', 'Industrias con productos de alto consumo energético'],
  },
]


const casosHC = [
  {
    tipo: 'Huella Organizacional',
    icon: 'industry' as ServiceIconName,
    año: '2023',
    cliente: 'Yerbatero Amanda',
    industria: 'Agroindustria — yerba mate',
    descripcion: 'Medimos el impacto ambiental completo de la operación organizacional del establecimiento yerbatero, incluyendo todos los alcances de emisiones de la cadena productiva.',
  },
  {
    tipo: 'Huella Organizacional',
    icon: 'industry' as ServiceIconName,
    año: '2024',
    cliente: 'Molino Matilde',
    industria: 'Agroindustria — molino harinero',
    descripcion: 'Cálculo integral de la huella de carbono organizacional del molino harinero, estableciendo la línea base para estrategias de reducción.',
  },
  {
    tipo: 'Huella de Producto',
    icon: 'sustainability' as ServiceIconName,
    año: '2024',
    cliente: 'Molino Matilde',
    industria: 'Agroindustria — producción de harina',
    descripcion: 'Análisis de ciclo de vida completo del producto harina, desde la materia prima hasta el consumidor final. Un trabajo pionero en la industria harinera regional.',
  },
]

const proceso: { paso: string; titulo: string; icon: ServiceIconName; descripcion: string }[] = [
  { paso: '01', titulo: 'Diagnóstico Inicial', icon: 'analysis', descripcion: 'Reunión inicial para entender tu empresa, sector, objetivos ambientales y requisitos normativos. Sin compromiso.' },
  { paso: '02', titulo: 'Propuesta Técnica', icon: 'contract', descripcion: 'Elaboramos una propuesta técnica y económica a medida, con alcance claro, plazos definidos y entregables específicos.' },
  { paso: '03', titulo: 'Ejecución', icon: 'maintenance', descripcion: 'Nuestro equipo técnico ejecuta el trabajo con metodología rigurosa, reportes de avance y comunicación constante.' },
  { paso: '04', titulo: 'Entrega y Seguimiento', icon: 'certificate', descripcion: 'Entrega del informe final con hallazgos, recomendaciones y plan de acción. Seguimiento continuo para asegurar implementación.' },
]

const clientes = ['Teyma-Abengoa', 'CGC S.A. RenMDI', 'Rosario Bus', 'Yerbatero Amanda', 'Molino Matilde']

export function EnerBioAmbientalPageContent() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault() }

  return (
    <main>

      {/* ── 1. HERO ── */}
      <section id="inicio" className="relative flex min-h-[70vh] items-center text-white">
        <Image
          src="/Enerbio/Stock/enerbio-ambiental-hero.jpg"
          alt="Enerbio Ambiental — consultoría ambiental integral"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-enerbio-azul-gris/85" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-28 md:px-6 lg:px-8">
          <Link href="/" className="animate-fade-in mb-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-enerbio-verde-claro transition-colors hover:text-white">
            EnerBio <span className="opacity-60">/</span> Enerbio Ambiental
          </Link>
          <div className="animate-fade-in mt-4">
            <span className="inline-flex rounded-full bg-enerbio-verde-acento px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-enerbio-verde-oscuro">
              Unidad de negocio especializada
            </span>
          </div>
          <h1 className="animate-fade-up delay-200 mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Enerbio Ambiental
          </h1>
          <p className="animate-fade-in delay-300 mt-5 max-w-2xl text-xl font-light leading-8 text-enerbio-verde-claro md:text-2xl">
            Consultoría ambiental integral para empresas comprometidas con la sostenibilidad.
          </p>
          <p className="animate-fade-in delay-500 mt-5 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            Somos la unidad de negocio especializada de EnerBio dedicada al asesoramiento ambiental de empresas en todos los sectores. Desde estudios de impacto hasta la comercialización de bonos de carbono, acompañamos a nuestros clientes en su transición hacia operaciones responsables.
          </p>
          <div className="animate-fade-in delay-700 mt-10 flex flex-wrap gap-4">
            <EnerBioButtonAccent href="#contacto-ambiental">Solicitá una consulta</EnerBioButtonAccent>
            <EnerBioButtonSecondary href="#servicios">Ver nuestros servicios</EnerBioButtonSecondary>
          </div>
        </div>
      </section>

      {/* ── 2. QUIÉNES SOMOS ── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Nuestra propuesta</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-enerbio-azul-gris md:text-5xl">
                Más que una consultora: tu partner en sostenibilidad
              </h2>
              <p className="mt-6 text-lg leading-8 text-enerbio-gris-texto">
                Enerbio Ambiental nació como una unidad especializada dentro del grupo EnerBio para dar respuesta a una necesidad concreta: las empresas de todos los sectores necesitan asesoramiento ambiental profesional que vaya más allá del cumplimiento normativo.
              </p>
              <p className="mt-4 text-lg leading-8 text-enerbio-gris-texto">
                Combinamos la experiencia técnica del grupo EnerBio en proyectos energéticos renovables con un enfoque especializado en consultoría ambiental, gestión de sostenibilidad y certificaciones. Trabajamos con empresas que no son necesariamente clientes energéticos, pero que buscan operar de forma responsable.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { label: 'Clientes multinacionales y nacionales', icon: 'industry' as ServiceIconName },
                  { label: 'Presencia en Argentina Carbon Forum', icon: 'environment' as ServiceIconName },
                  { label: '+6 proyectos EIA ejecutados', icon: 'certificate' as ServiceIconName },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-enerbio-gris-claro p-4 text-center">
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-enerbio-azul-gris text-white">
                      <ServiceIcon name={item.icon} className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs font-semibold leading-5 text-enerbio-verde-oscuro">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-enerbio-azul-gris">
                <Image
                  src="/Enerbio/Stock/ambiental-banner.jpg"
                  alt="Enerbio Ambiental — equipo en campo"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-enerbio-azul-gris/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-enerbio-verde-claro">Desde Misiones</p>
                  <p className="mt-1 text-2xl font-bold">al mercado de carbono argentino</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. LOS 3 PILARES ── */}
      <section className="bg-enerbio-gris-claro py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Nuestros pilares</p>
            <h2 className="mt-4 text-4xl font-bold text-enerbio-azul-gris md:text-5xl">Tres ejes de servicio integrales</h2>
            <p className="mt-5 text-lg leading-8 text-enerbio-gris-texto">
              Nuestra oferta se organiza en tres grandes áreas que cubren el ciclo completo de la gestión ambiental empresarial.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pilares.map((pilar, i) => (
              <Reveal key={pilar.title} delay={i * 120}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-enerbio-azul-gris text-white">
                    <ServiceIcon name={pilar.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-enerbio-verde-oscuro">{pilar.title}</h3>
                  <p className="mt-3 leading-7 text-enerbio-gris-texto">{pilar.description}</p>
                  <ul className="mt-6 space-y-2">
                    {pilar.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-enerbio-gris-texto">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-enerbio-verde-acento" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICIOS DETALLADOS ── */}
      <section id="servicios" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Nuestros servicios</p>
            <h2 className="mt-4 text-4xl font-bold text-enerbio-azul-gris md:text-5xl">Soluciones ambientales específicas para cada necesidad</h2>
            <p className="mt-5 text-lg leading-8 text-enerbio-gris-texto">
              Cada servicio se adapta a las particularidades de tu empresa, sector y objetivos ambientales.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((srv, i) => (
              <Reveal key={srv.title} delay={80 + i * 80}>
                <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-enerbio-gris-claro p-7 transition-shadow hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-enerbio-azul-gris text-white transition-colors group-hover:bg-enerbio-verde-oscuro">
                    <ServiceIcon name={srv.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-enerbio-verde-oscuro">{srv.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-enerbio-gris-texto">{srv.description}</p>
                  <div className="mt-5 border-t border-gray-200 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-enerbio-azul-gris">Ideal para</p>
                    <ul className="mt-3 space-y-1.5">
                      {srv.ideal.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-enerbio-gris-texto">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-enerbio-verde-acento" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. QUÉ ES UN EIA ── */}
      <section className="bg-enerbio-verde-oscuro py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-claro">Profundizando</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">¿Qué es un Estudio de Impacto Ambiental?</h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Un Estudio de Impacto Ambiental es un documento técnico, multidisciplinario y obligatorio que se realiza antes de ejecutar un proyecto. Su objetivo es identificar, predecir y valorar los posibles efectos ambientales, sociales y económicos que puede generar una obra o actividad.
              </p>
              <p className="mt-4 text-lg leading-8 text-white/85">
                Su finalidad es estimar los riesgos y cambios ambientales antes, durante y después de la ejecución del proyecto, garantizando que se lleve a cabo de forma sostenible y conforme a la legislación ambiental vigente. Incluye medidas de prevención, mitigación y compensación de impactos negativos, sirviendo como base para la autoridad ambiental.
              </p>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div className="grid gap-4">
                {[
                  { icon: 'contract' as ServiceIconName, titulo: 'Multidisciplinario', desc: 'Combina ingeniería, biología, sociología, economía y más.' },
                  { icon: 'legal' as ServiceIconName, titulo: 'Obligatorio', desc: 'Requerido por la autoridad ambiental para habilitar proyectos.' },
                  { icon: 'focus' as ServiceIconName, titulo: 'Preventivo', desc: 'Identifica riesgos antes de que ocurran problemas en obra.' },
                ].map((punto) => (
                  <div key={punto.titulo} className="flex gap-4 rounded-xl bg-white/10 p-5">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-enerbio-verde-acento text-enerbio-verde-oscuro">
                      <ServiceIcon name={punto.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold">{punto.titulo}</p>
                      <p className="mt-1 text-sm text-white/75">{punto.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7. HUELLA DE CARBONO (EXPLICACIÓN) ── */}
      <section className="bg-enerbio-gris-claro py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Medir para reducir</p>
            <h2 className="mt-4 text-4xl font-bold text-enerbio-azul-gris md:text-5xl">Huella de Carbono: tu primer paso hacia la sostenibilidad</h2>
            <p className="mt-5 text-lg leading-8 text-enerbio-gris-texto">
              La Huella de Carbono es un instrumento que permite estimar las emisiones de gases de efecto invernadero (GEI) emitidos por un individuo, organización, evento o producto.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Organizacional */}
            <Reveal direction="left">
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-enerbio-azul-gris text-white">
                    <ServiceIcon name="industry" className="h-7 w-7" />
                  </span>
                  <h3 className="text-2xl font-bold text-enerbio-verde-oscuro">Huella Organizacional</h3>
                </div>
                <p className="mt-5 leading-7 text-enerbio-gris-texto">
                  Analizamos las emisiones vinculadas al funcionamiento de tu organización, tanto directas como indirectas: consumo de energía, transporte, actividades operativas y toda la cadena de valor interna de tu empresa.
                </p>
                <div className="mt-6 space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wider text-enerbio-azul-gris">Qué incluye</p>
                  {[
                    'Alcance 1: Emisiones directas de la organización',
                    'Alcance 2: Emisiones indirectas de energía adquirida',
                    'Alcance 3: Otras emisiones indirectas de la cadena de valor',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-enerbio-verde-acento" />
                      <p className="text-sm leading-6 text-enerbio-gris-texto">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg bg-enerbio-gris-claro p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-enerbio-azul-gris">Ideal para</p>
                  <p className="mt-2 text-sm text-enerbio-gris-texto">Empresas con compromisos ESG · Organizaciones buscando reducir emisiones · Compañías que reportan sostenibilidad</p>
                </div>
              </div>
            </Reveal>
            {/* Producto */}
            <Reveal direction="right" delay={150}>
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-enerbio-verde-oscuro text-white">
                    <ServiceIcon name="sustainability" className="h-7 w-7" />
                  </span>
                  <h3 className="text-2xl font-bold text-enerbio-verde-oscuro">Huella de Producto</h3>
                </div>
                <p className="mt-5 leading-7 text-enerbio-gris-texto">
                  Evaluamos las emisiones de un producto desde la perspectiva de ciclo de vida: desde la extracción de la materia prima, pasando por producción, distribución y uso, hasta el fin de su vida útil. Un análisis completo del impacto ambiental de lo que producís.
                </p>
                <div className="mt-6 space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wider text-enerbio-azul-gris">Qué incluye</p>
                  {[
                    'Extracción de materias primas',
                    'Procesos de producción',
                    'Distribución y logística',
                    'Uso del producto',
                    'Fin de vida útil (disposición/reciclaje)',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-enerbio-verde-acento" />
                      <p className="text-sm leading-6 text-enerbio-gris-texto">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg bg-enerbio-gris-claro p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-enerbio-azul-gris">Ideal para</p>
                  <p className="mt-2 text-sm text-enerbio-gris-texto">Exportadores con requisitos ambientales · Marcas con posicionamiento sostenible · Industrias con productos de alto consumo energético</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8. CASOS HUELLA DE CARBONO ── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Casos reales</p>
            <h2 className="mt-4 text-4xl font-bold text-enerbio-azul-gris md:text-5xl">Clientes que ya midieron su impacto</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {casosHC.map((caso, i) => (
              <Reveal key={caso.cliente + caso.tipo} delay={i * 120}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-enerbio-gris-claro p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-enerbio-azul-gris text-white">
                      <ServiceIcon name={caso.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-enerbio-verde-acento">{caso.tipo}</p>
                      <p className="text-xs text-gray-400">{caso.año}</p>
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-enerbio-verde-oscuro">{caso.cliente}</h3>
                  <p className="mt-1 text-xs font-medium text-enerbio-azul-gris">{caso.industria}</p>
                  <p className="mt-4 text-sm leading-7 text-enerbio-gris-texto">{caso.descripcion}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. BONOS DE CARBONO + AFOLU ── */}
      <section className="bg-gradient-to-br from-enerbio-verde-oscuro to-enerbio-azul-gris py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-enerbio-verde-acento px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-enerbio-verde-oscuro">
              Nuestro diferencial
            </span>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Comercializamos bonos de carbono y desarrollamos proyectos AFOLU
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Enerbio Ambiental no solo certifica: comercializa bonos de carbono y desarrolla proyectos AFOLU (Agriculture, Forestry and Other Land Use). Participamos activamente en el mercado de carbono argentino, con presencia en el Argentina Carbon Forum y conexión con compradores internacionales.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal direction="left" delay={100}>
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-white/20">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-enerbio-verde-acento text-enerbio-verde-oscuro">
                    <ServiceIcon name="finance" className="h-6 w-6" />
                  </span>
                  <h3 className="text-2xl font-bold">Comercialización de Bonos</h3>
                </div>
                <p className="mt-5 leading-7 text-white/85">
                  Acompañamos a empresas desde el desarrollo del proyecto hasta la venta efectiva de bonos de carbono en el mercado. Conectamos a generadores con compradores interesados en compensar sus emisiones.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Ingresos adicionales por reducción de emisiones', 'Acceso al mercado internacional de carbono', 'Asesoramiento integral en todo el ciclo', 'Verificación por entidades independientes'].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-white/85">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-enerbio-verde-acento" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-white/20">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-enerbio-verde-acento text-enerbio-verde-oscuro">
                    <ServiceIcon name="forestry" className="h-6 w-6" />
                  </span>
                  <h3 className="text-2xl font-bold">Proyectos AFOLU</h3>
                </div>
                <p className="mt-5 leading-7 text-white/85">
                  Desarrollamos proyectos de Agricultura, Silvicultura y Otros Usos del Suelo —una de las categorías más valoradas del mercado de carbono— aprovechando el potencial del polo forestal donde nacimos.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Reforestación y aforestación', 'Manejo forestal sostenible', 'Conservación de bosques nativos', 'Agricultura sostenible', 'Restauración de ecosistemas'].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-white/85">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-enerbio-verde-acento" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 11. EMPRESAS QUE CONFÍAN ── */}
      <section className="bg-enerbio-gris-claro py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Clientes</p>
            <h2 className="mt-3 text-3xl font-bold text-enerbio-azul-gris md:text-4xl">Empresas que ya nos eligieron</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clientes.map((cliente, i) => (
              <Reveal key={cliente} delay={i * 80}>
                <div className="flex items-center justify-center rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md">
                  <p className="text-center text-sm font-bold text-gray-400 transition-colors hover:text-enerbio-verde-oscuro">{cliente}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CÓMO TRABAJAMOS ── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Nuestro proceso</p>
            <h2 className="mt-4 text-4xl font-bold text-enerbio-azul-gris md:text-5xl">Cómo trabajamos con vos</h2>
            <p className="mt-5 text-lg leading-8 text-enerbio-gris-texto">
              Un proceso claro y transparente, desde el primer contacto hasta la entrega de resultados y seguimiento continuo.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proceso.map((step, i) => (
              <Reveal key={step.paso} delay={i * 120}>
                <div className="relative flex h-full flex-col rounded-2xl bg-enerbio-gris-claro p-7">
                  <span className="absolute right-5 top-5 text-5xl font-black text-enerbio-azul-gris/10">{step.paso}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-enerbio-azul-gris text-white">
                    <ServiceIcon name={step.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-enerbio-verde-oscuro">{step.titulo}</h3>
                  <p className="mt-3 text-sm leading-7 text-enerbio-gris-texto">{step.descripcion}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. FORMULARIO DE CONTACTO ── */}
      <section id="contacto-ambiental" className="bg-enerbio-azul-gris py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
            <Reveal direction="left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-claro">Conversemos</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Hablemos de tu desafío ambiental</h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Contanos sobre tu empresa y tus objetivos ambientales. Nuestro equipo te responderá en menos de 48 horas hábiles con una propuesta inicial o solicitando más información para avanzar.
              </p>
              <div className="mt-9 space-y-5">
                {[
                  { icon: 'email' as ServiceIconName, label: 'info@enerbio.com.ar', sub: 'Consultas comerciales ambientales' },
                  { icon: 'phone' as ServiceIconName, label: '+54 3584 199 465', sub: 'Lunes a Viernes' },
                  { icon: 'location' as ServiceIconName, label: 'Av. Belgrano 675', sub: 'Leandro N. Alem, Misiones' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-enerbio-verde-oscuro p-3 text-white">
                      <ServiceIcon name={item.icon} className="h-full w-full" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="mt-0.5 text-sm text-white/60">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-xl md:p-10">
                <div><label htmlFor="amb-nombre" className={labelClass}>Nombre completo *</label><input id="amb-nombre" name="nombre" type="text" required className={inputClass} /></div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div><label htmlFor="amb-email" className={labelClass}>Email *</label><input id="amb-email" name="email" type="email" required className={inputClass} /></div>
                  <div><label htmlFor="amb-telefono" className={labelClass}>Teléfono *</label><input id="amb-telefono" name="telefono" type="tel" required className={inputClass} /></div>
                </div>
                <div className="mt-5"><label htmlFor="amb-empresa" className={labelClass}>Empresa *</label><input id="amb-empresa" name="empresa" type="text" required className={inputClass} /></div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="amb-industria" className={labelClass}>Industria / Sector *</label>
                    <select id="amb-industria" name="industria" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Seleccioná una opción</option>
                      {['Agroindustria', 'Industria manufacturera', 'Energía', 'Minería', 'Transporte y logística', 'Construcción', 'Agricultura y ganadería', 'Forestal', 'Alimentos y bebidas', 'Otro'].map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="amb-servicio" className={labelClass}>Servicio de interés *</label>
                    <select id="amb-servicio" name="servicio" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Seleccioná una opción</option>
                      {['Estudio de Impacto Ambiental', 'Huella de Carbono Organizacional', 'Huella de Carbono de Producto', 'Comercialización de Bonos de Carbono', 'Proyecto AFOLU', 'Auditoría Ambiental', 'Sistema de Gestión Ambiental', 'Plan de Monitoreo', 'Consulta general', 'No estoy seguro'].map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mt-5"><label htmlFor="amb-mensaje" className={labelClass}>Mensaje</label><textarea id="amb-mensaje" name="mensaje" rows={4} className={inputClass} /></div>
                <label className="mt-5 flex items-start gap-3 text-sm text-enerbio-gris-texto">
                  <input type="checkbox" name="terminos" required className="mt-1 h-4 w-4 accent-enerbio-verde-oscuro" />
                  <span>Acepto los términos y condiciones *</span>
                </label>
                <div className="mt-7"><EnerBioButtonAccent size="lg" type="submit">Enviar consulta</EnerBioButtonAccent></div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  )
}
