import React from "react";
import emailjs from "emailjs-com";

export default function Contato() {

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_dr9qz5r', 'template_7gs2kb9', e.target, 'user_NZAymuSZHwv0ESY8PdBfB')

    .then((result) => {
        alert("Mensagem enviada com sucesso! 👍");
       
    }, (error) => {
        alert(error.message)
        
    });
    e.target.reset()


}
  
  return (
    <>
      <section class="page_header padding-top">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center page-content">
        <h1>Contato</h1>
        <p>construindo e cuidando de uma infinidade de sonhos!</p>
        <div class="page_nav">
      <span>Você está aqui:</span> 
      <a href="/">Home</a> <span>
          <i class="fa fa-angle-double-right"></i>Contato </span>
      </div>
      </div>
    </div>
  </div>
</section>
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
            <div class="contato-container">       
      <span class="big-circle"></span>
      <img src="images/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Fale conosco</h3>
          <p class="text">
          Fale conosco através de um dos nossos contato! ou se preferir preencha nosso formulário e nos envia seu contato.!
          </p>

          <div class="info">
            <div class="information">
              <img src="images/location.png" class="icon" alt="" />
              <p>SIA Trecho 1 Lote 230 Sala 208, 209 e 211 - Guará, Brasília - DF, 71200-010</p>
            </div>
            <div class="information">
              <img src="images/email.png" class="icon" alt="" />
              <p>comercial@grupoeasycare.com.br</p>
            </div>
            <div class="information">
              <img src="images/phone.png" class="icon" alt="" />
              <p>(61) 3975-1779</p>
            </div>
          </div>

          <div class="social-media">
            <p>Nossas Redes Sociais:</p>
            <div class="social-icons">
              <a href="https://www.facebook.com/grupoeasycare/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://br.pinterest.com/easycareservicos">
                <i class="fab fa-pinterest-p"></i>
              </a>
              <a href="https://www.instagram.com/grupoeasycare/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://br.linkedin.com/in/grupo-easy-care-servi%C3%A7os-e-solu%C3%A7%C3%B5es-a3881b205">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form onSubmit={sendEmail}>
            <h3 class="title">Formulario de contato</h3>
            <div class="input-container">
              <input type="text" id="inputname" name="name" class="input" />
              <label for="">Nome</label>
              <span>Seu nome</span>
            </div>
            <div class="input-container">
              <input type="email" id="inputname" name="email" class="input" />
              <label for="">E-mail</label>
              <span>Seu E-mail</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Telefone</label>
              <span>Seu telefone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Mensagem</label>
              <span>Mensagem</span>
            </div>
            <input type="submit" value="Enviar" class="btn1" />
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}


