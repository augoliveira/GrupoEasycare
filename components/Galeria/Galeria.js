
import React from "react";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);
export default function Galeria() {
  return (
    
    <><section id="service" className="padding">
    <div className="container services">
      <div className="row">
        <div className="col-md-3 col-sm-4">
          <h3 className="heading half_space hidden-xs">Ultimos projetos<span className="divider-left"></span></h3>
          <ul className="tabs heading_space">
            <li className="active" rel="tab1">Ambiente geral</li>
            <li rel="tab2">cozinhas</li>
            <li rel="tab3">salas</li>
            <li rel="tab4">dormitórios</li>
            
          </ul>
          <h3 className="heading half_space">Entre em contato conosco <span className="divider-left"></span></h3>
          <p className=" address"><i className="fa fa-map-pin"></i>SIA Trecho 1 Lote 230 Sala 208, 209 e 211 - Guará, Brasília - DF, 71200-010</p>
          <p className=" address"><i className="fa fa-phone"></i>(61) 3975-1779</p>
          <p className=" address"><i className="fa fa-mail"></i><a href="mailto:comercial@grupoeasycare.com.br">comercial@grupoeasycare.com.br</a></p>
          <ul className="social_icon heading_space">
            <li><a href="#." className="facebook"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#." className="twitter"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#." className="dribble"><i className="fab fa-pinterest-p"></i></a></li>
            <li><a href="#." className="instagram"><i className="fab fa-instagram"></i></a></li>
          </ul>
          <h3 className="heading half_space">Depoimento <span className="divider-left"></span></h3>
          <div className="testinomial_wrap heading_space">
              <div className="testinomial_text blue_dark  text-center">
              <img src="images/quote.png" alt="quote" className="quote"/>
              <p>A Maria confiou a nós o sonho de dar um up na cozinha, na sala e no guarda-roupa. Fizemos o projeto pensando na praticidade, conforto e realização do sonho de nossa cliente.</p>
              </div>
            <div className="testinomial_pic">
            <img src="images/testinomial1.jpg" alt="testinomial" width="59"/>
            <span className="color">Cliente</span>
            <span className="post_img">Maria</span>
            </div> 
            </div>
        </div> 
        <div className="col-md-9 col-sm-8">   
          <div className="tab_container">
            <h3 className="d_active tab_drawer_heading" rel="tab1">Ambiete planejados</h3>
            <div id="tab1" className="tab_content">
              <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                </div>
                <h3 className="heading half_space">Planejados<span className="divider-left"></span></h3>
                <p className="half_space">Entre os materiais usados estão: o MDF cinza secreto na cozinha, todos os móveis em harmonia e pensados para um dia a dia prático.</p>
                <p className="heading_space">Elaboramos também um painel alabama para receber os amigos e deixar bem aconchegando o momento do filme, futebol ou da novela na sala de TV.</p>
               <div className="row">
                 <div className="col-md-6 panel_list">
                   <h3 className="heading half_space">Engenharia<span className="divider-left"></span></h3>
                   <p className="half_space">Criação do projeto, estudo da viabilidade, acompanhamento e execução de obra.</p>
                 </div>
                 <div className="col-md-6 panel_list">
                   <h3 className="heading half_space">Energia fotovoltaica<span className="divider-left"></span></h3>
                   <p className="half_space">Soluções sustentáveis e econômicas para sua conta de luz e para o planeta.</p>
                 </div>
               </div>
               
              
                <ul className="items">
                  <li><a href="#." className="expanded">Ambiente planejados</a>
                    <ul className="sub-items" style={{display:`block;`}}>
                      <li>
                        <p>móveis, pedras e reformas
                        Somos especialistas no trabalho com MDF, um material versátil e maleável para a confecção de ambientes planejados e com requinte.</p>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#.">Pedras esculpidas</a>
                    <ul className="sub-items">
                      <li><p>Veja nossos materiais e escolha o que mais combina com seu ambiente.</p>
                      </li>
                    </ul>
                  </li>
                  <li><a href="/servicos">Engenharia</a>
                    <ul className="sub-items">
                      <li>
                        <p>Criação do projeto, estudo da viabilidade, acompanhamento e execução de obra. </p>
                      </li>
                    </ul>
                  </li>
                  <li><a href="/servicos">Manutenção Predial</a>
                    <ul className="sub-items">
                      <li>
                        <p>Revitalização de fachadas, Pilotis, Instalações prediais, Pinturas e Impermeabilizações. Teste de percussão em fachada e bate fofo em fachada. </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="tab_drawer_heading" rel="tab2">Planejados para cozinhas</h3>
            <div id="tab2" className="tab_content">
              <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-service2.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-service3.jpg" alt="Our Services" className="border-radius"/></div>
                </div>
                <h3 className="heading half_space">Planejados para cozinhas<span className="divider-left"></span></h3>
                <p className="half_space">Lar é o primeiro lugar onde nascem os nossos sonhos. É em meio ao conforto e aconchego da nossa família que podemos criar, sonhar e somos incentivados a voar mais alto e cada vez mais longe.</p>
                <p className="heading_space">A Maria confiou a nós o sonho de dar um up na cozinha, na sala e no guarda-roupa. Fizemos o projeto pensando na praticidade, conforto e realização do sonho de nossa cliente. </p>
              
              </div>
            </div>
            <h3 className="tab_drawer_heading" rel="tab3">Ambiente planejados de sala</h3>
            <div id="tab3" className="tab_content">
                <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-sala.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-sala2.jpg" alt="Our Services" className="border-radius"/></div>
                  
                </div>
                <h3 className="heading half_space">Sala<span className="divider-left"></span></h3>
                <p className="half_space">O espaço disponível da sala foi adaptado para inserir um home bar para os moradores. Com isso, foi criada uma pequena bancada para apoiar as taças e preparar as bebidas. 
                A parede também ganha um toque especial com um painel para suportar as garrafas de vinhos, o que passa ser um item decorativo na sala.</p>
              </div>
            </div> 
            <h3 className="tab_drawer_heading" rel="tab4">Quarto Planejado</h3>
            <div id="tab4" className="tab_content">
                <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-quarto1.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-quarto2.jpg" alt="Our Services" className="border-radius"/></div>
                  
                </div>
                <h3 className="heading half_space">Quarto Planejado<span className="divider-left"></span></h3>
                <p className="half_space">Parece óbvio que o quarto, por ser um dos ambientes mais usados da casa, seja um dos primeiros a serem planejados, 
                certo? Porém, muitas vezes ele é deixado de lado, isso porque é, normalmente, visto e utilizado apenas pelos moradores e não há aquela pressão do olhar das visitas para fazer um quarto planejado, bonito ou mesmo funcional.</p>

              </div>
            </div>
            <h3 className="tab_drawer_heading" rel="tab5">Architecture</h3>
            <div id="tab5" className="tab_content">
                <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                </div>
                <h3 className="heading half_space">Architecture<span className="divider-left"></span></h3>
                <p className="half_space">Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean varius ex ut ex laoreet fermentum.</p>
                <p className="heading_space">Aenean sit amet massa eu velit commodo cursus fringilla a tellus. Morbi eros urna, mollis porta feugiat non, ornare eu augue. Sed rhoncus 
                est sit amet diam tempus, et tristique est viverra. Etiam ex tellus, sectur at dapibus id, luctus at odio. Proin mattis congue tristique.</p>
               <div className="row">
                 <div className="col-md-6 panel_list">
                   <h3 className="heading half_space">Proconstruction Services<span className="divider-left"></span></h3>
                   <p className="half_space">Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. 
                   Aenean varius ex ut ex laoreet Aenean the fermentum.</p>
                   <p className="half_space">Our responsibilities when serving as the General Contractor include:</p>
                   <ul className="service_feature heading_space">
                     <li><i className="icon-check"></i>Providing all materials, labor equipment.</li>
                     <li><i className="icon-check"></i>Eget Egestas. Aenean varius ex ut ex laoreet Aenean.</li>
                     <li><i className="icon-check"></i>Aenean varius ex ut ex laoreet Aenean fermentum.</li>
                   </ul>
                 </div>
                 <div className="col-md-6 panel_list">
                   <h3 className="heading half_space">Reliable & Experienced<span className="divider-left"></span></h3>
                   <p className="half_space">Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. 
                   Aenean varius ex ut ex laoreet Aenean the fermentum.</p>
                   <ul className="service_feature heading_space">
                     <li><i className="icon-check"></i>Providing all materials, labor equipment.</li>
                     <li><i className="icon-check"></i>Eget Egestas. Aenean varius ex ut ex laoreet Aenean.</li>
                     <li><i className="icon-check"></i>Aenean varius ex ut ex laoreet Aenean fermentum.</li>
                   </ul>
                 </div>
               </div>
               
              
                <ul className="items">
                  <li><a href="#." className="expanded">Inspections And Occupancy Permit</a>
                    <ul className="sub-items" style={{display:`block;`}}>
                      <li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#.">Pharmaceutical Advice</a>
                    <ul className="sub-items">
                      <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                      ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#.">Medical Counseling</a>
                    <ul className="sub-items">
                      <li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#.">Rehabilitation Center</a>
                    <ul className="sub-items">
                      <li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="tab_drawer_heading" rel="tab6">Repairing & Maintenance</h3>
            <div id="tab6" className="tab_content">
                <div className="services_content">
                <div className="service-slider owl-carousel half_space">
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                  <div className="item"><img src="images/banner-service1.jpg" alt="Our Services" className="border-radius"/></div>
                </div>
                <h3 className="heading half_space">Repairing & Maintenance<span className="divider-left"></span></h3>
                <p className="half_space">Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean varius ex ut ex laoreet fermentum.</p>
                <p className="heading_space">Aenean sit amet massa eu velit commodo cursus fringilla a tellus. Morbi eros urna, mollis porta feugiat non, ornare eu augue. Sed rhoncus 
                est sit amet diam tempus, et tristique est viverra. Etiam ex tellus, sectur at dapibus id, luctus at odio. Proin mattis congue tristique.</p>
               <div className="row">
                 <div className="col-md-6 panel_list">
                   <h3 className="heading half_space">Proconstruction Services<span className="divider-left"></span></h3>
                   <p className="half_space">Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. 
                   Aenean varius ex ut ex laoreet Aenean the fermentum.</p>
                   <p className="half_space">Our responsibilities when serving as the General Contractor include:</p>
                   <ul className="service_feature heading_space">
                     <li><i className="icon-check"></i>Providing all materials, labor equipment.</li>
                     <li><i className="icon-check"></i>Eget Egestas. Aenean varius ex ut ex laoreet Aenean.</li>
                     <li><i className="icon-check"></i>Aenean varius ex ut ex laoreet Aenean fermentum.</li>
                   </ul>
                 </div>
                 <div className="col-md-6 panel_list">
                   <h3 className="heading half_space">Reliable & Experienced<span className="divider-left"></span></h3>
                   <p className="half_space">Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. 
                   Aenean varius ex ut ex laoreet Aenean the fermentum.</p>
                   <ul className="service_feature heading_space">
                     <li><i className="icon-check"></i>Providing all materials, labor equipment.</li>
                     <li><i className="icon-check"></i>Eget Egestas. Aenean varius ex ut ex laoreet Aenean.</li>
                     <li><i className="icon-check"></i>Aenean varius ex ut ex laoreet Aenean fermentum.</li>
                   </ul>
                 </div>
               </div>
               
              
                <ul className="items">
                  <li><a href="#." className="expanded">Inspections And Occupancy Permit</a>
                    <ul className="sub-items" style={{display:`block;`}}>
                      <li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#.">Pharmaceutical Advice</a>
                    <ul className="sub-items">
                      <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                      ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#.">Medical Counseling</a>
                    <ul className="sub-items">
                      <li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#.">Rehabilitation Center</a>
                    <ul className="sub-items">
                      <li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></>
  );
}
