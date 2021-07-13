
import * as fbq from '../lib/fpixel'
import HeroSlider from "../components/HeroSlider/HeroSlider";
import ShopCategories from "../components/ShopCategories/ShopCategories.container";
import Orçamento from "../components/Orçamento/Orçamento";
import Whatsapp from "../components/WhatSapp/Whatsapp";
import Formulario from "../components/Formulario/formulario";
import Depoimento from "../components/Depoimento/Depoimento";


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Orçamento />
      <ShopCategories />
      <Whatsapp />
      <Depoimento />
      <Formulario />
      
    </div>
    
  );
}

