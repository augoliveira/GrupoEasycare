import React from "react";

export default function TopBar() {
  return (
    <div className="main-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-slid-box">
              <div id="offer-box" className="carouselTicker">
                <ul className="offer-box">
                  <li>
                    <i className="fab fa-opencart"></i> Móveis planejados com
                    preço especiais
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Planejados para espaços
                    reduzido
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Nosso Show room tem as
                    melhores opções
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Atendemos Brasília e
                    regioes
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Solicite um vendedor
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Somos projetores de
                    sonhos
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Podemos tornar em
                    relidade seus sonhos!
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Faça seu projeto e venha
                    para Grupo Easy care
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="custom-select-box"></div>
            <div className="right-phone-box">
              <p>
                VENDA:- <a href="tel:613975-1779"> 61 3975-1779</a>
              </p>
            </div>
            <div className="our-link">
              <ul>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5561998581779">
                    WhatSapp
                  </a>
                </li>
                <li>
                  <a href="tel:5561998581779">Nossos contatos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
