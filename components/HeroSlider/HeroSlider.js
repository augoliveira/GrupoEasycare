import React from "react";
import Image from 'next/image'
import slide1 from "../../public/images/Easy-Care-slide1.jpg";
import slide2 from "../../public/images/Easy-Care-slide-2.jpg";
import slide3 from "../../public/images/Easy-Care-slide-3.jpg";
import slide4 from "../../public/images/Easy-Care-slide-4.jpg";
export default function HeroSlider() {
  return (
   <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-left">
          <img src={slide1} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <h3>
              Seu ambiente
                </h3>
                <h1 className="m-b-20">
                  <strong>
                  todo <br/> planejado! 
                  </strong>
                </h1>
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
                 <h2 className="m-b-10">
                 Construindo{" "}
                  <br /> e cuidando.
                </h2>
                <h1 className="m-b-20">
                  <strong>
                  dos seus <br /> sonhos!
                  </strong>
                </h1>
               
                <p>
                  <a className="btn hvr-hover" href="https://api.whatsapp.com/send?phone=5561998581779">
                    Quer mais informações?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <ul className="text-left">
          <img src={slide3} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="m-b-40">
                Todas as soluções{" "}
                  <br /> em engenharia.
                </h2>
                <h1 className="m-b-20">
                  <strong>
                    Para você
                  </strong>
                </h1>
                <p>
                  <a className="btn hvr-hover" href="https://api.whatsapp.com/send?phone=556198581779">
                    Fale com nosso time
                  </a>
                </p>
              </div>
            </div>
          </div>
        </ul>
        <li className="text-center">
          <img src={slide4} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <p className="m-b-40">
                  Há
                </p>
                <h1 className="m-b-20">
                  <strong>
                  6 ANOS
                  </strong>
                </h1>
                <p className="m-b-40">
                construindo e cuidando de uma infinidade de sonhos!
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

