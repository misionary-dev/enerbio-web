# 🚀 PROMPT MAESTRO — ENERBIO WEB v1.0 (FASE 1: ESTRUCTURA)

**Instrucciones para desarrollar el sitio web de EnerBio SRL**  
**Fase:** 1 de 3 — Estructura básica funcional  
**Fecha:** Septiembre 2026

---

# 🎯 CONTEXTO Y OBJETIVO

Sos un desarrollador experto en Next.js. Tenés que construir la estructura completa del nuevo sitio web de **EnerBio SRL**, una empresa argentina de desarrollo de proyectos energéticos renovables con base en Leandro N. Alem, Misiones.

## Tu objetivo en esta FASE 1:
Armar la **estructura HTML/JSX completa** del sitio con **diseño básico, limpio y funcional**. La web debe verse profesional pero sin complicaciones visuales. **NO agregar animaciones ni librerías de UI complejas.** El foco es que la estructura quede montada, responsive y lista para iterar sobre ella en fases posteriores.

---

# ⛔ REGLAS CRÍTICAS — LEER PRIMERO

## ❌ NO HAGAS ESTO:

1. **NO agregues animaciones de entrada** (fade-in, slide-up, contadores animados, parallax, efectos de scroll)
2. **NO instales librerías de UI** como shadcn/ui, Radix, Aceternity, Material-UI, Chakra, etc.
3. **NO inventes contenido** — usá EXACTAMENTE la copy que está en este documento
4. **NO agregues secciones** que no estén especificadas
5. **NO cambies el orden** de las secciones
6. **NO uses colores fuera** del sistema de diseño definido
7. **NO agregues carruseles, sliders, tabs** salvo el carousel de logos (única excepción)
8. **NO agregues Framer Motion, GSAP, AOS** ni ninguna librería de animaciones
9. **NO uses lorem ipsum** — todo el contenido está definido
10. **NO uses negro puro (#000000)** en ningún lado

## ✅ SÍ HACÉ ESTO:

1. **SÍ implementá EXACTAMENTE** la estructura de este documento
2. **SÍ usá Tailwind CSS** para todos los estilos
3. **SÍ hacé responsive** todos los componentes (mobile-first)
4. **SÍ dejá comentarios claros** en el código para las próximas fases
5. **SÍ usá TypeScript** con tipos claros
6. **SÍ organizá componentes modulares** por sección
7. **SÍ implementá la rotación de palabras** del Hero (única animación permitida)
8. **SÍ implementá el carousel infinito** de logos (única animación de UI permitida)
9. **SÍ mantené la estructura de carpetas** propuesta
10. **SÍ preguntá si tenés dudas** antes de asumir cosas

---

# 🏗️ STACK TÉCNICO

- **Framework:** Next.js 14+ (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Componentes:** React funcionales con hooks
- **Fuentes:** Google Fonts (Montserrat + Inter)
- **Deploy target:** Vercel (preparar estructura compatible)
- **Formularios:** Preparar estructura HTML, sin lógica de envío aún (dejar comentarios `// TODO: connect to form service`)

## Estructura de carpetas sugerida:

```
/app
  /layout.tsx
  /page.tsx                    (Home)
  /globals.css
  /nosotros
    /page.tsx                  (placeholder)
  /servicios
    /page.tsx                  (placeholder)
  /proyectos
    /page.tsx                  (placeholder)
  /enerbio-ambiental
    /page.tsx                  (placeholder)
  /trabaja-con-nosotros
    /page.tsx                  (placeholder)
  /contacto
    /page.tsx                  (placeholder)

/components
  /layout
    Header.tsx
    Footer.tsx
  /sections
    Hero.tsx
    MetricasDestacadas.tsx
    SobreNosotros.tsx
    PropuestaValor.tsx
    Servicios.tsx
    Proyectos.tsx
    EmpresasQueConfian.tsx
    EnerbioAmbiental.tsx
    Contacto.tsx
  /ui
    Button.tsx
    Card.tsx
    Badge.tsx

/lib
  /data
    proyectos.ts               (data de los 5 proyectos)
    servicios.ts               (data de los 5 servicios)
    empresas.ts                (data de los 5 logos)

/public
  /images
    (placeholders por ahora)
```

---

# 🎨 SISTEMA DE DISEÑO

## Paleta de colores

Configurá en `tailwind.config.ts`:

```typescript
colors: {
  enerbio: {
    'verde-oscuro': '#2D5016',     // Títulos, botones primarios, fondos oscuros
    'verde-acento': '#7CB342',     // Hovers, acentos, palabra rotativa Hero
    'verde-claro': '#A8D5A8',      // Eyebrows sobre fondos oscuros
    'azul-gris': '#385A66',        // Enerbio Ambiental, títulos alternativos
    'gris-texto': '#333333',       // Párrafos (NUNCA #000000)
    'gris-claro': '#F8F8F8',       // Fondos secundarios
  }
}
```

## Tipografía

Instalar Google Fonts en el layout principal:

```typescript
// app/layout.tsx
import { Montserrat, Inter } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['400', '600', '700']
})

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
})
```

Configurar en Tailwind:
```typescript
fontFamily: {
  montserrat: ['var(--font-montserrat)'],
  inter: ['var(--font-inter)'],
}
```

### Jerarquía:
- **H1 (Hero):** Montserrat Bold, 48-72px
- **H2 (Secciones):** Montserrat Bold, 36-42px
- **H3 (Sub-secciones):** Montserrat Bold, 24-28px
- **Body:** Inter Regular, 16-18px

## Espaciado estándar

- **Padding secciones:** 100-140px vertical desktop / 60-80px mobile
- **Border radius:** 
  - Botones: `rounded-full` o `rounded-xl`
  - Cards: `rounded-2xl` (16-20px)
  - Inputs: `rounded-lg`
- **Sombras cards:** `shadow-lg` o `shadow-xl` (sutil)
- **Container principal:** `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`

---

# 📄 ESTRUCTURA DEL SITIO

## Rutas a crear:

| Ruta | Estado en Fase 1 |
|------|------------------|
| `/` (Home) | ✅ Completo |
| `/nosotros` | 📝 Placeholder con título |
| `/servicios` | 📝 Placeholder con título |
| `/proyectos` | 📝 Placeholder con título |
| `/enerbio-ambiental` | 📝 Placeholder con título |
| `/trabaja-con-nosotros` | 📝 Placeholder con título |
| `/contacto` | 📝 Placeholder con título |

Los placeholders deben tener el Header y Footer + un título centrado con "Página en construcción". Se completarán en fases posteriores.

---

# 🏠 HOME — CONTENIDO Y ESTRUCTURA COMPLETA

## Orden de las 11 secciones:

1. Header
2. Hero Section
3. Métricas Destacadas (puente flotante)
4. Sobre Nosotros
5. Propuesta de Valor
6. Servicios (ciclo integral)
7. Proyectos
8. Empresas que confían (carousel infinito)
9. Enerbio Ambiental
10. Formulario Contacto
11. Footer

---

## 1️⃣ HEADER

### Estructura:

**Barra superior (bg verde oscuro #2D5016):**
- Alto: ~40px
- Contenido alineado a la derecha
- Padding horizontal generoso

Contenido:
- 📧 Ícono correo + `info@enerbio.com.ar`
- 📞 Ícono teléfono + `+54-3584-199-465`

Estilo: Texto blanco, Inter SemiBold, 13-14px, separación entre items ~24px.

**Barra principal (bg blanco):**
- Alto: ~80px
- Sticky (queda fijo al hacer scroll)
- Sombra sutil cuando se hace scroll

**Izquierda:** Logo EnerBio  
```
<img 
  src="https://cdn-enerbio.misionary.com.ar/Iconos/Logo-Enerbio.webp" 
  alt="EnerBio - Energía renovable desde Misiones"
  className="h-10 md:h-12 w-auto"
/>
```

**Derecha:** Navegación:
- Inicio → `/`
- Nosotros → `/nosotros`
- Servicios → `/servicios`
- Proyectos → `/proyectos`
- Enerbio Ambiental → `/enerbio-ambiental`
- Trabajá con nosotros → `/trabaja-con-nosotros`
- **Botón:** Contactanos → `/contacto` (verde EnerBio, redondeado)

**Mobile:** Hamburger menu que abre sidebar con los mismos links.

---

## 2️⃣ HERO SECTION

### Estructura:

Sección full-width con altura `min-h-screen` o al menos 600px.

**Fondo:** Imagen con overlay verde oscuro al 60-70% opacity.

**Imágenes disponibles** (elegir una o rotar):
```
https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb.webp
https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb2.webp
https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb3.webp
https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb4.webp
```

En esta fase, usar **una imagen fija** (BannerWeb.webp). Rotación de imágenes en fase 2.

**Contenido:** Centrado o alineado izquierda con max-width 800px.

### Elementos (de arriba a abajo):

**EYEBROW:**
```
Desde el corazón del polo forestal más importante de Argentina
```
- Estilo: Inter Regular, 14-16px, verde claro (#A8D5A8), letter-spacing 1-2px

**TÍTULO PRINCIPAL** (con rotación de palabra final):
```
Energía renovable para tu [industria / proceso / operación / negocio]
```

- Frase fija: `Energía renovable para tu`
- Palabra rotativa: cambia cada 3 segundos entre: `industria`, `proceso`, `operación`, `negocio`
- Efecto: fade-in / fade-out simple (única animación permitida)
- Estilo: Montserrat Bold, 56-72px desktop / 36-48px mobile, color blanco
- Palabra rotativa en verde acento (#7CB342)

**Implementación sugerida (React hook simple):**
```typescript
const words = ['industria', 'proceso', 'operación', 'negocio']
const [currentIndex, setCurrentIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length)
  }, 3000)
  return () => clearInterval(interval)
}, [])
```

**BAJADA:**
```
Desarrollamos, financiamos, construimos y operamos centrales de cogeneración a partir de biomasa, biogás y solar. Potencia firme los 365 días del año, integrada a tu proceso industrial. Del residuo al recurso, del análisis de proyecto a la operación 24/7.
```
- Estilo: Inter Regular, 18-20px, blanco al 90% opacity, line-height 1.6, max-width 640px

**BOTONES (2, horizontales):**

**PRIMARIO:**
- Texto: `Analicemos tu proyecto`
- Link: `#contacto` (scroll a la sección Contacto)
- Estilo: `bg-enerbio-verde-oscuro text-white px-8 py-4 rounded-full font-semibold hover:bg-enerbio-verde-acento transition-colors`

**SECUNDARIO:**
- Texto: `Ver nuestros proyectos`
- Link: `/proyectos`
- Estilo: `border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-enerbio-verde-oscuro transition-colors`

---

## 3️⃣ MÉTRICAS DESTACADAS (bloque puente)

### Comportamiento visual:

Card horizontal que actúa como **puente flotante** entre Hero y Sobre Nosotros.
- Se implementa con `margin-top: -90px` (o `-mt-24` en Tailwind) sobre la sección Sobre Nosotros
- La mitad superior queda "encima" del Hero
- La mitad inferior queda sobre el fondo blanco

### Estilo de la card:

```
bg-white rounded-2xl shadow-2xl 
py-10 px-8 md:py-12 md:px-12
max-w-6xl mx-auto
relative z-10
```

### Contenido (grid de 4 columnas):

En desktop: 4 columnas horizontales con separadores verticales.  
En mobile: 1 columna (stack vertical) con separadores horizontales.

```
+25             >30 MW           2                 2022
PROFESIONALES   INSTALADOS Y     PAÍSES —          O&M PROPIO
                EN EJECUCIÓN     ARGENTINA         EN PLANTA
                                 Y PARAGUAY        DESDE
```

**Estilo:**
- Número: Montserrat Bold, 48-56px, verde oscuro (#2D5016)
- Etiqueta: Inter SemiBold, 12-13px, uppercase, gris (#666), letter-spacing 1px
- Alineación centrada

**Data (crear en `/lib/data/metricas.ts`):**
```typescript
export const metricas = [
  { numero: '+25', etiqueta: 'Profesionales' },
  { numero: '>30 MW', etiqueta: 'Instalados y en ejecución' },
  { numero: '2', etiqueta: 'Países — Argentina y Paraguay' },
  { numero: '2022', etiqueta: 'O&M propio en planta desde' },
]
```

---

## 4️⃣ SOBRE NOSOTROS

### Layout:

Dos columnas 50/50 (desktop) — **imagen a la izquierda, contenido a la derecha**.  
En mobile: stack (imagen arriba, contenido abajo).

**Fondo:** Blanco o gris claro (#F8F8F8)  
**Padding:** `py-24 md:py-32` (con espacio extra arriba para el bloque puente)

### Columna Izquierda — Imagen:

Placeholder por ahora:
```html
<div className="aspect-[4/5] bg-gray-200 rounded-2xl flex items-center justify-center">
  <span className="text-gray-500">Imagen: Planta EnerBio en operación</span>
</div>
```

### Columna Derecha — Contenido:

**EYEBROW:**
```
SOBRE NOSOTROS
```
Estilo: uppercase, verde acento (#7CB342), Montserrat SemiBold, 14px, letter-spacing 2-3px.

**TÍTULO (H2):**
```
Desarrollamos energía renovable cerca del recurso, cerca de tu proyecto
```
Estilo: Montserrat Bold, 36-48px, verde oscuro (#2D5016), line-height 1.2.

**PÁRRAFO 1:**
```
Somos una empresa de ingeniería energética nacida en Leandro N. Alem, Misiones —el polo forestal más importante de Argentina. Desde aquí acompañamos a la industria en su transición hacia fuentes renovables, con equipos técnicos formados en el territorio y presencia en Argentina y Paraguay.
```

**PÁRRAFO 2:**
```
Creemos que los proyectos energéticos se desarrollan mejor cerca del recurso y cerca del cliente. Trabajamos con biomasa forestal, biogás y solar, transformando residuos industriales en energía firme y sostenible: potencia disponible los 365 días del año, integrada a cada proceso productivo.
```

Estilo párrafos: Inter Regular, 16-18px, gris (#333333), line-height 1.7, max-width 540px, espaciado entre párrafos 24px.

**BOTÓN:**
- Texto: `Conocé nuestra historia →`
- Link: `/nosotros`
- Estilo: `bg-enerbio-verde-oscuro text-white px-8 py-4 rounded-full font-semibold`

---

## 5️⃣ PROPUESTA DE VALOR

### Layout:

Sección full-width con:
1. Bloque superior centrado (eyebrow + título + bajada)
2. Grid de 4 cards debajo

**Fondo:** Gradiente diagonal verde + azul gris
```css
background: linear-gradient(135deg, #2D5016 0%, #385A66 100%);
```

En Tailwind:
```
bg-gradient-to-br from-enerbio-verde-oscuro to-enerbio-azul-gris
```

**Padding:** `py-24 md:py-32`

### Bloque Superior:

**EYEBROW:** `POR QUÉ ENERBIO` (verde claro #A8D5A8, centrado)

**TÍTULO:**
```
Cuatro razones que nos hacen tu partner energético
```
Blanco, Montserrat Bold, 40-48px, centrado, max-width 720px.

**BAJADA:**
```
No solo construimos centrales de energía renovable: las desarrollamos, financiamos, operamos y las hacemos parte de tu industria.
```
Blanco al 85%, Inter Regular, 17-18px, centrado, max-width 640px.

### 4 Cards de Pilares:

**Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8`

**Estilo de cada card:**
```
bg-white rounded-2xl p-8 md:p-10 text-center
```

**Data (crear en `/lib/data/pilares.ts`):**
```typescript
export const pilares = [
  {
    icono: 'zap', // o emoji ⚡
    titulo: 'Potencia firme, 365 días al año',
    descripcion: 'Con biomasa y biogás generamos energía continua, disponible todo el año, independiente del clima o la estación.'
  },
  {
    icono: 'map-pin', // o 📍
    titulo: 'Cerca del recurso, cerca del proyecto',
    descripcion: 'Desarrollamos proyectos en un radio de 30-50 km del recurso, con equipos técnicos que conocen el territorio y la industria regional.'
  },
  {
    icono: 'refresh-cw', // o 🔄
    titulo: 'Del análisis a la operación 24/7',
    descripcion: 'Cubrimos todo el ciclo del proyecto: análisis, ingeniería, montaje, puesta en marcha, operación y mantenimiento continuo.'
  },
  {
    icono: 'recycle', // o ♻️
    titulo: 'Del residuo al recurso',
    descripcion: 'Transformamos subproductos industriales en energía útil, reduciendo costos, emisiones y dependencia de combustibles fósiles.'
  }
]
```

**Estilo interno de cada card:**
- Ícono: 48-64px, verde acento (#7CB342), arriba
- Título: Montserrat Bold, 20-22px, verde oscuro (#2D5016)
- Descripción: Inter Regular, 14-16px, gris (#333)

**Íconos:** Por ahora usar emojis (⚡📍🔄♻️) o placeholder. En fase 2 se reemplazan con SVG o librería.

---

## 6️⃣ SERVICIOS (CICLO INTEGRAL)

### Layout:

Sección con:
1. Bloque superior centrado (eyebrow + título + bajada)
2. Timeline horizontal de 4 nodos
3. Banda transversal del 5to servicio (Ambiental)
4. CTA final centrado

**Fondo:** Blanco o gris claro  
**Padding:** `py-24 md:py-32`

### Bloque Superior:

**EYEBROW:** `NUESTROS SERVICIOS`

**TÍTULO:**
```
Un ciclo integral, un solo partner energético
```

**BAJADA:**
```
Acompañamos cada proyecto energético en todas sus etapas, desde la evaluación inicial hasta la operación diaria, con un equipo multidisciplinario que integra ingeniería, ejecución y sustentabilidad.
```

### Timeline Horizontal (4 nodos):

**Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`

En desktop: flechas conectoras entre nodos (implementación simple con pseudo-elementos CSS `::after` o divs decorativos).  
En mobile: apilamiento vertical sin flechas.

**Data (crear en `/lib/data/servicios.ts`):**
```typescript
export const servicios = [
  {
    numero: '01',
    titulo: 'Análisis de Proyectos',
    descripcion: 'Evaluamos viabilidad técnica, económica y legal para que cada proyecto arranque sobre bases sólidas y rentables.',
    icono: 'chart-bar'
  },
  {
    numero: '02',
    titulo: 'Ingeniería',
    descripcion: 'Diseñamos la solución técnica: ingeniería básica, de detalle y re-ingeniería adaptada a cada industria.',
    icono: 'settings'
  },
  {
    numero: '03',
    titulo: 'Montajes y Puesta en Marcha',
    descripcion: 'Ejecutamos y supervisamos el montaje electromecánico, la instrumentación, control y las obras civiles del proyecto.',
    icono: 'wrench'
  },
  {
    numero: '04',
    titulo: 'Operación y Mantenimiento',
    descripcion: 'Operamos y mantenemos las plantas 24/7, con programas preventivos y correctivos que aseguran continuidad.',
    icono: 'refresh-cw'
  }
]
```

**Estilo de cada nodo:**
```
bg-white rounded-2xl p-8 
border-t-4 border-enerbio-verde-acento
shadow-md
text-center
```

- Número (01-04): Montserrat Bold, 40-48px, verde acento (#7CB342)
- Ícono: 40-48px, verde oscuro (#2D5016)
- Título: Montserrat Bold, 18-20px, verde oscuro
- Descripción: Inter Regular, 13-14px, gris (#333), line-height 1.5

### Banda del 5to servicio (Ambiental transversal):

Debajo del timeline, con `mt-16 md:mt-20`.

**Estilo:**
```
bg-enerbio-azul-gris rounded-2xl p-8 md:p-12
```

**Contenido:**

**Badge:** `TRANSVERSAL A TODO EL CICLO` (verde acento fondo, blanco texto, pill)

**Número:** `05` (blanco 60% opacity, Montserrat Bold 40-48px)

**Título:** `Ambiental y Sustentabilidad` (blanco, Montserrat Bold 22-24px)

**Descripción:**
```
Impacto ambiental, huella de carbono, certificaciones IREC y bonos de carbono. Presente en cada etapa del proyecto para operar responsablemente.
```
Blanco al 90%, Inter Regular 15-16px.

### CTA Final:

Centrado, con margen superior `mt-16`:
```
Conocé cada servicio en detalle →
```
Botón verde oscuro, redondeado, link a `/servicios`.

---

## 7️⃣ PROYECTOS

### Layout:

1. Bloque superior centrado (eyebrow + título + bajada)
2. Grid de 5 cards de proyectos
3. CTA final centrado

**Fondo:** Blanco o gris claro  
**Padding:** `py-24 md:py-32`

### Bloque Superior:

**EYEBROW:** `NUESTROS PROYECTOS`

**TÍTULO:**
```
Casos reales, resultados concretos
```

**BAJADA:**
```
Desde Misiones hasta Paraguay, acompañamos a industrias reales en su transición energética. Cada proyecto combina ingeniería, ejecución y operación adaptadas a los desafíos específicos del cliente.
```

### Grid de Cards:

**Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`

Las 5 cards en 2 filas (3 arriba + 2 abajo, con la última centrada u ocupando 2 columnas).

**Estructura de cada card:**
```
bg-white rounded-2xl overflow-hidden shadow-md
```

Contenido:
- **Imagen** (aspect ratio 4:3): placeholder por ahora
- **Padding interno:** `p-6`
- **Badge de tecnología** (arriba)
- **Nombre** (H3)
- **Ubicación** (con ícono 📍)
- **Descripción corta**
- **Mini-pills:** Capacidad + Estado
- **Link:** "Ver detalle →"

**Data (crear en `/lib/data/proyectos.ts`):**

```typescript
export const proyectos = [
  {
    id: 'alcogreen',
    nombre: 'Alcogreen',
    ubicacion: 'Escobar, Paraguarí — Paraguay',
    tecnologia: 'COGENERACIÓN',
    colorBadge: 'verde-oscuro', // #2D5016
    descripcion: 'Central de cogeneración integrada a planta de etanol de maíz. Supervisión de montaje electromecánico y puesta en marcha.',
    capacidad: '10 MW',
    estado: 'En ejecución',
    imagen: '/images/proyectos/alcogreen.jpg' // placeholder
  },
  {
    id: 'matilde-exporta',
    nombre: 'Matilde Exporta',
    ubicacion: 'Estación Matilde, Santa Fe',
    tecnologia: 'SOLAR FOTOVOLTAICO',
    colorBadge: 'azul-gris',
    descripcion: 'Parque solar diseñado e implementado para impulsar un molino harinero de 600 toneladas diarias con energía renovable.',
    capacidad: '500 kW',
    estado: 'Operativa',
    imagen: '/images/proyectos/matilde.jpg'
  },
  {
    id: 'ct-seismega-unitan',
    nombre: 'CT SEISMEGA — UNITAN',
    ubicacion: 'Puerto Tirol, Chaco',
    tecnologia: 'COGENERACIÓN',
    colorBadge: 'verde-oscuro',
    descripcion: 'Coordinación integral de operación y mantenimiento de central de cogeneración industrial de gran escala.',
    capacidad: '9 MW',
    estado: 'O&M continuo',
    imagen: '/images/proyectos/seismega.jpg'
  },
  {
    id: 'ct-edg-bioenergia',
    nombre: 'CT EDG Bioenergía',
    ubicacion: 'Santiago de Liniers, Misiones',
    tecnologia: 'BIOMASA FORESTAL',
    colorBadge: 'verde-acento',
    descripcion: 'Precomisionado, comisionado y puesta en marcha de central de cogeneración con biomasa forestal integrada a industria.',
    capacidad: '3 MW',
    estado: 'Operativa',
    imagen: '/images/proyectos/edg.jpg'
  },
  {
    id: 'ct-toll-bioenergia',
    nombre: 'CT Toll Bioenergía',
    ubicacion: 'Eldorado, Misiones',
    tecnologia: 'BIOMASA FORESTAL',
    colorBadge: 'verde-acento',
    descripcion: 'Montaje electromecánico completo y puesta en marcha de central de cogeneración con biomasa forestal en el corazón del NEA.',
    capacidad: '3 MW',
    estado: 'Operativa',
    imagen: '/images/proyectos/toll.jpg'
  }
]
```

**Placeholder de imágenes:**
```html
<div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
  <span className="text-gray-500">Imagen: {proyecto.nombre}</span>
</div>
```

### CTA Final:

```
Ver todos nuestros proyectos →
```
Botón verde oscuro, redondeado, link a `/proyectos`.

---

## 8️⃣ EMPRESAS QUE CONFÍAN

### Layout:

Sección compacta con:
1. Bloque superior centrado (eyebrow + título + bajada breve)
2. Carousel infinito de logos

**Fondo:** Blanco o gris claro  
**Padding:** `py-20 md:py-24` (más compacto que otras secciones)

### Bloque Superior:

**EYEBROW:** `EMPRESAS QUE CONFÍAN`

**TÍTULO:**
```
Industrias que ya eligieron nuestra energía
```
Montserrat Bold, 32-40px.

**BAJADA:**
```
Desde molinos y aserraderos hasta plantas de etanol, acompañamos a empresas de distintos sectores en su transición energética.
```
Inter Regular, 15-16px, gris.

### Carousel Infinito:

**Implementación CSS puro (sin librerías):**

```typescript
// Componente CarouselLogos.tsx
const empresas = [
  { nombre: 'Alcogreen', logo: '/images/logos/alcogreen.png' },
  { nombre: 'Matilde Exporta', logo: '/images/logos/matilde.png' },
  { nombre: 'UNITAN', logo: '/images/logos/unitan.png' },
  { nombre: 'EDG', logo: '/images/logos/edg.png' },
  { nombre: 'Toll', logo: '/images/logos/toll.png' },
]

// Duplicar el array para que el loop sea continuo sin cortes
const logosLoop = [...empresas, ...empresas, ...empresas]
```

**CSS (en `globals.css` o Tailwind):**
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
```

**Contenedor:**
```html
<div className="overflow-hidden bg-gray-50 rounded-2xl py-10">
  <div className="flex animate-scroll gap-16">
    {logosLoop.map((empresa, index) => (
      <img 
        key={`${empresa.nombre}-${index}`}
        src={empresa.logo}
        alt={empresa.nombre}
        className="h-16 md:h-20 w-auto grayscale hover:grayscale-0 transition-all"
      />
    ))}
  </div>
</div>
```

**Placeholders de logos:**
Por ahora, usar cajas con texto:
```html
<div className="h-16 md:h-20 w-40 bg-gray-300 rounded flex items-center justify-center">
  <span className="text-gray-600 font-semibold">{empresa.nombre}</span>
</div>
```

---

## 9️⃣ ENERBIO AMBIENTAL

### Layout:

Formato "hero secundario" destacado.  
Dos columnas 60/40 — contenido izquierda, imagen derecha.  
En mobile: stack.

**Fondo:** Azul gris (#385A66) dominante
```
bg-enerbio-azul-gris
```

Alternativa (gradiente):
```
bg-gradient-to-br from-enerbio-azul-gris to-enerbio-verde-oscuro
```

**Padding:** `py-24 md:py-32`

### Columna Izquierda — Contenido:

**BADGE:**
```
UNIDAD DE NEGOCIO
```
Estilo: `inline-block bg-enerbio-verde-acento text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full`

**TÍTULO:**
```
Enerbio Ambiental
```
Blanco, Montserrat Bold, 48-56px.

**SUBTÍTULO:**
```
Consultoría ambiental integral para empresas que buscan operar con responsabilidad y visión sostenible.
```
Verde claro (#A8D5A8), Inter Regular, 18-20px, max-width 500px.

**DESCRIPCIÓN:**
```
Somos la unidad de negocio de EnerBio especializada en soluciones ambientales. Acompañamos a empresas de todos los sectores con estudios de impacto, sistemas de gestión ambiental, cálculo de huella de carbono y comercialización de bonos, incluyendo proyectos AFOLU.
```
Blanco al 90%, Inter Regular, 16-17px.

**LOS 3 PILARES:**

Bloques verticales con border-left verde acento.

```typescript
const pilaresAmbiental = [
  {
    icono: '🌿',
    titulo: 'Consultoría y Evaluaciones Ambientales',
    subtitulo: 'Estudios de impacto, prefactibilidades y auditorías'
  },
  {
    icono: '☀️',
    titulo: 'Soluciones en Energías Renovables',
    subtitulo: 'Biomasa, biogás y sistemas fotovoltaicos'
  },
  {
    icono: '📊',
    titulo: 'Certificaciones y Huella de Carbono',
    subtitulo: 'Bonos de carbono, IREC y proyectos AFOLU'
  }
]
```

**Estilo de cada pilar:**
```
border-l-4 border-enerbio-verde-acento pl-4 py-3
```
- Título: Montserrat SemiBold, 17-18px, blanco
- Subtítulo: Inter Regular, 14-15px, blanco al 75%

**CTA:**
- Texto: `Descubrí Enerbio Ambiental →`
- Link: `/enerbio-ambiental`
- Estilo: `bg-enerbio-verde-acento text-enerbio-verde-oscuro px-8 py-4 rounded-full font-semibold`

### Columna Derecha — Imagen:

Placeholder por ahora:
```html
<div className="aspect-square bg-gray-300 rounded-2xl flex items-center justify-center">
  <span className="text-gray-600">Imagen: Enerbio Ambiental</span>
</div>
```

---

## 🔟 FORMULARIO DE CONTACTO

**ID de sección:** `contacto` (para scroll desde botones del Hero)

### Layout:

Dos columnas: contenido izquierda (40%), formulario derecha (60%).  
En mobile: stack.

**Fondo:** Blanco o gris claro  
**Padding:** `py-24 md:py-32`

### Columna Izquierda:

**EYEBROW:** `CONTACTO`

**TÍTULO:**
```
Analicemos tu proyecto energético
```

**BAJADA:**
```
Contanos sobre tu proyecto y un miembro de nuestro equipo te contactará para analizar la mejor solución energética o ambiental para tu industria. Respuesta en menos de 48 horas hábiles.
```

**BLOQUE DE CONTACTO DIRECTO:**

```
📧 info@enerbio.com.ar
   Consultas generales

📞 +54 3584 199 465
   Lunes a Viernes 24hs

📍 Av. Belgrano 675
   Leandro N. Alem, Misiones
```

Estilo:
- Íconos verdes (#7CB342), 20-24px
- Título de cada ítem: Inter SemiBold, 15-16px, verde oscuro
- Subtítulo: Inter Regular, 13-14px, gris

**REDES SOCIALES:**
```
LinkedIn: https://www.linkedin.com/in/enerbio-s-r-l-34753a254/
Instagram: https://www.instagram.com/enerbiosrl/
```

Iconos redondos, verde EnerBio.

### Columna Derecha — Formulario:

**Contenedor:**
```
bg-white rounded-2xl shadow-xl p-8 md:p-12
```

**Campos:**

```typescript
// components/sections/Contacto.tsx

// Campos del formulario:
1. Nombre completo * (text) - fila completa
2. Email * (email) - 50%
3. Teléfono * (tel) - 50%
4. Empresa * (text) - fila completa
5. Servicio de interés * (select) - fila completa
6. Mensaje (textarea, 4 filas) - fila completa
7. Aceptar términos * (checkbox)
```

**Opciones del dropdown "Servicio de interés":**
```typescript
const servicios = [
  { label: 'Seleccioná una opción', value: '', disabled: true },
  { label: '— Servicios Energéticos —', value: '', disabled: true },
  { label: 'Análisis de proyecto energético', value: 'analisis' },
  { label: 'Ingeniería', value: 'ingenieria' },
  { label: 'Montajes y puesta en marcha', value: 'montajes' },
  { label: 'Operación y mantenimiento', value: 'om' },
  { label: '— Enerbio Ambiental —', value: '', disabled: true },
  { label: 'Estudios de impacto ambiental', value: 'impacto' },
  { label: 'Huella de carbono', value: 'huella' },
  { label: 'Certificaciones y bonos de carbono', value: 'bonos' },
  { label: 'Consultoría ambiental integral', value: 'consultoria' },
  { label: '— Otros —', value: '', disabled: true },
  { label: 'No estoy seguro / Consulta general', value: 'general' },
]
```

**Estilo de inputs:**
```
border border-gray-300 rounded-lg px-4 py-3 
focus:border-enerbio-verde-acento focus:ring-2 focus:ring-enerbio-verde-acento/20
```

**Labels:**
```
text-sm font-semibold text-enerbio-verde-oscuro mb-2
```

**Botón submit:**
```
Enviar consulta →
```
```
bg-enerbio-verde-oscuro text-white px-8 py-4 rounded-full font-semibold w-full md:w-auto
```

**IMPORTANTE:** En FASE 1, el formulario NO envía nada. Dejar comentario:
```typescript
// TODO: Fase 2 - Conectar con servicio de envío (Formspree, EmailJS, o API custom)
// Email destino: info@enerbio.com.ar
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('Form submitted - TODO: conectar servicio')
}
```

---

## 1️⃣1️⃣ FOOTER

### Layout:

Grid de 4 columnas (desktop) + línea inferior legal.

**Fondo:** Verde oscuro (#2D5016)  
**Padding:** `py-16 md:py-20`

### Grid Principal (4 columnas):

**COLUMNA 1: Marca**
- Logo EnerBio (versión blanca — usar el mismo por ahora)
- Tagline: `Desarrollamos energía renovable cerca del recurso, cerca del proyecto. Desde Misiones para Argentina y Paraguay.`
- Redes sociales (LinkedIn + Instagram, iconos)

**COLUMNA 2: Navegación**
- Título: `NAVEGACIÓN` (Montserrat Bold, blanco, uppercase, 14-15px)
- Links:
  - Inicio → `/`
  - Nosotros → `/nosotros`
  - Servicios → `/servicios`
  - Proyectos → `/proyectos`
  - Enerbio Ambiental → `/enerbio-ambiental`
  - Trabajá con nosotros → `/trabaja-con-nosotros`
  - Contacto → `/contacto`

**COLUMNA 3: Servicios**
- Título: `SERVICIOS`
- Links:
  - Análisis de Proyectos
  - Ingeniería
  - Montajes y Puesta en Marcha
  - Operación y Mantenimiento
  - Ambiental y Sustentabilidad
- (Links a páginas internas de cada servicio — por ahora todos apuntan a `/servicios`)

**COLUMNA 4: Contacto**
- Título: `CONTACTO`
- Contenido:
```
📍 Av. Belgrano 675
   N3315 Leandro N. Alem
   Misiones, Argentina

📧 info@enerbio.com.ar

📞 +54 3584 199 465
   Lunes a Viernes 24hs
```

**Estilo de links en todas las columnas:**
- Inter Regular, 14px, blanco al 80% opacity
- Hover: blanco 100% o verde acento
- Separación entre links: 10-14px

### Línea Legal Inferior:

Separador: `border-t border-white/20 mt-12 pt-6`

**Contenido flex (space-between):**

**Izquierda:**
```
© 2026 EnerBio SRL. Todos los derechos reservados.
```

**Derecha:**
```
Términos y Condiciones · Política de Privacidad
```

Estilo: Inter Regular, 12-13px, blanco al 60% opacity.

En mobile: se apilan verticalmente centrados.

---

# ✅ CHECKLIST DE ENTREGA — FASE 1

Cuando termines, la entrega debe incluir:

- [ ] Proyecto Next.js 14+ con TypeScript configurado
- [ ] Tailwind CSS configurado con la paleta EnerBio
- [ ] Google Fonts (Montserrat + Inter) instalados
- [ ] Estructura de carpetas según lo especificado
- [ ] Home completo con las 11 secciones
- [ ] Header y Footer funcionales en todas las páginas
- [ ] 6 páginas internas con placeholder "Página en construcción"
- [ ] Rotación de palabras en Hero funcionando (única animación)
- [ ] Carousel infinito de logos funcionando (única animación de UI)
- [ ] Responsive en mobile, tablet y desktop
- [ ] Formulario con validación básica (HTML5) pero SIN envío
- [ ] Data separada en `/lib/data/` para fácil actualización futura
- [ ] Comentarios `// TODO Fase 2` donde corresponda
- [ ] README.md con instrucciones para correr el proyecto
- [ ] `.gitignore` estándar
- [ ] Sin errores de TypeScript
- [ ] Sin warnings de ESLint

---

# ⚠️ INFORMACIÓN PENDIENTE (no bloquea la Fase 1)

En Fase 2/3, hay que reemplazar/completar:

- [ ] Imágenes reales de plantas EnerBio (por ahora placeholders)
- [ ] Logos oficiales de los 5 clientes (por ahora placeholders con texto)
- [ ] Fotos del equipo
- [ ] Iconografía definitiva (por ahora emojis o placeholders)
- [ ] Contenido de páginas internas
- [ ] Integración del formulario con servicio de envío
- [ ] Términos y Condiciones + Política de Privacidad
- [ ] Analytics (GA4, GTM)
- [ ] Meta tags SEO por página
- [ ] Sitemap.xml y robots.txt
- [ ] WhatsApp flotante
- [ ] Botón "volver arriba"

---

# 🎯 ORDEN DE DESARROLLO SUGERIDO

Para que el desarrollo sea manejable, seguí este orden:

1. **Setup inicial:** Next.js + Tailwind + Fuentes + Estructura carpetas
2. **Layout base:** Header + Footer (aparecen en todas las páginas)
3. **Home sección por sección** (en el orden numérico)
4. **Páginas placeholder** (nosotros, servicios, etc.)
5. **Responsive testing** en cada breakpoint
6. **Últimos ajustes** y limpieza de código

---

# 💬 COMUNICACIÓN

Si tenés dudas sobre:
- **Estructura o layout:** Preguntá antes de asumir
- **Copy:** Usá EXACTAMENTE lo que está acá
- **Estilos:** Preguntá si algo no está claro
- **Dependencias:** NO instales nada extra sin consultar
- **Decisiones técnicas:** Preferí simplicidad > complejidad

**Prohibido "improvisar" agregando cosas que no están en este documento.**

---

**Fin del documento — Fase 1**  
**Cuando termines, avisá para revisar y pasar a Fase 2 (componentes UI y refinamiento).**
