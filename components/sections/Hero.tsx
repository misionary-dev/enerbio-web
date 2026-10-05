"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { EnerBioButtonPrimary, EnerBioButtonSecondary } from "@/components/ui/EnerBioButton";
import TypewriterText from "@/components/ui/TypewriterText";

const SLIDES = [
  "https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb2.webp",
  "https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb3.webp",
  "https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb4.webp",
];

const INTERVAL = 5000;

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden text-white md:min-h-screen">
      {/* Slides */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`EnerBio banner ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-20 md:px-6 md:pb-36 lg:px-8">
        <div className="max-w-4xl">
          <p className="animate-fade-in text-sm tracking-widest text-enerbio-verde-claro md:text-base">
            Desde el corazón del polo forestal más importante de Argentina
          </p>
          <h1 className="animate-fade-up delay-200 mt-5 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Energía renovable para tu{" "}
            <TypewriterText words={["industria", "proceso", "operación", "negocio"]} className="text-enerbio-verde-acento" />
          </h1>
          <p className="animate-fade-in delay-500 mt-7 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            Desarrollamos, financiamos, construimos y operamos centrales de cogeneración a partir de biomasa, biogás y solar. Potencia firme los 365 días del año, integrada a tu proceso industrial. Del residuo al recurso, del análisis de proyecto a la operación 24/7.
          </p>
          <div className="animate-fade-up delay-800 mt-9 flex flex-col gap-4 [animation-duration:600ms] sm:flex-row">
            <EnerBioButtonPrimary href="#contacto" size="lg">Analicemos tu proyecto</EnerBioButtonPrimary>
            <EnerBioButtonSecondary href="/proyectos" size="lg">Ver nuestros proyectos</EnerBioButtonSecondary>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-enerbio-verde-acento" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
