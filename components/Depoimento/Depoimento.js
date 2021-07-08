import React from "react";

export default function Depoimento() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../images/1.jpg" alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
            <h2>
              Gostei demais do trabalho, do atendimento,<br/> do prazo e do preço!
              Enfim, virei cliente. Parabéns!<br/> Precisamos, no mercado, de
              empresas que trabalham <br/>com excelência. Fiquei feliz e realizada.
            </h2>
            <p>Daniela Goes</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../images/2.jpg" alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
            <h2>
              Ficou muito bom. Adorei. <br/>Obrigada por fazerem o projeto do<br/>
              jeitinho que eu queria.
            </h2>
            <p>Vanessa Almeida</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
