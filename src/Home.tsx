import { Hero } from './sections/Hero';
import { Pilares } from './sections/Pilares';
import { Servicios } from './sections/Servicios';
import { Metricas } from './sections/Metricas';
import { SistemaAvance } from './sections/SistemaAvance';
import { Manifiesto } from './sections/Manifiesto';
import { Proyectos } from './sections/Proyectos';
import { Planes } from './sections/Planes';
import { EsParaVos } from './sections/EsParaVos';
import { Clientes } from './sections/Clientes';
import { FAQ } from './sections/FAQ';
import { Contacto } from './sections/Contacto';

export default function Home() {
  return (
    <>
      <Hero />
      <Pilares />
      <Servicios />
      <Metricas />
      <SistemaAvance />
      <Manifiesto />
      <Proyectos />
      <Planes />
      <EsParaVos />
      <Clientes />
      <FAQ />
      <Contacto />
    </>
  );
}
