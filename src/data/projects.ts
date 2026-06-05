export interface Project {
  id: string;
  nombre: string;
  categoría: string;
  imagen: string;
}

export const projects: Project[] = [
  { id: 'p1', nombre: 'Campaña Lanzamiento', categoría: 'Publicidad Paga', imagen: 'https://picsum.photos/seed/p1/800/600' },
  { id: 'p2', nombre: 'Rebranding Total', categoría: 'Branding', imagen: 'https://picsum.photos/seed/p2/800/600' },
  { id: 'p3', nombre: 'Cobertura Evento', categoría: 'Producción Audiovisual', imagen: 'https://picsum.photos/seed/p3/800/600' },
  { id: 'p4', nombre: 'E-commerce Rediseño', categoría: 'Sitio Web', imagen: 'https://picsum.photos/seed/p4/800/600' },
  { id: 'p5', nombre: 'Grilla Mensual', categoría: 'Social Media Management', imagen: 'https://picsum.photos/seed/p5/800/600' },
  { id: 'p6', nombre: 'Sesión Producto', categoría: 'Producción Audiovisual', imagen: 'https://picsum.photos/seed/p6/800/600' },
  { id: 'p7', nombre: 'Identidad Visual', categoría: 'Diseño Gráfico', imagen: 'https://picsum.photos/seed/p7/800/600' },
  { id: 'p8', nombre: 'Ads Conversion', categoría: 'Publicidad Paga', imagen: 'https://picsum.photos/seed/p8/800/600' },
  { id: 'p9', nombre: 'Shorts & Reels', categoría: 'Content Creator', imagen: 'https://picsum.photos/seed/p9/800/600' },
  { id: 'p10', nombre: 'Landing Page', categoría: 'Sitio Web', imagen: 'https://picsum.photos/seed/p10/800/600' },
];
