import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>

      <footer>
        <div className="overlay overlay--dark">
        </div>
        <div className="parallax parallax--footer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9 col-12">
                <h1>
                  <a href="index.html">
                    <img alt="Logo" src="images/icon.png" />
                  </a>
                </h1>
                <form method="post" className="form-footer">
                  <input type="text" name="name" className="form__input" placeholder="Seu E-mail..." />
                  <button type="submit" className="au-btn au-btn--yellow au-btn--white au-btn--submit">ENVIAR</button>
                </form>
                <ul className="ul--inline ul--footer">
                  <li>
                    <a href="/sobre">Sobre</a>
                  </li>
                  <li>
                    <a href="/projetos">Projetos</a>
                  </li>
                  <li>
                    <a href="/servicos">Serviços</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contato">Contato</a>
                  </li>
                  <li>
                    <a href="/politica-de-privacidade">Polica de privacidade</a>
                  </li>
                </ul>
                <div class="col-md-12 col-sm-12">
                  <br/>
                  <ul class="social_icon heading_space">
                    <li><a href="#." class="facebook"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#." class="twitter"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#." class="dribble"><i class="fab fa-pinterest-p"></i></a></li>
                    <li><a href="#." class="instagram"><i class="fab fa-instagram"></i></a></li>
                  </ul>
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
    </>
  );
}
