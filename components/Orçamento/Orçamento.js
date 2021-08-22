import React from "react";

export default function Orçamento() {
  return (
    <section className="service">
      <div className="service-wrap">
        <div className="service__item service__intro" style={{backgroundImage: `url('/images/service-01.jpg');`}}>
          <div className="service__item-inner">
            <h3>
              <span>Ambientes planejados</span>
              <br/> Para espaço corporativo
            </h3>
            <p>
            Criação do projeto, desenho da estrutura, planejamento e execução.
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
            <p>Projetos de arquitetura, interiores, produção de móveis e pedras esculpidas. </p>
          </div>
        </div>

        <div className="service__item" style={{backgroundImage: `url('/images/service-03.jpg');`}}>
          <div className="service__item-inner">
            <img alt="Icon 2" src="images/icon-service-02.png"/>
            <a href="about-us.html"><h4>Engenharia</h4></a>
            <p>Criação do projeto, estudo da viabilidade, acompanhamento e execução de obra. </p>
          </div>
        </div>

        <div className="service__item" style={{backgroundImage: `url('images/service-04.jpg');`}}>
          <div className="service__item-inner">
            <img alt="Icon 3" src="images/icon-service-03.png"/>
            <a href="about-us.html"><h4>Energia Fotovoltaica</h4></a>
            <p>Soluções sustentáveis e econômicas para sua conta de luz e para o planeta.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
