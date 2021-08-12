import React from "react";

export default function Orçamento() {
  return (
    <section className="service">
      <div className="service-wrap">
        <div className="service__item service__intro" style={{backgroundImage: `url('/images/service-01.jpg');`}}>
          <div className="service__item-inner">
            <h3>
              <span>Ambiente planejados</span>
              <br/> Para espaço corporativo
            </h3>
            <p>
            Projetos e Execução. Projeto, acompanhamento e execução de obra. 
            <br/>Estudo de viabilidade financeira para de obra. Projetos de arquitetura, interiores e complementares.
            </p>
            <div>
              <a href="about-us.html" className="au-btn au-btn--big au-btn--pill au-btn--white au-btn--border au-btn--big">Saiba mais</a>
            </div>
          </div>

        </div>
        
        <div className="service__item" style={{backgroundImage: `url('/images/service-02.jpg');`}}>
          <div className="service__item-inner">
            <img alt="Icon 1" src="/images/icon-service-01.png"/>
            <a href="about-us.html"><h4 >Móveis Planejados</h4></a>
          </div>
        </div>
        
        <div className="service__item" style={{backgroundImage: `url('/images/service-03.jpg');`}}>
          <div className="service__item-inner">
            <img alt="Icon 2" src="images/icon-service-02.png"/>
            <a href="about-us.html"><h4>Pedras esculpidas</h4></a>
          </div>
        </div>
        
        <div className="service__item" style={{backgroundImage: `url('images/service-04.jpg');`}}>
          <div className="service__item-inner">
            <img alt="Icon 3" src="images/icon-service-03.png"/>
            <a href="about-us.html"><h4>Energia Fotovoltaica</h4></a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
