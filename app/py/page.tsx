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
  );
}
