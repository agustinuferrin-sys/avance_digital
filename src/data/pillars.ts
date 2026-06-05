export interface Pillar {
  id: string;
  título: string;
  descripción: string;
}

export const pillars: Pillar[] = [
  { id: 'p1', título: 'Estrategia que impulsa', descripción: 'No damos pasos en falso; cada acción está respaldada por datos y un objetivo.' },
  { id: 'p2', título: 'Creatividad con método', descripción: 'Combinamos ideas frescas con procesos validados para lograr impacto real.' },
  { id: 'p3', título: 'Optimización constante', descripción: 'Entendemos que el mercado muta. Medimos y ajustamos para no quedarnos atrás.' },
  { id: 'p4', título: 'Cultura de excelencia', descripción: 'Elevar la vara en cada entrega no es una opción, es nuestro estándar.' },
];
