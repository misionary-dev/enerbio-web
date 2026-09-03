"use client";

import type { FormEvent } from "react";

const inputClass = "mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-enerbio-gris-texto outline-none focus:border-enerbio-verde-acento focus:ring-2 focus:ring-enerbio-verde-acento/20";
const labelClass = "text-sm font-semibold text-enerbio-verde-oscuro";

export function Contacto() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Fase 2 - Conectar con servicio de envío. Email destino: info@enerbio.com.ar
    console.log("Form submitted - TODO: conectar servicio");
  };

  return (
    <section id="contacto" className="bg-enerbio-gris-claro py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-enerbio-verde-acento">Contacto</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-enerbio-verde-oscuro md:text-5xl">Analicemos tu proyecto energético</h2>
          <p className="mt-6 text-lg leading-8 text-enerbio-gris-texto">Contanos sobre tu proyecto y un miembro de nuestro equipo te contactará para analizar la mejor solución energética o ambiental para tu industria. Respuesta en menos de 48 horas hábiles.</p>
          <div className="mt-9 space-y-6">
            <div><p className="font-semibold text-enerbio-verde-oscuro">✉ info@enerbio.com.ar</p><p className="mt-1 text-sm text-gray-600">Consultas generales</p></div>
            <div><p className="font-semibold text-enerbio-verde-oscuro">☎ +54 3584 199 465</p><p className="mt-1 text-sm text-gray-600">Lunes a Viernes 24hs</p></div>
            <div><p className="font-semibold text-enerbio-verde-oscuro">📍 Av. Belgrano 675</p><p className="mt-1 text-sm text-gray-600">Leandro N. Alem, Misiones</p></div>
          </div>
          <div className="mt-8 flex gap-3"><a href="https://www.linkedin.com/in/enerbio-s-r-l-34753a254/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full bg-enerbio-verde-oscuro font-semibold text-white">in</a><a href="https://www.instagram.com/enerbiosrl/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-enerbio-verde-oscuro font-semibold text-white">ig</a></div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
          <div><label htmlFor="nombre" className={labelClass}>Nombre completo *</label><input id="nombre" name="nombre" type="text" required className={inputClass} /></div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div><label htmlFor="email" className={labelClass}>Email *</label><input id="email" name="email" type="email" required className={inputClass} /></div>
            <div><label htmlFor="telefono" className={labelClass}>Teléfono *</label><input id="telefono" name="telefono" type="tel" required className={inputClass} /></div>
          </div>
          <div className="mt-6"><label htmlFor="empresa" className={labelClass}>Empresa *</label><input id="empresa" name="empresa" type="text" required className={inputClass} /></div>
          <div className="mt-6"><label htmlFor="servicio" className={labelClass}>Servicio de interés *</label><select id="servicio" name="servicio" required defaultValue="" className={inputClass}><option value="" disabled>Seleccioná una opción</option><optgroup label="— Servicios Energéticos —"><option value="analisis">Análisis de proyecto energético</option><option value="ingenieria">Ingeniería</option><option value="montajes">Montajes y puesta en marcha</option><option value="om">Operación y mantenimiento</option></optgroup><optgroup label="— Enerbio Ambiental —"><option value="impacto">Estudios de impacto ambiental</option><option value="huella">Huella de carbono</option><option value="bonos">Certificaciones y bonos de carbono</option><option value="consultoria">Consultoría ambiental integral</option></optgroup><optgroup label="— Otros —"><option value="general">No estoy seguro / Consulta general</option></optgroup></select></div>
          <div className="mt-6"><label htmlFor="mensaje" className={labelClass}>Mensaje</label><textarea id="mensaje" name="mensaje" rows={4} className={inputClass} /></div>
          <label className="mt-6 flex items-start gap-3 text-sm text-enerbio-gris-texto"><input type="checkbox" name="terminos" required className="mt-1 h-4 w-4 accent-enerbio-verde-oscuro" /><span>Aceptar términos *</span></label>
          <button type="submit" className="mt-8 w-full rounded-full bg-enerbio-verde-oscuro px-8 py-4 font-semibold text-white transition-colors hover:bg-enerbio-verde-acento md:w-auto">Enviar consulta →</button>
        </form>
      </div>
    </section>
  );
}