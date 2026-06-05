export interface Stat {
  id: string;
  valor: string;
  label: string;
}

export const stats: Stat[] = [
  { id: 'estrategias', valor: '+200', label: 'Estrategias' },
  { id: 'campañas', valor: '+95', label: 'Campañas' },
  { id: 'piezas', valor: '+4.5K', label: 'Piezas' },
  { id: 'marcas', valor: '+25', label: 'Marcas' },
  { id: 'porcentaje', valor: '+80%', label: 'Crecimiento' },
];
