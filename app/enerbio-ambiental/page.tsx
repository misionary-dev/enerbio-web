import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { EnerBioAmbientalPageContent } from '@/components/enerbio-ambiental/EnerBioAmbientalPageContent'

export const metadata = {
  title: 'Enerbio Ambiental | Consultoría ambiental integral',
  description: 'Enerbio Ambiental: consultoría ambiental integral para empresas en Argentina. Estudios de impacto, huella de carbono, bonos y proyectos AFOLU. +6 EIA ejecutados con clientes como Teyma-Abengoa.',
}

export default function EnerbioAmbientalPage() {
  return (
    <>
      <Header />
      <EnerBioAmbientalPageContent />
      <Footer />
    </>
  )
}
