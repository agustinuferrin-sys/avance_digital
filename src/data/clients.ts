export interface Client {
  id: string;
  nombre: string;
  logo: string;
}

// NOTA: logos placeholder. Reemplazar por los 8 logos reales de los clientes.
export const clients: Client[] = [
  { id: 'c1', nombre: 'Cliente 1', logo: 'https://picsum.photos/seed/c1/240/120' },
  { id: 'c2', nombre: 'Cliente 2', logo: 'https://picsum.photos/seed/c2/240/120' },
  { id: 'c3', nombre: 'Cliente 3', logo: 'https://picsum.photos/seed/c3/240/120' },
  { id: 'c4', nombre: 'Cliente 4', logo: 'https://picsum.photos/seed/c4/240/120' },
  { id: 'c5', nombre: 'Cliente 5', logo: 'https://picsum.photos/seed/c5/240/120' },
  { id: 'c6', nombre: 'Cliente 6', logo: 'https://picsum.photos/seed/c6/240/120' },
  { id: 'c7', nombre: 'Cliente 7', logo: 'https://picsum.photos/seed/c7/240/120' },
  { id: 'c8', nombre: 'Cliente 8', logo: 'https://picsum.photos/seed/c8/240/120' },
];
