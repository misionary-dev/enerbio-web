# EnerBio Design System

## Dirección

Sitio institucional técnico y territorial. La estructura presenta primero la propuesta energética, luego evidencia mediante métricas, capacidades y proyectos, y cierra con una consulta concreta.

## Color

- Verde oscuro `#2D5016`: títulos, botones principales y fondos de marca.
- Verde acento `#7CB342`: acentos, estados hover y palabra rotativa.
- Verde claro `#A8D5A8`: texto secundario sobre fondos oscuros.
- Azul gris `#385A66`: unidad Ambiental y fondos alternativos.
- Gris texto `#333333`: cuerpo de texto.
- Gris claro `#F8F8F8`: fondos secundarios.
- Blanco `#FFFFFF`: fondos y texto sobre color.

No se usa negro puro.

## Tipografía

- Montserrat, pesos 400, 600 y 700: títulos y cifras.
- Inter, pesos 400, 500, 600 y 700: cuerpo, navegación y controles.
- H1 responsive entre 36 y 72 px.
- H2 responsive entre 36 y 48 px.
- Cuerpo principal entre 16 y 20 px con interlineado amplio.

## Layout

- Container principal: `max-w-7xl` con padding horizontal responsive.
- Secciones principales: 96 px vertical en mobile y 128 px en desktop.
- Cards: radio de 16 px y sombras suaves.
- Botones: formato pill, altura táctil mínima de 48 px.
- Breakpoints mobile-first de Tailwind; grillas pasan de una columna a dos o cuatro según el contenido.

## Componentes

- Header: barra de contacto, navegación principal sticky y sidebar mobile.
- Button: variantes primary, outline y accent.
- Card: superficie blanca redondeada reutilizable.
- Badge: etiqueta verde para categorías destacadas.
- PlaceholderPage: Header y Footer compartidos con estado de construcción.

## Movimiento

Solo existen dos animaciones:

- Rotación con fade de la palabra final del Hero cada tres segundos.
- Desplazamiento horizontal continuo de empresas durante cuarenta segundos, con pausa al hover.

Ambas se desactivan con `prefers-reduced-motion`.

## Activos Pendientes

Las imágenes de proyectos, la imagen de Sobre Nosotros, la imagen de Enerbio Ambiental y los logos de clientes permanecen como placeholders hasta Fase 2. El Hero y el logo institucional consumen los activos confirmados del CDN de EnerBio.
