import React from "react";


export default function Blog() {
  return (
    <>

      <section id="cta" className="cta">
        <div className="container">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Blog</h1>
            <p className="lead my-3">
              Acompanhe as novidades em nosso blog.
            </p>
            <a className="cta-btn" href="/blog-detalhado">Saiba mais</a>
          </div>
        </div>
      </section>
      <section id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <article className="entry">
                <div className="entry-img">
                  <img src="../images/grupoeasycare.com.br__blog-1.webp" alt="" className="img-fluid" />
                </div>
                <h2 className="entry-title">
                  <a href="/blog-detalhado">Tendências de decoração para 2021</a>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="icofont-user"></i> <a href="grupoeasycare.com.br">Grupo Easy care</a></li>
                    <li className="d-flex align-items-center">
                      <i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">01 de janeiro, 2021</time></a></li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>
                    Esteja atento as maiores tendências de decoração de interiores para 2021 que vão dar uma cara nova à sua casa.
                    Viramos a página de 2020 e recebemos 2021 com esperança, otimismo e energia renovada.
                  </p>
                  <div className="read-more">
                    <a href="/blog-detalhado"><strong>Leia mais</strong></a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <article className="entry">
                <div className="entry-img">
                  <img src="../images/blog-2.webp" alt="" className="img-fluid" />
                </div>
                <h2 className="entry-title">
                  <a href="/blog-post">6 dicas para transformar sua cozinha em 2021</a>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="icofont-user"></i> <a href="blog-single.html">Grupo Easy Care</a></li>
                    <li className="d-flex align-items-center">
                      <i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">01 de Junho, 2021</time></a></li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>
                    Muitas pessoas concordam que a cozinha é um dos melhores lugares da casa para se passar bons momentos em família.
                  </p>
                  <div className="read-more">
                    <a href="/blog-post"><strong>Leia mais</strong></a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <article className="entry">
                <div className="entry-img">
                  <img src="../images/blog-3.webp" alt="" className="img-fluid" />
                </div>
                <h2 className="entry-title">
                  <a href="/blog-post3">Como adotar o minimalismo em casa? 4
                    passos que vão te ajudar a se beneficiar desta prática e maximizar seu espaço e tempo livre!</a>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="icofont-user"></i> <a href="blog-single.html">Grupo Easy Care</a></li>
                    <li className="d-flex align-items-center">
                      <i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">28 Janeiro, 2021</time></a></li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>
                    Sabe aquela casa que quando você visita seu pensamento <strong> “fala” </strong> internamente: <strong>wowww! </strong> Então, gostaria de ter essa mesma sensação ao olhar a sua?
                  </p>
                  <div className="read-more">
                    <a href="/blog-post3"><strong>Leia mais</strong></a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <article className="entry">
                <div className="entry-img">
                  <img src="../images/blog-4.webp" alt="" className="img-fluid" />
                </div>
                <h2 className="entry-title">
                  <a href="/blog-3-ideias-de-nichos">3 ideias de nichos de parede para a sua casa em 2021</a>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="icofont-user"></i> <a href="grupoeasycare.com.br">Grupo Easy Care</a></li>
                    <li className="d-flex align-items-center">
                      <i className="icofont-wall-clock"></i> <a href=""><time datetime="2020-01-01"> 20 de Junho 2021</time></a></li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>
                    Todo mundo gosta de uma casa bem arrumada e, principalmente, bem organizada, não é mesmo?  Apesar disso, muitas das vezes por comprarmos nossos objetos de decoração por impulso ou por não haver um planejamento prévio, acabamos por sobrecarregar os ambientes com informações demais e,
                    o que antes deveria ser uma parede linda e bem paramentada, acaba virando um caos e poluindo visualmente os ambientes.
                  </p>
                  <div className="read-more">
                    <a href="/blog-3-ideias-de-nichos"><strong>Leia mais</strong></a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

<div classNameName="row special-list">{Blog}</div>;
