export interface PlanFeatures {
  posteos?: number;
  historias?: number;
}

export interface Plan {
  id: string;
  nombre: string;
  lema: string;
  descripción: string;
  piezas: PlanFeatures;
  features: string[];
  destacado: boolean;
}

export const plans: Plan[] = [
  {
    id: 'inicial',
    nombre: 'Inicial',
    lema: 'ENTRÁ AL SISTEMA',
    descripción: 'Ideal para marcas que buscan presencia profesional y constante.',
    piezas: { posteos: 8, historias: 16 },
    features: ['Estrategia mensual', 'Redacción de copy', 'Diseño gráfico', 'Reporte mensual básico'],
    destacado: false,
  },
  {
    id: 'crecimiento',
    nombre: 'Crecimiento',
    lema: 'IMPACTÁ',
    descripción: 'El ecosistema completo para acelerar resultados e interacciones.',
    piezas: { posteos: 12, historias: 24 },
    features: ['Estrategia avanzada', 'Gestión de Ads', 'Reels y formato video', 'Moderación de comunidad', 'Reporte detallado'],
    destacado: true,
  },
  {
    id: 'premium',
    nombre: 'Premium',
    lema: 'LIDERÁ',
    descripción: 'Dominá tu sector con producción a gran escala y soporte prioritario.',
    piezas: { posteos: 20, historias: 40 },
    features: ['Asesoría 1:1', 'Estrategia omnicanal', 'Presupuesto Ads escalable', 'Coberturas presenciales', 'Dashboard en tiempo real'],
    destacado: false,
  },
];
