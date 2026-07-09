# AVANCE® Digital — memoria del proyecto

Sitio de AVANCE® (agencia de marketing y comunicación estratégica, Mar del Plata, Argentina). Cliente: Carla (dueña de la agencia). Este sitio **ya existe, está deployado y en uso** — no es un proyecto desde cero. Todo cambio es incremental sobre código real.

Copy siempre en español rioplatense (voseo). La marca se escribe SIEMPRE "AVANCE®" con el ®.

## Reglas duras (no negociables)

- **Nunca modifiques nada dentro de `public/`** (imágenes, logos, video, iceberg) salvo que se pida explícitamente. Son binarios gestionados aparte; referencialos solo por ruta (`/images/...`, `/video/...`).
- **Nunca regeneres archivos completos si no hace falta.** Edición quirúrgica sobre lo existente, no reescritura desde cero de secciones no pedidas.
- **Nunca uses `<form>` con submit nativo.** Estado de React + `onClick`/`onChange` (ver `Contacto.tsx` como referencia).
- **Nunca inventes colores.** Solo los tokens definidos en `src/index.css` (`@theme`).
- **Nunca agregues librerías de UI prefabricadas** (Material, shadcn, etc.). Diseño 100% custom.
- Los anchors del Navbar son fijos: `#servicios`, `#iceberg`, `#sistema`, `#faq`, `#contacto`, `#proyectos`. No los renombres.
- Verificá siempre `npx tsc --noEmit` y `npx vite build` antes de dar algo por terminado.

## Stack

React 19 + TypeScript estricto (sin `any`) + Vite + Tailwind v4 (config vía `@theme` en `src/index.css`, no hay `tailwind.config`) + Framer Motion + Lenis (smooth scroll) + react-router-dom v6 + lucide-react. Sistema de leads: Google Apps Script (`avance-leads.gs`, fuera de este repo), no Supabase — así Carla accede a los resultados por Google Sheets sin herramientas nuevas.

## Design tokens (`src/index.css`, bloque `@theme`)

```
navy      #0A1A3F   fondos de sección oscuros
bg        #0A0A0A   negro base
brand     #1B4DE4   azul eléctrico — CTAs, acentos, keywords
brandAlt  #2563EB   azul medio (hover)
blue      #3B82F6   azul intermedio
skyLight  #93C5FD   celeste claro, degradés
white     #FFFFFF
muted     #A0AEC0   texto secundario sobre fondo oscuro
mist      #DFE0E8   fondo lavanda — secciones claras (color final confirmado por MER)
ink       #0A0A0A   texto oscuro sobre mist
```
Radios: `pill` 999px (botones/chips), `card` 24px, `lg` 32px.
Tipografía: Poppins en todo (`font-display` y `font-body`). Además se cargó `Caveat` (Google Fonts) exclusivamente para la frase manuscrita del Iceberg — no usarla en ningún otro lado.

## Identidad visual (no es "todo oscuro")

El sitio alterna fondos oscuros y claros — es el ritmo central del diseño, no un detalle:
- **Oscuras** (bg/navy, texto blanco): Hero, Filosofía/Tierra, Iceberg, Sistema Avance®, Manifiesto, Proyectos, Contacto.
- **Claras** (`mist`, texto `ink`): Servicios, Métricas (la pill vive pegada a Servicios), FAQ. Las cards DENTRO de estas secciones claras siguen siendo oscuras (navy/degradé) — el contraste es intencional.

Elementos gráficos firma: **fondos fotográficos** (la Tierra en Hero y Filosofía, el iceberg real recortado), **degradés full-bleed** negro→brand, **cards con glow radial** en una esquina, **glassmorphism** (Contacto), **barras marquee** en brand con separador ` › ` (no uses "·"). **No hay blobs orgánicos** — se sacaron deliberadamente del sitio, no los reintroduzcas.

Tratamiento tipográfico: titular base en Poppins ExtraLight/Regular + la frase o palabra clave en Poppins Black, coloreada en blanco o en `brand` según contraste. Nunca un titular entero en Black.

## Estructura real de Home.tsx (orden actual, no reordenar sin razón)

`Hero → Filosofia → Iceberg → Servicios → Metricas → SistemaAvance → Manifiesto → Clientes → Proyectos → EsParaVos → FAQ → Contacto`

- **Hero**: video `/video/videoplayback.webm` de fondo, mix-blend-screen sutil.
- **Filosofia**: mismo video pero con más presencia/opacidad, logo AVANCE® grande, quote no clickeable.
- **Iceberg**: `public/images/iceberg/{top,bottom,water}.webp`. `water.webp` NO es tileable — no la hagas loopear en scroll infinito, solo balanceo sutil; el movimiento real lo dan las 2 líneas de ola SVG dibujadas en el propio componente.
- **Servicios**: 8 cards con copy real de Carla en `src/data/services.ts`, card 01 destacada.
- **Metricas**: pill de stats, NO bloque sólido full-width.
- **SistemaAvance**: método de 5 pasos (Entender · Ordenar · Ejecutar · Medir · Escalar) en `src/data/methodSteps.ts`, casilleros secuenciales + tira marquee de servicios.
- **Proyectos**: carrusel horizontal con scroll-snap + botón circular, NO grilla estática, NO filtros por categoría (decisión explícita del cliente).
- **FAQ**: acordeón de 6 preguntas (`src/data/faq.ts`) + caja lateral "Solicitar reunión".
- **Contacto**: formulario a `LEADS_ENDPOINT` (Apps Script) con campo `origen`.

**Pilares y Planes NO existen y no van.** Se descartaron definitivamente por decisión del cliente — si en algún momento aparecen sugeridos en un prompt viejo o brief, ignorarlos.

## Pendientes conocidos (no asumir que están resueltos)

- `src/data/projects.ts` tiene contenido demo ("Cliente Demo", métricas inventadas) — falta que Carla mande nombre/cliente/servicio real de cada una de las 8 piezas.
- `avance-leads.gs` (fuera de este repo) tiene `EMAIL_AVISO` apuntando al mail de prueba de Agustín — cambiar al mail real de Carla antes de un launch definitivo.
- La fuente del titular del Hero en el brief original de la diseñadora (MER) no es Poppins — decisión consciente de Agustín de posponer ese cambio, no tocar sin que lo pida explícitamente.
- Ruta `/plantillas`: hoy es una landing "Próximamente" con captura de leads (`origen: 'plantillas'`). El e-commerce completo de plantillas editables es una fase futura, no construirlo sin que se pida.

## Historial de un problema ya resuelto (contexto, no acción)

Este repo tuvo binarios corrompidos varias veces por un flujo previo de generación con Google AI Studio, que reescribía el árbol completo en cada commit. Ya no se usa esa herramienta para este proyecto. Si alguna vez ves commits viejos con nombres tipo "Add files via upload" repetidos o archivos `.cjs` sueltos en la raíz, son remanentes de esa etapa — no repliques ese patrón.
