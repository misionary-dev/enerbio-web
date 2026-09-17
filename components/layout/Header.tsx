"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EnerBioButtonPrimary } from "@/components/ui/EnerBioButton";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { serviceNavItems } from "@/lib/data/servicePages";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Enerbio Ambiental", href: "/enerbio-ambiental" },
  { label: "Trabajá con nosotros", href: "/trabaja-con-nosotros" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownServices = serviceNavItems.filter((item) => item.href !== "/servicios");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-enerbio-verde-oscuro text-white">
        <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-end gap-5 px-4 text-xs font-semibold sm:gap-6 md:px-6 md:text-sm lg:px-8">
          <a href="mailto:info@enerbio.com.ar" className="flex items-center gap-2"><ServiceIcon name="email" className="h-3.5 w-3.5" />info@enerbio.com.ar</a>
          <a href="tel:+543584199465" className="flex items-center gap-2"><ServiceIcon name="phone" className="h-3.5 w-3.5" />+54-3584-199-465</a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" aria-label="EnerBio - Inicio">
            <Image src="https://cdn-enerbio.misionary.com.ar/Iconos/Logo-Enerbio.webp" alt="EnerBio - Energía renovable desde Misiones" width={180} height={52} className="h-10 w-auto md:h-12" priority />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegación principal">
            {links.map((link) => (
              link.href === "/servicios" ? (
                <div key={link.href} className="group relative flex items-center">
                  <Link href={link.href} className="text-sm font-semibold text-enerbio-gris-texto transition-colors hover:text-enerbio-verde-acento">{link.label}</Link>
                  <span className="ml-1 text-xs text-enerbio-gris-texto transition-transform group-hover:rotate-180" aria-hidden="true">▾</span>
                  <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-xl">{dropdownServices.map((item) => <Link key={item.href} href={item.href} className={`block rounded-md px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#F8F8F8] hover:text-enerbio-verde-acento ${item.href === '/vapor-y-energia' ? 'bg-enerbio-verde-oscuro text-white hover:bg-enerbio-azul-gris hover:text-white' : 'text-enerbio-gris-texto'}`}>{item.label}</Link>)}</div>
                  </div>
                </div>
              ) : <Link key={link.href} href={link.href} className="text-sm font-semibold text-enerbio-gris-texto transition-colors hover:text-enerbio-verde-acento">{link.label}</Link>
            ))}
            <EnerBioButtonPrimary href="/contacto" size="sm">Contactanos</EnerBioButtonPrimary>
          </nav>

          <button type="button" className="flex h-11 w-11 items-center justify-center rounded-lg border border-enerbio-verde-oscuro text-2xl text-enerbio-verde-oscuro lg:hidden" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-enerbio-gris-texto/40 lg:hidden" onClick={() => setOpen(false)}>
          <aside className="ml-auto flex h-full w-[min(88vw,360px)] flex-col bg-white p-6 shadow-2xl" aria-label="Menú móvil" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-enerbio-verde-oscuro" aria-label="Cerrar menú" onClick={() => setOpen(false)}>×</button>
            <nav className="mt-8 flex flex-col gap-1">
              {links.map((link) => (
                link.href === "/servicios" ? <div key={link.href} className="border-b border-gray-200"><div className="flex items-center justify-between"><Link href="/servicios" onClick={() => setOpen(false)} className="flex-1 py-4 font-semibold text-enerbio-gris-texto">Servicios</Link><button type="button" className="h-11 w-11 text-enerbio-verde-oscuro" aria-label="Mostrar servicios" aria-expanded={servicesOpen} onClick={() => setServicesOpen((value) => !value)}><span className={`inline-block transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>▾</span></button></div>{servicesOpen && <div className="mb-3 border-l border-enerbio-verde-acento pl-4">{dropdownServices.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-enerbio-gris-texto">{item.label}</Link>)}</div>}</div> :
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-gray-200 py-4 font-semibold text-enerbio-gris-texto">{link.label}</Link>
              ))}
              <div className="mt-6"><EnerBioButtonPrimary href="/contacto" size="sm" onClick={() => setOpen(false)}>Contactanos</EnerBioButtonPrimary></div>
            </nav>
          </aside>
        </div>
      )}
      </header>
    </>
  );
}