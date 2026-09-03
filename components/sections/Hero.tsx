"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const words = ["industria", "proceso", "operación", "negocio"];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setCurrentIndex((previous) => (previous + 1) % words.length), 3000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[680px] items-center bg-[url('https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb.webp')] bg-cover bg-center text-white md:min-h-screen">
      <div className="absolute inset-0 bg-enerbio-verde-oscuro/70" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-20 md:px-6 md:pb-36 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm tracking-widest text-enerbio-verde-claro md:text-base">Desde el corazón del polo forestal más importante de Argentina</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Energía renovable para tu{" "}
            <span key={words[currentIndex]} className="animate-word-fade block text-enerbio-verde-acento sm:inline">{words[currentIndex]}</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">Desarrollamos, financiamos, construimos y operamos centrales de cogeneración a partir de biomasa, biogás y solar. Potencia firme los 365 días del año, integrada a tu proceso industrial. Del residuo al recurso, del análisis de proyecto a la operación 24/7.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#contacto">Analicemos tu proyecto</Button>
            <Button href="/proyectos" variant="outline">Ver nuestros proyectos</Button>
          </div>
        </div>
      </div>
    </section>
  );
}