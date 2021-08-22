import React from "react";
export default function formulario() {
  return (


    <div className="Formulario">
      <div className="container">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="service-block-inner">
              <h1 className="noo-sh-title">Dê início a casa dos seus sonhos</h1>
            </div>
          </div>



          <div className="contato-container">
      <span className="big-circle"></span>
      <img src="images/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Fale conosco</h3>
          <p className="text">
          Fale conosco através de um dos nossos contato! ou se preferir preencha nosso formulário e nos envia seu contato.!
          </p>

          <div className="info">
            <div className="information">
              <img src="images/location.png" className="icon" alt="" />
              <p>SIA Trecho 1 Lote 230 Sala 208, 209 e 211 - Guará, Brasília - DF, 71200-010</p>
            </div>
            <div className="information">
              <img src="images/email.png" className="icon" alt="" />
              <p>comercial@grupoeasycare.com.br</p>
            </div>
            <div className="information">
              <img src="images/phone.png" className="icon" alt="" />
              <p>(61) 3975-1779</p>
            </div>
          </div>

          <div className="social-media">
            <p>Nossas Redes Sociais:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/grupoeasycare/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://br.pinterest.com/easycareservicos">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="https://www.instagram.com/grupoeasycare/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://br.linkedin.com/in/grupo-easy-care-servi%C3%A7os-e-solu%C3%A7%C3%B5es-a3881b205">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="title">Formulario de contato</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label form="">Nome</label>
              <span>Seu nome</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label form="">E-mail</label>
              <span>Seu E-mail</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label form="">Telefone</label>
              <span>Seu telefone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label form="">Mensagem</label>
              <span>Mensagem</span>
            </div>
            <input type="submit" value="Enviar" className="btn" />
          </form>
        </div>
      </div>
    </div>
</div>
</div>

  );
}


 <div className="row special-list">{formulario}</div>;
