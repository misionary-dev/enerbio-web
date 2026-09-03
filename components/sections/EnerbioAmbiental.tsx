import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const pilaresAmbiental = [
  { icono: "🌿", titulo: "Consultoría y Evaluaciones Ambientales", subtitulo: "Estudios de impacto, prefactibilidades y auditorías" },
  { icono: "☀️", titulo: "Soluciones en Energías Renovables", subtitulo: "Biomasa, biogás y sistemas fotovoltaicos" },
  { icono: "📊", titulo: "Certificaciones y Huella de Carbono", subtitulo: "Bonos de carbono, IREC y proyectos AFOLU" },
];

export function EnerbioAmbiental() {
  return (
    <section className="bg-enerbio-azul-gris py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
        <div>
          <Badge>Unidad de negocio</Badge>
          <h2 className="mt-6 text-5xl font-bold md:text-6xl">Enerbio Ambiental</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-enerbio-verde-claro md:text-xl">Consultoría ambiental integral para empresas que buscan operar con responsabilidad y visión sostenible.</p>
          <p className="mt-6 max-w-2xl leading-7 text-white/90">Somos la unidad de negocio de EnerBio especializada en soluciones ambientales. Acompañamos a empresas de todos los sectores con estudios de impacto, sistemas de gestión ambiental, cálculo de huella de carbono y comercialización de bonos, incluyendo proyectos AFOLU.</p>
          <div className="mt-8 space-y-3">
            {pilaresAmbiental.map((pilar) => <div key={pilar.titulo} className="border-l-4 border-enerbio-verde-acento py-3 pl-4"><h3 className="text-lg font-semibold"><span aria-hidden="true">{pilar.icono}</span> {pilar.titulo}</h3><p className="mt-1 text-sm text-white/75">{pilar.subtitulo}</p></div>)}
          </div>
          <Button href="/enerbio-ambiental" variant="accent" className="mt-9">Descubrí Enerbio Ambiental →</Button>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-2xl bg-gray-300 px-8 text-center text-gray-600">Imagen: Enerbio Ambiental</div>
      </div>
    </section>
  );
}