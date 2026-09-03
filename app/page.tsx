import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contacto } from "@/components/sections/Contacto";
import { EmpresasQueConfian } from "@/components/sections/EmpresasQueConfian";
import { EnerbioAmbiental } from "@/components/sections/EnerbioAmbiental";
import { Hero } from "@/components/sections/Hero";
import { MetricasDestacadas } from "@/components/sections/MetricasDestacadas";
import { PropuestaValor } from "@/components/sections/PropuestaValor";
import { Proyectos } from "@/components/sections/Proyectos";
import { Servicios } from "@/components/sections/Servicios";
import { SobreNosotros } from "@/components/sections/SobreNosotros";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetricasDestacadas />
        <SobreNosotros />
        <PropuestaValor />
        <Servicios />
        <Proyectos />
        <EmpresasQueConfian />
        <EnerbioAmbiental />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}