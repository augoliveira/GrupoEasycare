import emailjs from "emailjs-com";
import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox contato/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);
export default function Contato() {

  function sendEmail(e) {
      e.preventDefault();

  emailjs.sendForm('gmail', 'template_p39ar0s ', e.target, 'user_6NBZ49aog0wFyD1O1NJJI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
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

      <div className="contato">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="service-block-inner">
                <h1>
                  Dê início a casa{" "}
                  <span class="badge bg-warning text-secondar">
                    dos seus sonhos
                  </span>
                </h1>
              </div>
            </div>
            <div className="contato-container">
              <div className="contact-info">
                <h4>Contato</h4>
                <p>Fale conosco</p>
                <div className="icon-text">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>61 3975-1779</span>
                </div>
                <div className="icon-text">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>comercial@gmail.com</span>
                </div>
                <div className="icon-text">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Endereço: Lote 230 - Guará Brasília - DF,</span>
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

              <form action="https://formspree.io/f/xayabyqo"
  method="POST">
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
                    <label for="inputphonel4">Tel.</label>
                    <input
                      type="phone"
                      class="form-control"
                      id="inputphonel4"
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
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group-cemter">
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
                    <label>mensagem</label>
                    <textarea></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group solo">
                      <button type="submit" class="btn btn-primary">
                        ENVIAR
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


