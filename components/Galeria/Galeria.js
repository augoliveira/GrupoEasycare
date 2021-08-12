import React from "react";

export default function Galeria() {
  return (
    
    <section className="latest-project">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
          <div className="section-header">
          <h3>Ultimos Porjetos</h3>
          </div>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-3 col-md-6">
          <div className="latest__item">
            <img alt="Project 1" src="images/women-shoes-img.jpg"/>
            <a href="images/women-shoes-img.jpg" data-lightbox="Lastest Project" className="overlay overlay--invisible overlay--p-15">
              <div className="overlay--border">

              </div>
            </a>
            <div className="latest__item--content">
              <div className="latest__item--inner">
                <h3>Bancada</h3>
                <div className="cat-name">
                  <a href="/projetos">
                    <em>Nossos projetos</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="latest__item">
            <img alt="Project 2" src="images/instagram-img-03.jpg"/>
            <a href="images/instagram-img-03.jpg" data-lightbox="Lastest Project" className="overlay overlay--invisible overlay--p-15">
              <div className="overlay--border">

              </div>
            </a>
            <div className="latest__item--content">
              <div className="latest__item--inner">
                <h3>Planejados</h3>
                <div className="cat-name">
                  <a href="/projetos">
                    <em>Nossos projetos</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="latest__item">
            <img alt="Project 3" src="images/shoes-img.jpg"/>
            <a href="images/shoes-img.jpg" data-lightbox="Lastest Project" className="overlay overlay--invisible overlay--p-15">
              <div className="overlay--border">

              </div>
            </a>
            <div className="latest__item--content">
              <div className="latest__item--inner">
                <h3>Criado</h3>
                <div className="cat-name">
                  <a href="/projetos">
                    <em>Nossos projetos</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="latest__item">
            <img alt="Project 4" src="images/instagram-img-01.jpg"/>
            <a href="images/instagram-img-01.jpg" data-lightbox="Lastest Project" className="overlay overlay--invisible overlay--p-15">
              <div className="overlay--border">

              </div>
            </a>
            <div className="latest__item--content">
              <div className="latest__item--inner">
                <h3>Armario</h3>
                <div className="cat-name">
                  <a href="/projetos">
                    <em>Nossos projetos</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="latest__item">
            <img alt="Project 5" src="images/Planejados-img.jpg"/>
            <a href="images/Planejados-img.jpg" data-lightbox="Lastest Project" className="overlay overlay--invisible overlay--p-15">
              <div className="overlay--border">

              </div>
            </a>
            <div className="latest__item--content">
              <div className="latest__item--inner">
                <h3>Planejados escritório</h3>
                <div className="cat-name">
                  <a href="/projetos">
                    <em>Nossos projetos</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="latest__item">
            <img alt="Project 6" src="images/Bancada-para-cozinha-img.jpg"/>
            <a href="images/Bancada-para-cozinha-img.jpg" data-lightbox="Lastest Project" className="overlay overlay--invisible overlay--p-15">
              <div className="overlay--border">

              </div>
            </a>
            <div className="latest__item--content">
              <div className="latest__item--inner">
                <h3>Bancada de marmore</h3>
                <div className="cat-name">
                  <a href="/projetos">
                    <em>Nossos projetos</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="latest__item">
            <img alt="Project 7" src="images/porta.jpg"/>
            <a href="images/porta.jpg" data-lightbox="Lastest Project" className="overlay overlay--invisible overlay--p-15">
              <div className="overlay--border">
              </div>
            </a>
            <div className="latest__item--content">
              <div className="latest__item--inner">
                <h3>Porta de Guarda-roupa</h3>
                <div className="cat-name">
                  <a href="/projetos">
                    <em>Nossos projetos</em>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
