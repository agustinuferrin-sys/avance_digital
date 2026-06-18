export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  nombre: string;
  categoría: string;
  cliente: string;
  año: string;
  imagen: string; // portada
  resumen: string; // bajada corta
  desafio: string;
  solucion: string;
  resultados: ProjectMetric[];
  servicios: string[];
  galeria: string[];
}

// NOTA: contenido e imágenes son placeholder. Reemplazar por casos reales.
export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'campana-lanzamiento',
    nombre: 'Campaña Lanzamiento',
    categoría: 'Publicidad Paga',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: 'https://picsum.photos/seed/p1/900/1200',
    resumen: 'Lanzamiento de producto con foco en performance y adquisición.',
    desafio: 'Presentar un producto nuevo en un mercado saturado y conseguir tracción medible en las primeras semanas.',
    solucion: 'Estructura de campañas por etapa del funnel, creatividades testeadas en lotes y optimización diaria sobre las métricas que mueven la aguja.',
    resultados: [
      { label: 'ROAS', value: '4.2x' },
      { label: 'CPA', value: '-38%' },
      { label: 'Alcance', value: '1.2M' },
    ],
    servicios: ['Estrategia de medios', 'Creatividades', 'Optimización'],
    galeria: ['https://picsum.photos/seed/p1a/1200/800', 'https://picsum.photos/seed/p1b/1200/800', 'https://picsum.photos/seed/p1c/1200/800'],
  },
  {
    id: 'p2',
    slug: 'rebranding-total',
    nombre: 'Rebranding Total',
    categoría: 'Branding',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: 'https://picsum.photos/seed/p2/900/1200',
    resumen: 'Reconstrucción completa de la identidad de marca.',
    desafio: 'Una marca con buen producto pero sin identidad consistente ni sistema visual aplicable.',
    solucion: 'Plataforma de marca, sistema visual modular y guía de aplicación para que el equipo produzca sin perder coherencia.',
    resultados: [
      { label: 'Recordación', value: '+61%' },
      { label: 'Consistencia', value: '100%' },
      { label: 'Piezas', value: '40+' },
    ],
    servicios: ['Identidad visual', 'Manual de marca', 'Sistema de diseño'],
    galeria: ['https://picsum.photos/seed/p2a/1200/800', 'https://picsum.photos/seed/p2b/1200/800', 'https://picsum.photos/seed/p2c/1200/800'],
  },
  {
    id: 'p3',
    slug: 'cobertura-evento',
    nombre: 'Cobertura Evento',
    categoría: 'Producción Audiovisual',
    cliente: 'Cliente Demo',
    año: '2024',
    imagen: 'https://picsum.photos/seed/p3/900/1200',
    resumen: 'Cobertura audiovisual integral de un evento de marca.',
    desafio: 'Capturar un evento de un día y convertirlo en contenido para sostener semanas de comunicación.',
    solucion: 'Plan de captura multicámara, guion de piezas y edición pensada para distintos formatos y plataformas.',
    resultados: [
      { label: 'Piezas', value: '25' },
      { label: 'Views', value: '480K' },
      { label: 'Engagement', value: '+72%' },
    ],
    servicios: ['Dirección', 'Producción', 'Edición'],
    galeria: ['https://picsum.photos/seed/p3a/1200/800', 'https://picsum.photos/seed/p3b/1200/800', 'https://picsum.photos/seed/p3c/1200/800'],
  },
  {
    id: 'p5',
    slug: 'grilla-mensual',
    nombre: 'Grilla Mensual',
    categoría: 'Social Media Management',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: 'https://picsum.photos/seed/p5/900/1200',
    resumen: 'Gestión integral de redes con grilla de contenido mensual.',
    desafio: 'Una cuenta sin línea editorial clara y con publicación irregular.',
    solucion: 'Línea editorial, calendario mensual y un flujo de producción y aprobación que mantiene el ritmo sin fricción.',
    resultados: [
      { label: 'Seguidores', value: '+45%' },
      { label: 'Alcance', value: '+90%' },
      { label: 'Constancia', value: 'x4' },
    ],
    servicios: ['Estrategia de contenido', 'Diseño', 'Community management'],
    galeria: ['https://picsum.photos/seed/p5a/1200/800', 'https://picsum.photos/seed/p5b/1200/800', 'https://picsum.photos/seed/p5c/1200/800'],
  },
  {
    id: 'p6',
    slug: 'sesion-producto',
    nombre: 'Sesión Producto',
    categoría: 'Producción Audiovisual',
    cliente: 'Cliente Demo',
    año: '2024',
    imagen: 'https://picsum.photos/seed/p6/900/1200',
    resumen: 'Sesión de fotografía y video de producto.',
    desafio: 'Mostrar el producto con un nivel de terminación acorde a una marca premium.',
    solucion: 'Dirección de arte, set controlado y un banco de imágenes y clips listos para campaña y catálogo.',
    resultados: [
      { label: 'Assets', value: '60+' },
      { label: 'CTR', value: '+28%' },
      { label: 'Usos', value: 'Multi' },
    ],
    servicios: ['Dirección de arte', 'Fotografía', 'Video'],
    galeria: ['https://picsum.photos/seed/p6a/1200/800', 'https://picsum.photos/seed/p6b/1200/800', 'https://picsum.photos/seed/p6c/1200/800'],
  },
  {
    id: 'p7',
    slug: 'identidad-visual',
    nombre: 'Identidad Visual',
    categoría: 'Diseño Gráfico',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: 'https://picsum.photos/seed/p7/900/1200',
    resumen: 'Sistema de identidad visual para una marca emergente.',
    desafio: 'Arrancar de cero una identidad que se banque crecer con la marca.',
    solucion: 'Logotipo, paleta, tipografía y un set de aplicaciones base con criterios claros de uso.',
    resultados: [
      { label: 'Aplicaciones', value: '30+' },
      { label: 'Aprobación', value: '1 ronda' },
      { label: 'Escalable', value: 'Sí' },
    ],
    servicios: ['Logotipo', 'Sistema visual', 'Aplicaciones'],
    galeria: ['https://picsum.photos/seed/p7a/1200/800', 'https://picsum.photos/seed/p7b/1200/800', 'https://picsum.photos/seed/p7c/1200/800'],
  },
  {
    id: 'p8',
    slug: 'ads-conversion',
    nombre: 'Ads Conversion',
    categoría: 'Publicidad Paga',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: 'https://picsum.photos/seed/p8/900/1200',
    resumen: 'Campañas de conversión con foco en eficiencia.',
    desafio: 'Bajar el costo por resultado sin resignar volumen.',
    solucion: 'Reestructuración de campañas, limpieza de audiencias y un ciclo de testeo creativo sostenido.',
    resultados: [
      { label: 'CPA', value: '-44%' },
      { label: 'Conversiones', value: '+120%' },
      { label: 'ROAS', value: '5.1x' },
    ],
    servicios: ['Performance', 'Testeo creativo', 'Analítica'],
    galeria: ['https://picsum.photos/seed/p8a/1200/800', 'https://picsum.photos/seed/p8b/1200/800', 'https://picsum.photos/seed/p8c/1200/800'],
  },
  {
    id: 'p9',
    slug: 'shorts-reels',
    nombre: 'Shorts & Reels',
    categoría: 'Content Creator',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: 'https://picsum.photos/seed/p9/900/1200',
    resumen: 'Contenido vertical de alto volumen para redes.',
    desafio: 'Sostener un ritmo alto de contenido vertical sin que baje la calidad.',
    solucion: 'Formatos repetibles, guiones ágiles y un pipeline de edición pensado para producir en serie.',
    resultados: [
      { label: 'Reels/mes', value: '20' },
      { label: 'Views', value: '2.3M' },
      { label: 'Guardados', value: '+85%' },
    ],
    servicios: ['Guion', 'Producción', 'Edición vertical'],
    galeria: ['https://picsum.photos/seed/p9a/1200/800', 'https://picsum.photos/seed/p9b/1200/800', 'https://picsum.photos/seed/p9c/1200/800'],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
