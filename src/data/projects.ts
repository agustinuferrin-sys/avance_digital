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

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'campana-lanzamiento',
    nombre: 'Campaña Lanzamiento',
    categoría: 'Publicidad Paga',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: '/images/projects/Proyecto 1.webp',
    resumen: 'Lanzamiento de producto con foco en performance y adquisición.',
    desafio: 'Presentar un producto nuevo en un mercado saturado y conseguir tracción medible en las primeras semanas.',
    solucion: 'Estructura de campañas por etapa del funnel, creatividades testeadas en lotes y optimización diaria sobre las métricas que mueven la aguja.',
    resultados: [
      { label: 'ROAS', value: '4.2x' },
      { label: 'CPA', value: '-38%' },
      { label: 'Alcance', value: '1.2M' },
    ],
    servicios: ['Estrategia de medios', 'Creatividades', 'Optimización'],
    galeria: ['/images/projects/Proyecto 1.webp'],
  },
  {
    id: 'p2',
    slug: 'rebranding-total',
    nombre: 'Rebranding Total',
    categoría: 'Branding',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: '/images/projects/Proyecto 2.webp',
    resumen: 'Reconstrucción completa de la identidad de marca.',
    desafio: 'Una marca con buen producto pero sin identidad consistente ni sistema visual aplicable.',
    solucion: 'Plataforma de marca, sistema visual modular y guía de aplicación para que el equipo produzca sin perder coherencia.',
    resultados: [
      { label: 'Recordación', value: '+61%' },
      { label: 'Consistencia', value: '100%' },
      { label: 'Piezas', value: '40+' },
    ],
    servicios: ['Identidad visual', 'Manual de marca', 'Sistema de diseño'],
    galeria: ['/images/projects/Proyecto 2.webp'],
  },
  {
    id: 'p3',
    slug: 'cobertura-evento',
    nombre: 'Cobertura Evento',
    categoría: 'Producción Audiovisual',
    cliente: 'Cliente Demo',
    año: '2024',
    imagen: '/images/projects/Proyecto 3.webp',
    resumen: 'Cobertura audiovisual integral de un evento de marca.',
    desafio: 'Capturar un evento de un día y convertirlo en contenido para sostener semanas de comunicación.',
    solucion: 'Plan de captura multicámara, guion de piezas y edición pensada para distintos formatos y plataformas.',
    resultados: [
      { label: 'Piezas', value: '25' },
      { label: 'Views', value: '480K' },
      { label: 'Engagement', value: '+72%' },
    ],
    servicios: ['Dirección', 'Producción', 'Edición'],
    galeria: ['/images/projects/Proyecto 3.webp'],
  },
  {
    id: 'p4',
    slug: 'grilla-mensual',
    nombre: 'Grilla Mensual',
    categoría: 'Social Media Management',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: '/images/projects/Proyecto 4.webp',
    resumen: 'Gestión integral de redes con grilla de contenido mensual.',
    desafio: 'Una cuenta sin línea editorial clara y con publicación irregular.',
    solucion: 'Línea editorial, calendario mensual y un flujo de producción y aprobación que mantiene el ritmo sin fricción.',
    resultados: [
      { label: 'Seguidores', value: '+45%' },
      { label: 'Alcance', value: '+90%' },
      { label: 'Constancia', value: 'x4' },
    ],
    servicios: ['Estrategia de contenido', 'Diseño', 'Community management'],
    galeria: ['/images/projects/Proyecto 4.webp'],
  },
  {
    id: 'p5',
    slug: 'sesion-producto',
    nombre: 'Sesión Producto',
    categoría: 'Producción Audiovisual',
    cliente: 'Cliente Demo',
    año: '2024',
    imagen: '/images/projects/Proyecto 5.webp',
    resumen: 'Sesión de fotografía y video de producto.',
    desafio: 'Mostrar el producto con un nivel de terminación acorde a una marca premium.',
    solucion: 'Dirección de arte, set controlado y un banco de imágenes y clips listos para campaña y catálogo.',
    resultados: [
      { label: 'Assets', value: '60+' },
      { label: 'CTR', value: '+28%' },
      { label: 'Usos', value: 'Multi' },
    ],
    servicios: ['Dirección de arte', 'Fotografía', 'Video'],
    galeria: ['/images/projects/Proyecto 5.webp'],
  },
  {
    id: 'p6',
    slug: 'identidad-visual',
    nombre: 'Identidad Visual',
    categoría: 'Diseño Gráfico',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: '/images/projects/Proyecto 6.webp',
    resumen: 'Sistema de identidad visual para una marca emergente.',
    desafio: 'Arrancar de cero una identidad que se banque crecer con la marca.',
    solucion: 'Logotipo, paleta, tipografía y un set de aplicaciones base con criterios claros de uso.',
    resultados: [
      { label: 'Aplicaciones', value: '30+' },
      { label: 'Aprobación', value: '1 ronda' },
      { label: 'Escalable', value: 'Sí' },
    ],
    servicios: ['Logotipo', 'Sistema visual', 'Aplicaciones'],
    galeria: ['/images/projects/Proyecto 6.webp'],
  },
  {
    id: 'p7',
    slug: 'ads-conversion',
    nombre: 'Ads Conversion',
    categoría: 'Publicidad Paga',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: '/images/projects/Proyecto 7.webp',
    resumen: 'Campañas de conversión con foco en eficiencia.',
    desafio: 'Bajar el costo por resultado sin resignar volumen.',
    solucion: 'Reestructuración de campañas, limpieza de audiencias y un ciclo de testeo creativo sostenido.',
    resultados: [
      { label: 'CPA', value: '-44%' },
      { label: 'Conversiones', value: '+120%' },
      { label: 'ROAS', value: '5.1x' },
    ],
    servicios: ['Performance', 'Testeo creativo', 'Analítica'],
    galeria: ['/images/projects/Proyecto 7.webp'],
  },
  {
    id: 'p8',
    slug: 'shorts-reels',
    nombre: 'Shorts & Reels',
    categoría: 'Content Creator',
    cliente: 'Cliente Demo',
    año: '2025',
    imagen: '/images/projects/Proyecto 8.webp',
    resumen: 'Contenido vertical de alto volumen para redes.',
    desafio: 'Sostener un ritmo alto de contenido vertical sin que baje la calidad.',
    solucion: 'Formatos repetibles, guiones ágiles y un pipeline de edición pensado para producir en serie.',
    resultados: [
      { label: 'Reels/mes', value: '20' },
      { label: 'Views', value: '2.3M' },
      { label: 'Guardados', value: '+85%' },
    ],
    servicios: ['Guion', 'Producción', 'Edición vertical'],
    galeria: ['/images/projects/Proyecto 8.webp'],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
