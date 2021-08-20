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
      <div classNameName="contato-box-main">
        <div classNameName="container">
          <div classNameName="row">
            <div classNameName="col-lg-12">
              <h2 classNameName="contato-title">
                Grupo <span> Easy Care</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="contato-box-main">
        <div classNameName="container">
          <div classNameName="card-group">
            <div className="card text-center">
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  classNameName="card-img-top"
                  src="images/big-img-02.jpg"
                  alt="Card image cap"
                />
                <div classNameName="card-body">
                  <p>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#multiCollapseExample2"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample2"
                    >
                      Energia fotovoltaica
                    </button>
                  </p>
                  <div className="row">
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample2"
                      >
                        <div className="card card-body">
                          <blockquote className="blockquote text-center">
                            <p className="mb-0">
                            Automação, energia fotovoltaica e manutenção predial
                            </p>
                            <footer className="blockquote-footer">
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

            <div className="card text-center">
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  classNameName="card-img-top"
                  src="images/Móveis-planejados.jpg"
                  alt="Card image cap"
                />
                <div classNameName="card-body">
                  <p>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Móveis planejados
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <blockquote className="blockquote text-center">
                        <p className="mb-0">móveis, pedras e reformas</p>
                        <footer className="blockquote-footer">
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
            <div className="card text-center">
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <img
                  classNameName="card-img-top"
                  src="images/serviços-financeiros.jpg"
                  alt="Card image cap"
                />
                <div classNameName="card-body">
                  <p>
                    <a
                      className="btn btn-primary"
                      data-toggle="collapse"
                      href="#multiCollapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                    >
                      Soluções financeiras
                    </a>
                  </p>
                  <div className="row">
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div className="card card-body">
                          <blockquote className="blockquote text-center">
                            <p className="mb-0">Soluções financeiras</p>
                            <footer className="blockquote-footer">
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

      <div classNameName="Formulario">
        <div classNameName="container">
          <div classNameName="col">
            <div classNameName="service-block-inner">
              <h1 classNameName="noo-sh-title">Dê início a casa dos seus sonhos</h1>
            </div>
          </div>

          <div classNameName="contato-container">
            <div classNameName="contact-info">
              <h4>Fale conosco</h4>
              <div classNameName="icon-text">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>61 3975-1779</span>
              </div>
              <div classNameName="icon-text">
                <i classNameName="fa fa-envelope" aria-hidden="true"></i>
                <span>comercial@grupoeasycare.com.br</span>
              </div>
              <div classNameName="icon-text">
                <i classNameName="fa fa-map-marker" aria-hidden="true"></i>
                <span>Sia trecho 1 , Lt 230 /sala  208 /211 
                Cep:71.200-012</span>
              </div>

              <div classNameName="add-to-btn">
                <div classNameName="share-bar">
                  <a classNameName="btn hvr-hover" href="#">
                    <i classNameName="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a classNameName="btn hvr-hover" href="#">
                    <i classNameName="fab fa-pinterest-p" aria-hidden="true"></i>
                  </a>
                  <a classNameName="btn hvr-hover" href="#">
                    <i classNameName="fab fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Escreva seu nome"
                ></input>
              </div>

              <div classNameName="row">
                <div className="form-group col-lg-6 col-md-6 col-sm-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-6">
                  <label for="inputEmail4">Tel.</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Tel."
                  ></input>
                </div>
              </div>

              <div classNameName="col-lg-12 col-md-12 col-sm-12">
                <div classNameName="form-group-center">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    ></input>
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Móveis Planejados
                    </label>

                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="flexSwitchCheckDefault"
                      ></input>
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Pedra Esculpidas
                      </label>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        ></input>
                        <label
                          className="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          Energia Fotovoltaica
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div classNameName="form-group-center">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    ></input>
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Engenharia
                    </label>

                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="flexSwitchCheckDefault"
                      ></input>
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Manutenção Predial
                      </label>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        ></input>
                        <label
                          className="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          Automação Residencial
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div classNameName="col-lg-12 col-md-12 col-sm-12">
                <div classNameName="form-group solo">
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

<div classNameName="row special-list">{servicos}</div>;
