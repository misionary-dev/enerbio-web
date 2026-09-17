"use client";

import { EnerBioButtonPrimary, EnerBioButtonSecondary } from "@/components/ui/EnerBioButton";
import TypewriterText from "@/components/ui/TypewriterText";

export function Hero() {
  return (
    <section className="relative flex min-h-[680px] items-center bg-[url('https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb.webp')] bg-cover bg-center text-white md:min-h-screen">
      <div className="absolute inset-0 bg-enerbio-verde-oscuro/70" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-20 md:px-6 md:pb-36 lg:px-8">
        <div className="max-w-4xl">
          <p className="animate-fade-in text-sm tracking-widest text-enerbio-verde-claro md:text-base">Desde el corazón del polo forestal más importante de Argentina</p>
          <h1 className="animate-fade-up delay-200 mt-5 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Energía renovable para tu{" "}
            <TypewriterText words={["industria", "proceso", "operación", "negocio"]} className="text-enerbio-verde-acento" />
          </h1>
          <p className="animate-fade-in delay-500 mt-7 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">Desarrollamos, financiamos, construimos y operamos centrales de cogeneración a partir de biomasa, biogás y solar. Potencia firme los 365 días del año, integrada a tu proceso industrial. Del residuo al recurso, del análisis de proyecto a la operación 24/7.</p>
          <div className="animate-fade-up delay-800 mt-9 flex flex-col gap-4 [animation-duration:600ms] sm:flex-row">
            <EnerBioButtonPrimary href="#contacto" size="lg">Analicemos tu proyecto</EnerBioButtonPrimary>
            <EnerBioButtonSecondary href="/proyectos" size="lg">Ver nuestros proyectos</EnerBioButtonSecondary>
          </div>
        </div>
      </div>
    </section>
  );
}