import React from "react";

export default function Galeria() {
  return (

    <><section id="service" className="padding">
    <div className="container services">
      <div className="row">
        <div className="col-md-3 col-sm-4">
          <h3 className="heading half_space hidden-xs">Últimos projetos<span className="divider-left"></span></h3>
          <ul className="tabs heading_space">
            <li className="active" rel="tab1">Ambiente geral</li>
            <li rel="tab2">cozinhas</li>
            <li rel="tab3">salas</li>
            <li rel="tab4">Espaços comerciais</li>

          </ul>



        </div>
        <div className="col-md-9 col-sm-8">
          <div className="tab_container">
            <h3 className="d_active tab_drawer_heading" rel="tab1">Ambiete planejados</h3>
            <div id="tab1" className="tab_content">
              <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>

                </div>

              </div>
            </div>
            <h3 className="tab_drawer_heading" rel="tab2">Planejados para cozinhas</h3>
            <div id="tab2" className="tab_content">
              <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>

                </div>

              </div>
            </div>

            <div id="tab3" className="tab_content">
                <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-sala.jpg" alt="Our Services" className="border-radius"/></div>


                </div>

              </div>
            </div>
            <h3 className="tab_drawer_heading" rel="tab4">Quarto Planejado</h3>
            <div id="tab4" className="tab_content">
                <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-quarto1.jpg" alt="Our Services" className="border-radius"/></div>


                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></>
  );
}
