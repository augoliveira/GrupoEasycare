import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>
      <InstagramFeed />
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>Sobre Grupo Easy care</h4>
                  <p>
                    Estamos há 5 anos no mercado empenhados na prestação de
                    serviços de móveis planejados, pedras esculpidas e,
                    atualmente, trabalhamos com engenharia, automação
                    residencial, energia fotovoltaica e serviços financeiros.
                  </p>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/grupoeasycare/">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/grupoeasycare/">
                        <i
                          className="fab fa-instagram"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://br.pinterest.com/easycareservicos">
                        <i
                          className="fab fa-pinterest-p"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://api.whatsapp.com/send?phone=5561998581779">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>Links</h4>
                  <ul>
                    <li>
                      <a href="#">Sobre-nós</a>
                    </li>
                    <li>
                      <a href="#">Serviços</a>
                    </li>
                    <li>
                      <a href="#">Projetos</a>
                    </li>
                    <li>
                      <a href="#">Politica de privacidade</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4>Nossos contato</h4>
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>Endereço: Lote
                        230 - Guará Brasília - DF,{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-phone-square"></i>Televenda:{" "}
                        <a href="tel: 61 3975-1779"> 61 3975-1779</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-envelope"></i>Email:{" "}
                        <a href="mailto:contactinfo@gmail.com">
                          comercial@grupoeasycare.com.br
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterCopyright />
    </>
  );
}
