import Image from "next/image";
import Link from "next/link";
import { servicePages } from "@/lib/data/servicePages";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const navigation = [
  ["Inicio", "/py"], ["Nosotros", "/py/nosotros"], ["Servicios", "/py/servicios"],
  ["Proyectos", "/py/proyectos"], ["Contacto", "/py/contacto"],
] as const;

const serviceNavPY = [
  ...servicePages
    .filter((s) => s.slug !== "ambiental-y-sustentabilidad")
    .map((s) => ({ label: s.eyebrow, href: `/py/servicios/${s.slug}` })),
  { label: "Vapor y Energía", href: "/py/vapor-y-energia" },
];

export function FooterPY() {
  return (
    <footer className="bg-enerbio-verde-oscuro py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="https://cdn-enerbio.misionary.com.ar/Iconos/LogoEnerBioparaguayblanco.png" alt="EnerBio Paraguay" width={180} height={52} className="h-12 w-auto" />
            <p className="mt-6 text-sm leading-6 text-white/80">Desarrollamos energía renovable cerca del recurso, cerca del proyecto. Desde Paraguay para la región.</p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/in/enerbio-s-r-l-34753a254/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 font-semibold">in</a>
              <a href="https://www.instagram.com/enerbiosrl/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 font-semibold">ig</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase">Navegación</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/80">{navigation.map(([label, href]) => <li key={href}><Link href={href} className="hover:text-enerbio-verde-claro">{label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase">Servicios</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/80">{serviceNavPY.map((s) => <li key={s.href}><Link href={s.href} className="hover:text-enerbio-verde-claro">{s.label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase">Contacto</h3>
            <div className="mt-6 space-y-5 text-sm leading-6 text-white/80">
              <p className="flex items-start gap-3"><span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-enerbio-verde-acento p-2 text-white"><ServiceIcon name="location" className="h-full w-full" /></span><span>Av. Brasilia 1947, 3er Piso, Of 422<br />Asunción, Paraguay</span></p>
              <p className="flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-enerbio-verde-acento p-2 text-white"><ServiceIcon name="email" className="h-full w-full" /></span><a href="mailto:nicolas.barberis@enerbio.com.py">nicolas.barberis@enerbio.com.py</a></p>
              <p className="flex items-start gap-3"><span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-enerbio-verde-acento p-2 text-white"><ServiceIcon name="phone" className="h-full w-full" /></span><a href="tel:+595982718264">+595 982 718 264</a></p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/20 pt-6 text-center text-xs text-white/60 md:flex-row md:justify-between md:text-left">
          <p>© 2026 EnerBio SRL. Todos los derechos reservados.</p>
          <p>Términos y Condiciones · Política de Privacidad</p>
        </div>
      </div>
    </footer>
  );
}
