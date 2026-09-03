import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center bg-enerbio-gris-claro px-4 py-24 text-center">
        <div>
          <h1 className="text-4xl font-bold text-enerbio-verde-oscuro md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg text-enerbio-gris-texto">Página en construcción</p>
        </div>
      </main>
      <Footer />
    </>
  );
}