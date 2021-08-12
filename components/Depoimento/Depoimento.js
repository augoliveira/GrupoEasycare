import React from "react";

export default function Depoimento() {
  return (
    <section id="testimonials" className="section-bg">
      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h3>Testemunho</h3>
        </header>

        <div className="owl-carousel testimonials-carousel">

          <div className="testimonial-item">
            <img src="assets/img/testimonial-1.jpg" className="testimonial-img" alt=""/>
            <h3>Daniela Goes</h3>
            <p>
              <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt=""/>
              Gostei demais do trabalho, do atendimento,
              do prazo e do preço! Enfim, virei cliente. Parabéns!
              Precisamos, no mercado, de empresas que trabalham
              com excelência. Fiquei feliz e realizada.
              <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt=""/>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="assets/img/testimonial-2.jpg" className="testimonial-img" alt=""/>
            <h3>Vanessa Almeida</h3>
            <p>
              <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt=""/>
              Ficou muito bom. Adorei.
              Obrigada por fazerem o projeto do
              jeitinho que eu queria.
              <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt=""/>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
