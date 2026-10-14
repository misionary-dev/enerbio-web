import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactoPY } from "@/components/sections/ContactoPY";
import { EmpresasQueConfian } from "@/components/sections/EmpresasQueConfian";
import { Hero } from "@/components/sections/Hero";
import { MetricasDestacadas } from "@/components/sections/MetricasDestacadas";
import { PropuestaValor } from "@/components/sections/PropuestaValor";
import { Proyectos } from "@/components/sections/Proyectos";
import { Servicios } from "@/components/sections/Servicios";
import { VaporEnergia } from "@/components/sections/VaporEnergia";
import { SobreNosotros } from "@/components/sections/SobreNosotros";

export default function HomePY() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetricasDestacadas />
        <SobreNosotros />
        <PropuestaValor />
        <Servicios />
        <VaporEnergia />
        <Proyectos />
        <EmpresasQueConfian />
        <ContactoPY />
      </main>
      <Footer />
    </>
  );
}
