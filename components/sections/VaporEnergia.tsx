import { EnerBioButtonAccent } from '@/components/ui/EnerBioButton'
import { Reveal } from '@/components/ui/Reveal'
import { ServiceIcon } from '@/components/ui/ServiceIcon'

const highlights = [
  ['savings', 'Sin inversión inicial'],
  ['design', 'Planta diseñada a medida'],
  ['operation', 'Operación y mantenimiento 24/7'],
  ['environment', 'Energía renovable'],
] as const

export function VaporEnergia() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-enerbio-verde-oscuro to-enerbio-azul-gris py-24 text-white md:py-32">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
        <div>
          <span className="inline-flex rounded-full bg-enerbio-verde-acento px-4 py-2 text-xs font-semibold uppercase tracking-widest">Nuestro modelo insignia</span>
          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">Vapor y Energía</h2>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-enerbio-verde-claro md:text-2xl">Comprás energía y vapor. Nosotros nos encargamos de todo lo demás.</p>
          <p className="mt-6 max-w-2xl leading-7 text-white/85">EnerBio desarrolla, financia, construye y opera una planta renovable diseñada para tu industria. Vos pagás por lo que consumís, sin inversión inicial y con un equipo especializado a cargo de la operación.</p>
          <div className="mt-9"><EnerBioButtonAccent href="/vapor-y-energia" className="text-white">Conocé Vapor y Energía →</EnerBioButtonAccent></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map(([icon, label]) => <div key={label} className="group flex aspect-square min-h-40 flex-col items-start justify-between rounded-2xl border border-white/15 bg-white/10 p-6 transition-colors duration-300 hover:bg-white/15"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-enerbio-verde-acento p-3.5 text-white transition-transform duration-500 ease-out motion-reduce:transform-none group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110"><ServiceIcon name={icon} className="h-full w-full" /></span><span className="max-w-[11rem] text-base font-semibold leading-6">{label}</span></div>)}
        </div>
      </Reveal>
    </section>
  )
}