import React from "react";

export default function HeroSlider() {
  return (
    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-center">
          <img src="images/Easy-Care-slide1.jpg" alt="Grupo easy care Construindo e cuidando dos seus
            Sonhos." />
          <div className="container">
            <div className="row">
              <div className="col-md-12 px-0">
                <h1 className="m-b-20">
                  <strong>
                  Sejam bem-vindos <br /> ao Grupo Easy care.
                  </strong>
                </h1>
                <p className="m-b-40">
                Construindo e cuidando dos seus{" "}
                  Sonhos.
                </p>
                <p>
                  <a className="btn hvr-hover" href="/contato">
                    Orçamento
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-center">
          <img src="images/Easy-Care-slide-2.jpg" alt="Grupo easy care móveis planejados" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  Nosso propósito  <br />é construir sonhos
                  </strong>
                </h1>
                <p className="m-b-40">
                Traga seus projetos{" "}
                   e vamos te entregar resultados.
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
        <li className="text-center">
          <img src="images/Easy-Care-slide-3.jpg" alt="Grupo easy care móveis planejados slide3" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  Ambientes planejados
                  </strong>
                </h1>
                <p className="m-b-40">
                Temos soluções perfeitas{" para o seu projeto."} 
                </p>
                <p>
                  <a className="btn hvr-hover" href="https://api.whatsapp.com/send?phone=5561998581779">
                    vendas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
