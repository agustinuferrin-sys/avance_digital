export interface MethodStep {
  número: string;
  título: string;
  descripción: string;
}

export const methodSteps: MethodStep[] = [
  {
    número: '01',
    título: 'Entender',
    descripción: 'Analizamos tu marca, tu mercado y tu punto de partida.',
  },
  {
    número: '02',
    título: 'Ordenar',
    descripción: 'Definimos prioridades, mensaje, posicionamiento y dirección.',
  },
  {
    número: '03',
    título: 'Ejecutar',
    descripción: 'Convertimos la estrategia en acciones concretas: contenido, diseño, campañas, comunicación y publicidad.',
  },
  {
    número: '04',
    título: 'Medir',
    descripción: 'Leemos datos, resultados y señales para tomar decisiones con criterio.',
  },
  {
    número: '05',
    título: 'Escalar',
    descripción: 'Optimizamos lo que funciona y acompañamos el crecimiento de forma sostenible.',
  }
];
