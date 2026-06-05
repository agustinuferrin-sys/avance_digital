import { PenTool, Share2, Megaphone, Video, Image, Globe, Film, Lightbulb } from 'lucide-react';
import React from 'react';

export interface Service {
  id: string;
  nombre: string;
  descripción: string;
  icono: React.ElementType;
}

export const services: Service[] = [
  { id: 'branding', nombre: 'Branding', descripción: 'Construimos identidades sólidas, memorables y con propósito.', icono: PenTool },
  { id: 'smm', nombre: 'Social Media Management', descripción: 'Gestionamos y potenciamos tu comunidad con contenido de valor.', icono: Share2 },
  { id: 'paid', nombre: 'Publicidad Paga', descripción: 'Campañas en Meta y Google Ads orientadas a un retorno real.', icono: Megaphone },
  { id: 'cc', nombre: 'Content Creator', descripción: 'Creadores de contenido orgánico para conectar con tu audiencia.', icono: Video },
  { id: 'dg', nombre: 'Diseño Gráfico', descripción: 'Piezas visuales de alto impacto alineadas a tu marca.', icono: Image },
  { id: 'web', nombre: 'Sitio Web', descripción: 'Desarrollo web moderno, rápido y optimizado para la conversión.', icono: Globe },
  { id: 'audiovisual', nombre: 'Producción Audiovisual', descripción: 'Dirección, grabación y edición de foto y video profesional.', icono: Film },
  { id: 'asesorias', nombre: 'Asesorías', descripción: 'Consultoría estratégica 1:1 para destrabar tu crecimiento.', icono: Lightbulb },
];
