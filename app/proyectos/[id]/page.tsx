import { notFound } from 'next/navigation'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ProyectoDetallePage } from '@/components/proyectos/ProyectoDetallePage'
import { proyectos } from '@/lib/data/proyectos'

export function generateStaticParams() {
  return proyectos.map(p => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const proyecto = proyectos.find(p => p.id === id)
  if (!proyecto) return {}
  return {
    title: `${proyecto.nombre} | Proyectos EnerBio`,
    description: proyecto.descripcion,
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const proyecto = proyectos.find(p => p.id === id)
  if (!proyecto) notFound()

  return (
    <>
      <Header />
      <ProyectoDetallePage proyecto={proyecto} />
      <Footer />
    </>
  )
}
