import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>
      <InstagramFeed />
      <footer>
      <div className="overlay overlay--dark">
      </div>
      <div className="parallax parallax--footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 col-12">
              <h1>
                <a href="index.html">
                  <img alt="Logo" src="images/icon.png"/>
                </a>
              </h1>
              <form method="post" className="form-footer">
                <input type="text" name="name" className="form__input" placeholder="Seu E-mail..."/>
                <button type="submit" className="au-btn au-btn--yellow au-btn--white au-btn--submit">ENVIAR</button>
              </form>
              <ul className="ul--inline ul--footer">
                <li>
                  <a href="service-list.html">Serviços</a>
                </li>
                <li>
                  <a href="product.html">Projetos</a>
                </li>
                <li>
                  <a href="portfolio-detail-v1.html">Galleria</a>
                </li>
                <li>
                  <a href="blog-list.html">Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contato</a>
                </li>
              </ul>
              <div className="social">
                <a href="" className="social__item social__item--circle">
                  <i className="zmdi zmdi-facebook"></i>
                </a>
                <a href="" className="social__item social__item--circle">
                  <i className="zmdi zmdi-dribbble"></i>

                </a>
                <a href="" className="social__item social__item--circle">
                  <i className="zmdi zmdi-google"></i>

                </a>
                <a href="" className="social__item social__item--circle">
                  <i className="zmdi zmdi-twitter"></i>
                </a>
                <a href="" className="social__item social__item--circle">
                  <i className="zmdi zmdi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    <section className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            Copyright © 2020 Grupo Easy care
            <span> Balaio da criação </span> . Todos direitos deservados
          </div>
        </div>
      </div>
    </section>
    <div>
    <a href="" id="btn-to-top">
    <i className="fa fa-chevron-up"></i>
    </a>
    
  </div>
      <FooterCopyright />
    </>
  );
}
