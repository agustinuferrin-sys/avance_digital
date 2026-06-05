export interface Client {
  id: string;
  nombre: string;
  logo: string;
}

export const clients: Client[] = [
  { id: 'c1', nombre: 'Cliente 1', logo: 'https://picsum.photos/seed/c1/200/100' },
  { id: 'c2', nombre: 'Cliente 2', logo: 'https://picsum.photos/seed/c2/200/100' },
  { id: 'c3', nombre: 'Cliente 3', logo: 'https://picsum.photos/seed/c3/200/100' },
  { id: 'c4', nombre: 'Cliente 4', logo: 'https://picsum.photos/seed/c4/200/100' },
  { id: 'c5', nombre: 'Cliente 5', logo: 'https://picsum.photos/seed/c5/200/100' },
  { id: 'c6', nombre: 'Cliente 6', logo: 'https://picsum.photos/seed/c6/200/100' },
];
