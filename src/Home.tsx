import { Hero } from './sections/Hero';
import { Filosofia } from './sections/Filosofia';
import { Servicios } from './sections/Servicios';
import { Metricas } from './sections/Metricas';
import { SistemaAvance } from './sections/SistemaAvance';
import { Manifiesto } from './sections/Manifiesto';
import { Proyectos } from './sections/Proyectos';
import { EsParaVos } from './sections/EsParaVos';
import { Clientes } from './sections/Clientes';
import { FAQ } from './sections/FAQ';
import { Contacto } from './sections/Contacto';

export default function Home() {
  return (
    <>
      <Hero />
      <Filosofia />
      <Servicios />
      <Metricas />
      <SistemaAvance />
      <Manifiesto />
      <Clientes />
      <Proyectos />
      <EsParaVos />
      <FAQ />
      <Contacto />
    </>
  );
}
