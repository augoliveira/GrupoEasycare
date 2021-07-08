import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox servicos/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function servicos() {
  return (
    <>
      <PageTitleBox />
      <div className="contato-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="contato-title">
                Grupo <span> Easy Care</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="contato-box-main">
        <div className="container">
          <div className="card-group">
            <div class="card text-center">
              <div class="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  className="card-img-top"
                  src="images/big-img-02.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#multiCollapseExample2"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample2"
                    >
                      Energia fotovoltaica
                    </button>
                  </p>
                  <div class="row">
                    <div class="col">
                      <div
                        class="collapse multi-collapse"
                        id="multiCollapseExample2"
                      >
                        <div class="card card-body">
                          <blockquote class="blockquote text-center">
                            <p class="mb-0">
                            Automação, energia fotovoltaica e manutenção predial
                            </p>
                            <footer class="blockquote-footer">
                            Realizamos todo o trabalho para garantir a estabilidade, segurança de sua edificação, economia energética e usamos a tecnologia para facilitar processos, gerar praticidade e conforto. {" "}
                              <cite title="Source Title">
                                atender exigências de segurança e garantir vida
                                longa às edificações.
                              </cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card text-center">
              <div class="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  className="card-img-top"
                  src="images/Móveis-planejados.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Móveis planejados
                    </button>
                  </p>
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                      <blockquote class="blockquote text-center">
                        <p class="mb-0">móveis, pedras e reformas</p>
                        <footer class="blockquote-footer">
                          Somos especialistas no trabalho com MDF,{" "}
                          <cite title="Source Title"></cite>um material versátil
                          e maleável para a confecção de ambientes planejados e
                          com requinte.
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card text-center">
              <div class="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  className="card-img-top"
                  src="images/serviços-financeiros.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p>
                    <a
                      class="btn btn-primary"
                      data-toggle="collapse"
                      href="#multiCollapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                    >
                      Soluções financeiras
                    </a>
                  </p>
                  <div class="row">
                    <div class="col">
                      <div
                        class="collapse multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div class="card card-body">
                          <blockquote class="blockquote text-center">
                            <p class="mb-0">Soluções financeiras</p>
                            <footer class="blockquote-footer">
                              Os produtos financeiros têm grande relevância na
                              vida do investidor comum como também muita{" "}
                              <cite title="Source Title"></cite> influência no
                              desenvolvimento do mercado financeiro e na
                              economia em geral..
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Formulario">
        <div className="container">
          <div className="col">
            <div className="service-block-inner">
              <h1 className="noo-sh-title">Dê início a casa dos seus sonhos</h1>
            </div>
          </div>

          <div className="contato-container">
            <div className="contact-info">
              <h4>Fale conosco</h4>
              <div className="icon-text">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>61 3975-1779</span>
              </div>
              <div className="icon-text">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>comercial@grupoeasycare.com.br</span>
              </div>
              <div className="icon-text">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Sia trecho 1 , Lt 230 /sala  208 /211 
                Cep:71.200-012</span>
              </div>

              <div className="add-to-btn">
                <div className="share-bar">
                  <a className="btn hvr-hover" href="#">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a className="btn hvr-hover" href="#">
                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                  </a>
                  <a className="btn hvr-hover" href="#">
                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Escreva seu nome"
                ></input>
              </div>

              <div className="row">
                <div class="form-group col-lg-6 col-md-6 col-sm-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  ></input>
                </div>
                <div class="form-group col-lg-6 col-md-6 col-sm-6">
                  <label for="inputEmail4">Tel.</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Tel."
                  ></input>
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group-center">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Móveis Planejados
                    </label>

                    <div class="form-check form-check-inline">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="flexSwitchCheckDefault"
                      ></input>
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Pedra Esculpidas
                      </label>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        ></input>
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          Energia Fotovoltaica
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group-center">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Engenharia
                    </label>

                    <div class="form-check form-check-inline">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="flexSwitchCheckDefault"
                      ></input>
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Manutenção Predial
                      </label>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        ></input>
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          Automação Residencial
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group solo">
                  <button>Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

<div className="row special-list">{servicos}</div>;
