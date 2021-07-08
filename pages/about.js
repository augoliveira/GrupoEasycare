import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function About() {
  return (
    <>
      <PageTitleBox />
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                Grupo <span> Easy Care</span>
              </h2>
              <p>
                Estamos há 5 anos no mercado empenhados na prestação de serviços
                de móveis planejados, pedras esculpidas e, atualmente,
                trabalhamos com engenharia, automação residencial, energia
                fotovoltaica e serviços financeiros. Nosso time de profissionais
                tem o objetivo de garantir a satisfação do cliente com um
                trabalho próximo e constante, como um verdadeiro parceiro na
                construção e realização dos sonhos.
              </p>
              <p>
                Nosso propósito é construir sonhos, tirar do papel e tornar real
                o seu objetivo. Já fizemos móveis para grandes empresas e também
                para famílias, que sonhavam em um dia realizar seus projetos.
                Nosso trabalho está pautado:
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/Sobre-easy care.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/linha do tempo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="row my-5">
            <div className="col-lg-2 col-4 text-center">
             
                <h3>2015</h3>
                <p>
                Pedras Esculpidas
                </p>
              </div>
            
            <div className="col-lg-4 col-6 text-center">
             
                <h3>2017</h3>
                <p>
                Móveis Planejados

                </p>
              </div>
            
            <div className="col-lg-3 col-4 text-center">
              
                <h3>2020</h3>
                <p>Engenharia, Arquitetura, Automação Residencial, Manutenção Predial</p>
              </div>

              <div className="col-lg-3 col-6 text-right">
              
              <h3>2021</h3>
              <p>ENERGIA FOTOVOLTAICA E SERVIÇOS FINANCEIROS</p>
            </div>
            
            
          </div>
          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Atendimento de excelência:</h3>
                <p>
                  Time de profissionais bem preparados para atendê-lo com toda
                  personalização que o seu negócio precisa!
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Pontualidade na entrega:</h3>
                <p>
                  Pontualidade é a regra do nosso negócio e não uma exceção!
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Parceria de confiança:</h3>
                <p>Sonhamos e construímos com você cada parte do seu lar!</p>
              </div>
            </div>
            
          </div>
          <OurTeam />
        </div>
      </div>
    </>
  );
}
