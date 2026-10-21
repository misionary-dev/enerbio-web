import { ContactoPY } from "@/components/sections/ContactoPY";
import { EmpresasQueConfian } from "@/components/sections/EmpresasQueConfian";
import { Hero } from "@/components/sections/Hero";
import { MetricasDestacadas } from "@/components/sections/MetricasDestacadas";
import { PropuestaValor } from "@/components/sections/PropuestaValor";
import { Proyectos } from "@/components/sections/Proyectos";
import { Servicios } from "@/components/sections/Servicios";
import { SobreNosotrosPY } from "@/components/sections/SobreNosotrosPY";
import { VaporEnergia } from "@/components/sections/VaporEnergia";

export default function HomePY() {
  return (
    <main>
      <Hero tagline="Desde Asunción, Paraguay, para la industria de la región" />
      <MetricasDestacadas />
      <SobreNosotrosPY />
      <PropuestaValor />
      <Servicios />
      <VaporEnergia />
      <Proyectos />
      <EmpresasQueConfian />
      <ContactoPY />
    </main>
  );
}
