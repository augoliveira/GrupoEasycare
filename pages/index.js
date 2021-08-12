
import * as fbq from '../lib/fpixel'
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Galeria from "../components/Galeria/Galeria";
import Orçamento from "../components/Orçamento/Orçamento";
import Whatsapp from "../components/WhatSapp/Whatsapp";
import Formulario from "../components/Formulario/formulario";
import Depoimento from "../components/Depoimento/Depoimento";


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Orçamento />
      <Galeria />
      <Whatsapp />
      <Depoimento />
      <Formulario />
      
    </div>
    
  );
}

