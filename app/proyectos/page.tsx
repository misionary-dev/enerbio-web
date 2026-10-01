import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ProyectosPageContent } from '@/components/proyectos/ProyectosPageContent'

export const metadata = {
  title: 'Proyectos | EnerBio SRL',
  description: 'Casos reales de proyectos de energía renovable ejecutados por EnerBio: cogeneración, solar fotovoltaico y biomasa forestal en Argentina y Paraguay.',
}

export default function ProyectosPage() {
  return (
    <>
      <Header />
      <ProyectosPageContent />
      <Footer />
    </>
  )
}
