import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EnerBio SRL | Energía renovable",
  description:
    "Desarrollamos, financiamos, construimos y operamos centrales de energía renovable desde Misiones.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} scroll-smooth`}
    >
      <body>
        {/*
          THESIS: EnerBio se presenta desde el territorio y el ciclo integral, sin sumar recursos fuera del documento maestro.
          OWN-WORLD: Verde forestal, azul gris, blanco; tipografía Montserrat e Inter; cards redondeadas y fotografía industrial.
          STORY: El visitante entiende el alcance, comprueba capacidad y proyectos, y llega a una consulta concreta.
          FIRST VIEWPORT: Navegación compacta sobre una operación industrial a pantalla completa, mensaje a la izquierda y CTA visible.
          FORM: Estructura institucional especificada por el documento maestro; implementación code-first por instrucción directa.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        {children}
      </body>
    </html>
  );
}
