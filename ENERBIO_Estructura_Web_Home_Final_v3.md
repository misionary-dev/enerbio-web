# ENERBIO — ESTRUCTURA WEB COMPLETA (v3.0 FINAL)

**Documento maestro del rediseño web de EnerBio SRL**  
**Versión:** 3.0 | Septiembre 2026  
**Estado:** Estructura del Home completa

---

## 📚 ÍNDICE

1. [Reglas Generales de Diseño](#reglas-generales-de-diseño)
2. [Sistema de Colores](#sistema-de-colores)
3. [Tipografía](#tipografía)
4. [Orden Oficial de Secciones](#orden-oficial-de-secciones)
5. [SECCIONES DEL HOME](#secciones-del-home)
   - [1. Header](#1-header)
   - [2. Hero Section](#2-hero-section)
   - [3. Métricas Destacadas](#3-métricas-destacadas-bloque-puente)
   - [4. Sobre Nosotros](#4-sobre-nosotros)
   - [5. Propuesta de Valor](#5-propuesta-de-valor)
   - [6. Servicios (Ciclo Integral)](#6-servicios-ciclo-integral)
   - [7. Proyectos](#7-proyectos)
   - [8. Empresas que Confían](#8-empresas-que-confían)
   - [9. Enerbio Ambiental](#9-enerbio-ambiental)
   - [10. Formulario de Contacto](#10-formulario-de-contacto)
   - [11. Footer](#11-footer)
6. [Información Pendiente de Confirmar](#información-pendiente-de-confirmar)
7. [Próximos Pasos](#próximos-pasos)

---

## REGLAS GENERALES DE DISEÑO

- **Animaciones:** SIN animaciones de entrada tipo cine (fade-in, slide-up al scroll, contadores incrementales)
- **Excepciones justificadas:** 
  - Rotación de palabra final en el Hero (única animación de contenido)
  - Carousel infinito de logos en "Empresas que confían" (animación funcional)
- **Hovers de botones:** Se definirán después con librerías de componentes
- **Bordes:** Todos los botones y cards con bordes redondeados
- **Enfoque:** Estilos básicos primero, refinamiento después

---

## SISTEMA DE COLORES

| Color | Hex | Uso |
|-------|-----|-----|
| Verde oscuro | `#2D5016` | Títulos, botones primarios, fondos oscuros |
| Verde acento | `#7CB342` | Hovers, acentos, palabra rotativa Hero |
| Verde claro | `#A8D5A8` | Eyebrows sobre fondos oscuros |
| Azul gris | `#385A66` | Enerbio Ambiental, títulos alternativos |
| Blanco | `#FFFFFF` | Fondos claros, textos sobre oscuro |
| Gris texto | `#333333` | Párrafos (NUNCA #000000) |
| Gris claro | `#F8F8F8` | Fondos secundarios |

---

## TIPOGRAFÍA

- **Títulos:** Montserrat Bold
- **Cuerpo:** Inter Regular
- **Jerarquía:**
  - H1 (Hero): 48-72px
  - H2 (Secciones): 36-42px
  - H3 (Sub-secciones): 24-28px
  - Body: 16-18px

---

## ORDEN OFICIAL DE SECCIONES

| # | Sección | Fondo |
|---|---------|-------|
| 1 | Header | Verde oscuro (barra superior) + Blanco (nav) |
| 2 | Hero Section | Imagen con overlay verde oscuro |
| 3 | Métricas Destacadas | Blanco (puente) |
| 4 | Sobre Nosotros | Blanco/Gris claro |
| 5 | Propuesta de Valor | Gradiente verde+azul gris |
| 6 | Servicios | Blanco |
| 7 | Proyectos | Blanco/Gris claro |
| 8 | Empresas que confían | Blanco/Gris claro |
| 9 | Enerbio Ambiental | Azul gris (#385A66) |
| 10 | Formulario Contacto | Blanco |
| 11 | Footer | Verde oscuro (#2D5016) |

---

# SECCIONES DEL HOME

---

## 1. HEADER

### PRIMER BLOQUE (barra superior)
- **Fondo:** Verde EnerBio (#2D5016)
- **Contenido:** Alineado a la derecha
  - Ícono correo + `info@enerbio.com.ar`
  - Ícono teléfono + `+54-3584-199-465`
- **Estilo:** Letras blancas en negrita

### SEGUNDO BLOQUE (barra principal)
- **Fondo:** Blanco
- **Altura:** ~80px

**Izquierda:** Logo EnerBio  
URL: `https://cdn-enerbio.misionary.com.ar/Iconos/Logo-Enerbio.webp`

**Derecha:** Navegación:
- Inicio
- Nosotros
- Servicios
- Proyectos
- Enerbio Ambiental
- Trabajá con nosotros
- **Botón:** Contactanos (redondeado, verde EnerBio)

---

## 2. HERO SECTION

### Estructura Visual
Fondo con imagen de operaciones EnerBio + overlay verde oscuro sutil.

**Imágenes disponibles:**
- `https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb.webp`
- `https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb2.webp`
- `https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb3.webp`
- `https://cdn-enerbio.misionary.com.ar/Banners/BannerWeb4.webp`

### Eyebrow
> "Desde el corazón del polo forestal más importante de Argentina"

**Estilo:** 14-16px, Inter Regular, verde claro (#A8D5A8) o blanco al 80% opacity.

### Título Principal (con rotación de palabra final)
> "Energía renovable para tu **[industria / proceso / operación / negocio]**"

- Frase fija: "Energía renovable para tu"
- Palabra rotativa (fade in/out): industria → proceso → operación → negocio
- Montserrat Bold, 56-72px desktop / 36-48px mobile
- Color: Blanco (#FFFFFF)
- Palabra rotativa en verde acento (#7CB342)

### Bajada (280 caracteres)
> "Desarrollamos, financiamos, construimos y operamos centrales de cogeneración a partir de biomasa, biogás y solar. Potencia firme los 365 días del año, integrada a tu proceso industrial. Del residuo al recurso, del análisis de proyecto a la operación 24/7."

**Estilo:** Inter Regular, 18-20px, blanco al 90% opacity, line-height 1.6, max-width 640px.

### CTAs (2 botones redondeados)

**PRIMARIO:**
- Texto: **"Analicemos tu proyecto"**
- Acción: Link a `#contacto`
- Estilo: Fondo verde EnerBio, texto blanco

**SECUNDARIO:**
- Texto: **"Ver nuestros proyectos"**
- Acción: Link a página de proyectos
- Estilo: Outline blanco 2px, texto blanco, fondo transparente

---

## 3. MÉTRICAS DESTACADAS (bloque puente)

### Ubicación y comportamiento
Card horizontal flotante que actúa como **puente visual** entre Hero y Sobre Nosotros.
- Mitad superior: incrustada dentro del Hero
- Mitad inferior: sobre el fondo blanco de Sobre Nosotros
- Efecto de "solapamiento" con margin-top negativo (~-90px)

### Estilo de la card
- Fondo: Blanco puro (#FFFFFF)
- Border-radius: 16-24px
- Sombra: 0 20px 60px rgba(0,0,0,0.15)
- Padding: 40-48px
- Ancho: ~80% del viewport (max 1200px)

### Contenido — 4 columnas horizontales

| Número | Etiqueta |
|--------|----------|
| **+25** | PROFESIONALES |
| **>30 MW** | INSTALADOS Y EN EJECUCIÓN |
| **2** | PAÍSES — ARGENTINA Y PARAGUAY |
| **2022** | O&M PROPIO EN PLANTA DESDE |

**Tipografía:**
- Número: Montserrat Bold, 48-56px, verde oscuro (#2D5016)
- Etiqueta: Inter SemiBold, 12-13px, mayúsculas, gris (#666666)

Separadores verticales sutiles entre columnas (1px, #E5E5E5).  
En mobile: se apilan verticalmente.

---

## 4. SOBRE NOSOTROS

### Layout
Dos columnas 50/50 (desktop) — **imagen a la izquierda, contenido a la derecha**.  
En mobile: stack.

**Fondo:** Blanco (#FFFFFF) o gris claro (#F8F8F8).  
**Padding:** 80-120px desktop / 40-60px mobile.

### Columna Izquierda — Imagen
Foto de planta EnerBio en funcionamiento (dron o perspectiva amplia).

**Especificaciones:**
- Formato: Vertical o cuadrado (4:5 o 1:1)
- Border-radius: 16-24px
- Alt text: "Central de energía renovable EnerBio en operación - Misiones, Argentina"

### Columna Derecha — Contenido

**Eyebrow:** "Sobre Nosotros"

**Título:**
> "Desarrollamos energía renovable cerca del recurso, cerca de tu proyecto"

**Párrafo 1 — Identidad + Origen (285 caracteres):**
> "Somos una empresa de ingeniería energética nacida en Leandro N. Alem, Misiones —el polo forestal más importante de Argentina. Desde aquí acompañamos a la industria en su transición hacia fuentes renovables, con equipos técnicos formados en el territorio y presencia en Argentina y Paraguay."

**Párrafo 2 — Filosofía + Diferencial (297 caracteres):**
> "Creemos que los proyectos energéticos se desarrollan mejor cerca del recurso y cerca del cliente. Trabajamos con biomasa forestal, biogás y solar, transformando residuos industriales en energía firme y sostenible: potencia disponible los 365 días del año, integrada a cada proceso productivo."

**Botón:**
- Texto: **"Conocé nuestra historia"**
- Acción: Link a página completa Sobre Nosotros
- Estilo: Fondo verde EnerBio, texto blanco, ícono flecha (→)

---

## 5. PROPUESTA DE VALOR

### Layout
Sección full-width con dos bloques:
1. Superior: Eyebrow + Título + Bajada centrada
2. Inferior: Grid de 4 cards horizontales

**Fondo:** Gradiente diagonal verde + azul gris
```css
background: linear-gradient(135deg, #2D5016 0%, #385A66 100%);
```

**Padding:** 100-140px desktop / 60-80px mobile.

### Bloque Superior

**Eyebrow:** "Por qué EnerBio"

**Título:**
> "Cuatro razones que nos hacen tu partner energético"

**Bajada (130 caracteres):**
> "No solo construimos centrales de energía renovable: las desarrollamos, financiamos, operamos y las hacemos parte de tu industria."

### 4 Cards de Pilares

**Grid:** 4 columnas desktop / 2x2 tablet / 1 columna mobile.

**Estilo de cards:**
- Fondo: Blanco puro o transparencia 8-10% con borde
- Border-radius: 16-20px
- Padding: 32-40px
- Ícono superior: 64x64px, verde acento (#7CB342)

**PILAR 1** — ⚡ **Potencia firme, 365 días al año**  
> "Con biomasa y biogás generamos energía continua, disponible todo el año, independiente del clima o la estación."

**PILAR 2** — 📍 **Cerca del recurso, cerca del proyecto**  
> "Desarrollamos proyectos en un radio de 30-50 km del recurso, con equipos técnicos que conocen el territorio y la industria regional."

**PILAR 3** — 🔄 **Del análisis a la operación 24/7**  
> "Cubrimos todo el ciclo del proyecto: análisis, ingeniería, montaje, puesta en marcha, operación y mantenimiento continuo."

**PILAR 4** — ♻️ **Del residuo al recurso**  
> "Transformamos subproductos industriales en energía útil, reduciendo costos, emisiones y dependencia de combustibles fósiles."

---

## 6. SERVICIOS (CICLO INTEGRAL)

### Layout
Sección con timeline visual de 4 pasos secuenciales + banda transversal para el 5to servicio (Ambiental).

**Fondo:** Blanco o gris claro (#F8F8F8).  
**Padding:** 100-140px desktop / 60-80px mobile.

### Bloque Superior

**Eyebrow:** "Nuestros Servicios"

**Título:**
> "Un ciclo integral, un solo partner energético"

**Bajada (188 caracteres):**
> "Acompañamos cada proyecto energético en todas sus etapas, desde la evaluación inicial hasta la operación diaria, con un equipo multidisciplinario que integra ingeniería, ejecución y sustentabilidad."

### Timeline horizontal (4 nodos conectados por flechas)

**Estilo de cada nodo:**
- Fondo: Blanco
- Border-radius: 16-20px
- Border top: 4px verde acento
- Padding: 32-40px

**Cada nodo contiene:** Número (01-04) + Ícono + Título + Descripción corta

**NODO 01 — Análisis de Proyectos** 📊  
> "Evaluamos viabilidad técnica, económica y legal para que cada proyecto arranque sobre bases sólidas y rentables."

**NODO 02 — Ingeniería** ⚙️  
> "Diseñamos la solución técnica: ingeniería básica, de detalle y re-ingeniería adaptada a cada industria."

**NODO 03 — Montajes y Puesta en Marcha** 🔧  
> "Ejecutamos y supervisamos el montaje electromecánico, la instrumentación, control y las obras civiles del proyecto."

**NODO 04 — Operación y Mantenimiento** 🔄  
> "Operamos y mantenemos las plantas 24/7, con programas preventivos y correctivos que aseguran continuidad."

### Bloque Ambiental (transversal)

Banda horizontal debajo del timeline con estilo diferenciado.

**Fondo:** Azul gris (#385A66)  
**Badge:** "TRANSVERSAL A TODO EL CICLO"  
**Número:** 05  
**Título:** "Ambiental y Sustentabilidad" 🌱

**Descripción (138 caracteres):**
> "Impacto ambiental, huella de carbono, certificaciones IREC y bonos de carbono. Presente en cada etapa del proyecto para operar responsablemente."

### CTA Final
- Texto: **"Conocé cada servicio en detalle"**
- Acción: Link a página general de servicios
- Estilo: Verde EnerBio, redondeado, ícono flecha

---

## 7. PROYECTOS

### Layout
Grid de 5 cards de proyectos + CTA final.

**Fondo:** Blanco o gris claro.  
**Padding:** 100-140px desktop / 60-80px mobile.

### Bloque Superior

**Eyebrow:** "Nuestros Proyectos"

**Título:**
> "Casos reales, resultados concretos"

**Bajada (207 caracteres):**
> "Desde Misiones hasta Paraguay, acompañamos a industrias reales en su transición energética. Cada proyecto combina ingeniería, ejecución y operación adaptadas a los desafíos específicos del cliente."

### Grid de Cards (3x2 desktop / 2 tablet / 1 mobile)

**Estructura de cada card:**
- Imagen del proyecto (aspect 4:3)
- Badge de tecnología (Cogeneración / Solar / Biomasa)
- Nombre del proyecto
- Ubicación (📍)
- Descripción corta
- Mini-pills: Capacidad + Estado
- Link "Ver detalle →"

### Contenido de las 5 Cards

**CARD 1 — Alcogreen** 🇵🇾  
- Badge: COGENERACIÓN
- Ubicación: 📍 Escobar, Paraguarí — Paraguay
- Descripción: *"Central de cogeneración integrada a planta de etanol de maíz. Supervisión de montaje electromecánico y puesta en marcha."*
- Pills: **10 MW** · **En ejecución**

**CARD 2 — Matilde Exporta**  
- Badge: SOLAR FOTOVOLTAICO
- Ubicación: 📍 Estación Matilde, Santa Fe
- Descripción: *"Parque solar diseñado e implementado para impulsar un molino harinero de 600 toneladas diarias con energía renovable."*
- Pills: **500 kW** · **Operativa**

**CARD 3 — CT SEISMEGA — UNITAN**  
- Badge: COGENERACIÓN
- Ubicación: 📍 Puerto Tirol, Chaco
- Descripción: *"Coordinación integral de operación y mantenimiento de central de cogeneración industrial de gran escala."*
- Pills: **9 MW** · **O&M continuo**

**CARD 4 — CT EDG Bioenergía**  
- Badge: BIOMASA FORESTAL
- Ubicación: 📍 Santiago de Liniers, Misiones
- Descripción: *"Precomisionado, comisionado y puesta en marcha de central de cogeneración con biomasa forestal integrada a industria."*
- Pills: **3 MW** · **Operativa**

**CARD 5 — CT Toll Bioenergía**  
- Badge: BIOMASA FORESTAL
- Ubicación: 📍 Eldorado, Misiones
- Descripción: *"Montaje electromecánico completo y puesta en marcha de central de cogeneración con biomasa forestal en el corazón del NEA."*
- Pills: **3 MW** · **Operativa**

### CTA Final
- Texto: **"Ver todos nuestros proyectos"**
- Acción: Link a página completa de Proyectos
- Estilo: Verde EnerBio, redondeado, ícono flecha

---

## 8. EMPRESAS QUE CONFÍAN

### Layout
Sección compacta con eyebrow + título + bajada + carousel infinito.

**Fondo:** Blanco o gris claro.  
**Padding:** 80-100px desktop / 50-70px mobile.

### Bloque Superior

**Eyebrow:** "Empresas que confían"

**Título:**
> "Industrias que ya eligieron nuestra energía"

**Bajada (138 caracteres):**
> "Desde molinos y aserraderos hasta plantas de etanol, acompañamos a empresas de distintos sectores en su transición energética."

### Carousel Infinito de Logos

**Comportamiento:**
- Loop continuo horizontal (derecha → izquierda)
- Velocidad: ~40-60 segundos por vuelta completa
- Pausa on-hover
- Sin controles visibles

**Logos iniciales (5):**
1. **Alcogreen** (Paraguay)
2. **Matilde Exporta** (Santa Fe)
3. **UNITAN** (Chaco)
4. **EDG** (Misiones)
5. **Toll** (Misiones)

**Estilo de logos:**
- Altura fija: 60-80px desktop / 40-60px mobile
- Escala de grises con hover a color completo
- Separación entre logos: 60-100px

---

## 9. ENERBIO AMBIENTAL

### Layout
Formato "hero secundario" destacado. Dos columnas 60/40 — contenido izquierda, imagen derecha.

**Fondo:** Azul gris (#385A66) dominante, para diferenciar visualmente.  
**Alternativa:** Gradiente `linear-gradient(135deg, #385A66 0%, #2D5016 100%)`

**Padding:** 100-140px desktop / 60-80px mobile.

### Columna Izquierda — Contenido

**Badge:** "UNIDAD DE NEGOCIO" (fondo verde acento #7CB342)

**Título:**
> "Enerbio Ambiental"

**Subtítulo:**
> "Consultoría ambiental integral para empresas que buscan operar con responsabilidad y visión sostenible."

**Descripción (275 caracteres):**
> "Somos la unidad de negocio de EnerBio especializada en soluciones ambientales. Acompañamos a empresas de todos los sectores con estudios de impacto, sistemas de gestión ambiental, cálculo de huella de carbono y comercialización de bonos, incluyendo proyectos AFOLU."

### Los 3 Pilares de Servicio

Bloques horizontales con border-left verde acento:

**🌿 Consultoría y Evaluaciones Ambientales**  
> Estudios de impacto, prefactibilidades y auditorías

**☀️ Soluciones en Energías Renovables**  
> Biomasa, biogás y sistemas fotovoltaicos

**📊 Certificaciones y Huella de Carbono**  
> Bonos de carbono, IREC y proyectos AFOLU

### CTA Principal
- Texto: **"Descubrí Enerbio Ambiental"**
- Acción: Link a página interna dedicada
- Estilo: Verde acento (#7CB342), texto verde oscuro (#2D5016), redondeado

### Columna Derecha — Imagen
Imagen grande de naturaleza/proyecto ambiental + badge flotante opcional con dato de credibilidad.

**Badge flotante sugerido:**
> "+6 proyectos EIA ejecutados con clientes como Teyma-Abengoa"

---

## 10. FORMULARIO DE CONTACTO

### Layout
Dos columnas: contenido izquierda (40%), formulario derecha (60%).

**Fondo:** Blanco o gris claro.  
**Padding:** 100-140px desktop / 60-80px mobile.

### Columna Izquierda — Contenido

**Eyebrow:** "Contacto"

**Título:**
> "Analicemos tu proyecto energético"

**Bajada (215 caracteres):**
> "Contanos sobre tu proyecto y un miembro de nuestro equipo te contactará para analizar la mejor solución energética o ambiental para tu industria. Respuesta en menos de 48 horas hábiles."

### Datos de Contacto Directo

```
📧  info@enerbio.com.ar
    Consultas generales

📞  +54 3584 199 465
    Lunes a Viernes 24hs

📍  Av. Belgrano 675
    Leandro N. Alem, Misiones
```

### Redes Sociales
- LinkedIn: enerbio-s-r-l-34753a254
- Instagram: @enerbiosrl

### Columna Derecha — Formulario

**Contenedor:**
- Fondo: Blanco
- Border-radius: 16-20px
- Sombra sutil
- Padding: 40-48px

**Campos (7):**

1. **Nombre completo** (obligatorio) — fila propia
2. **Email** (obligatorio) — 50%
3. **Teléfono** (obligatorio) — 50%
4. **Empresa** (obligatorio) — fila propia
5. **¿Qué servicio te interesa?** (obligatorio) — dropdown con opciones agrupadas:
   - *— Servicios Energéticos —*
     - Análisis de proyecto energético
     - Ingeniería
     - Montajes y puesta en marcha
     - Operación y mantenimiento
   - *— Enerbio Ambiental —*
     - Estudios de impacto ambiental
     - Huella de carbono
     - Certificaciones y bonos de carbono
     - Consultoría ambiental integral
   - *— Otros —*
     - No estoy seguro / Consulta general
6. **Mensaje** (opcional) — textarea 4-5 filas
7. **Aceptar términos** (obligatorio) — checkbox

**Botón:**
- Texto: **"Enviar consulta"**
- Ícono: flecha (→)
- Estilo: Verde oscuro (#2D5016), redondeado

**Mensaje de éxito:**
> "¡Gracias por contactarnos! Recibimos tu consulta y un miembro de nuestro equipo se pondrá en contacto en menos de 48 horas hábiles."

---

## 11. FOOTER

### Layout
Grid de 4 columnas + línea inferior legal.

**Fondo:** Verde oscuro (#2D5016)  
**Padding:** 60-80px desktop / 40-60px mobile.

### Columna 1: Marca + Descripción

**Logo:** EnerBio (versión blanca), 40-50px altura

**Tagline (140 caracteres):**
> "Desarrollamos energía renovable cerca del recurso, cerca del proyecto. Desde Misiones para Argentina y Paraguay."

**Redes sociales:** LinkedIn + Instagram (iconos)

### Columna 2: Navegación

- Inicio
- Nosotros
- Servicios
- Proyectos
- Enerbio Ambiental
- Trabajá con nosotros
- Contacto

### Columna 3: Servicios

- Análisis de Proyectos
- Ingeniería
- Montajes y Puesta en Marcha
- Operación y Mantenimiento
- Ambiental y Sustentabilidad

### Columna 4: Contacto

```
📍 Av. Belgrano 675
   N3315 Leandro N. Alem
   Misiones, Argentina

📧 info@enerbio.com.ar

📞 +54 3584 199 465
   Lunes a Viernes 24hs
```

### Bloque Legal Inferior

Línea separadora sutil (blanco 20% opacity).

**Izquierda:** © 2026 EnerBio SRL. Todos los derechos reservados.  
**Derecha:** Términos y Condiciones · Política de Privacidad

**Créditos opcionales:** "Sitio desarrollado por [Agencia A1]"

### Botón "Volver Arriba" (opcional)
- Sticky en esquina inferior derecha
- Círculo 40-48px verde acento
- Aparece después de 500px de scroll

---

---

**Documento maestro de estructura web | EnerBio SRL | Septiembre 2026 | v3.0**  
**Estado: Home completo — listo para presentar al cliente**
