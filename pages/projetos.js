import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox projeto/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";
import Formulario from "../components/Formulario/formulario";
import ShopCategories from "../components/ShopCategories/ShopCategories.container";
const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function projetos() {
  return (
    <>
      <section id="portfolio" className="portfolio">
      <div className="container-fluid">

        <div className="section-title">
          <h2>Portfolio</h2>
          <h3>Nossos <span>Projetos</span></h3>
          <p>Projetos para ampliar seu espaço</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">TODOS</li>
              <li data-filter=".filter-app">ENGENHARIA</li>
              <li data-filter=".filter-card">ENERGIA FOTOVOLTAICA</li>
              <li data-filter=".filter-web">MÓVEIS PLANEJADOS</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container justify-content-center">
          <div className="col-xl-10">
            <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="../images/portfolio-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Bacada</h4>
                    <p>Móveis planejados</p>
                    <div className="portfolio-links">
                      <a href="../images/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="../images/portfolio-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4> Painel</h4>
                    <p>Planejados para sala</p>
                    <div className="portfolio-links">
                      <a href="../images/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="../images/portfolio-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Cozinha </h4>
                    <p>Planejados para cozinha</p>
                    <div className="portfolio-links">
                      <a href="../images/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div> 

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="../images/portfolio-4.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Armário</h4>
                    <p>Planejados para quarto</p>
                    <div className="portfolio-links">
                      <a href="../images/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
                </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="../images/portfolio-5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Armário de cozinha</h4>
                    <p>Planejado para cozinha</p>
                    <div className="portfolio-links">
                      <a href="../images/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="../images/portfolio-6.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Closed</h4>
                    <p>para quanto</p>
                    <div className="portfolio-links">
                      <a href="../images/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="../images/portfolio-7.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Armario de cozinha</h4>
                    <p>Planejado</p>
                    <div className="portfolio-links">
                      <a href="../images/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="../images/portfolio-8.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Mármore</h4>
                    <p>Bancada de marmore para banheiro</p>
                    <div className="portfolio-links">
                      <a href="../images/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                      <a href="portfoliodetalhe" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

             
           
          </div>

        </div>
        </div>
        </div>
  
    </section>
     <div>
       
     
    <Formulario />
           </div>
   </>

  );
}

<div classNameName="row special-list">{projetos}</div>;