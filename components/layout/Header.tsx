"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

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
          <a href="mailto:info@enerbio.com.ar">✉ info@enerbio.com.ar</a>
          <a href="tel:+543584199465">☎ +54-3584-199-465</a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" aria-label="EnerBio - Inicio">
            <Image src="https://cdn-enerbio.misionary.com.ar/Iconos/Logo-Enerbio.webp" alt="EnerBio - Energía renovable desde Misiones" width={180} height={52} className="h-10 w-auto md:h-12" priority />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegación principal">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-enerbio-gris-texto transition-colors hover:text-enerbio-verde-acento">
                {link.label}
              </Link>
            ))}
            <Link href="/contacto" className="rounded-full bg-enerbio-verde-oscuro px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-enerbio-verde-acento">
              Contactanos
            </Link>
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
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-gray-200 py-4 font-semibold text-enerbio-gris-texto">{link.label}</Link>
              ))}
              <Link href="/contacto" onClick={() => setOpen(false)} className="mt-6 rounded-full bg-enerbio-verde-oscuro px-6 py-4 text-center font-semibold text-white">Contactanos</Link>
            </nav>
          </aside>
        </div>
      )}
      </header>
    </>
  );
}