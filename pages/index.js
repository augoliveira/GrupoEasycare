
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

    
    <body>
      <button class="btn-whatsapp">
        <a href="https://api.whatsapp.com/send?phone=556198581779&text=Hello%2C%20World" target="_blank">
            <i class="fa fa-whatsapp"></i>
        </a>
    </button>
    </body>
</div>
  );
}
