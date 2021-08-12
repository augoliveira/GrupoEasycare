import React from "react";
import Image from 'next/image'
import slide3 from "../../public/images/Easy-Care-slide-3.jpg";
import slide2 from "../../public/images/Easy-Care-slide-2.jpg";
import slide1 from "../../public/images/Easy-Care-slide1.jpg";
export default function HeroSlider() {
  return (
   <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-center">
          <img src={slide3} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                     Energia fotovoltaica <br /> solução economica 
                  </strong>
                </h1>
                <p className="m-b-40">
                Projetos para todos os tipos de negócio e residências{" "}
                  <br /> Garantia completa, rápida instalação, equipe especializada e opções de financiamento.
                </p>
                <p>
                  <a className="btn hvr-hover" href="/contato">
                    Contato
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-left">
          <img src={slide2} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    O projeto de seus  <br /> Sonhos começa aqui!
                  </strong>
                </h1>
                <p className="m-b-40">
                  Pensando no seu conforto e segurança temos soluções completa{" "}
                  <br /> projetamos e ezecutamos seu cozinha em marmore e silestones .
                </p>
                <p>
                  <a className="btn hvr-hover" href="https://api.whatsapp.com/send?phone=5561998581779">
                    Quer mais informações?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-right">
          <img src={slide1} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Ambiente planejados <br /> Para seu espaço
                  </strong>
                </h1>
                <p className="m-b-40">
                  O grupo Easy care tem a melhor solução planejada{" "}
                  <br /> para Ambiente reduzido seu projeto aqui será bem cuidado.
                </p>
                <p>
                  <a className="btn hvr-hover" href="https://api.whatsapp.com/send?phone=5561998581779">
                    Fale com nosso time
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div>
    </div> 
  );
}

