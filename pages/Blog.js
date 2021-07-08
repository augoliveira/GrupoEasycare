import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox servicos/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function Blog() {
  return (
    <>
      
      <section id="cta" class="cta">
      <div class="container">

      <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">Blog Grupo Easy care.</h1>
            <p class="lead my-3">
              Acompanhe nossas atualização em nosso blog.
            </p>
          <a class="cta-btn" href="#">Mais post</a>
        </div>

      </div>
    </section>
    
      
      <section id="blog" class="blog">
      <div class="container">

        <div class="row">

          <div class="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <article class="entry">

              <div class="entry-img">
                <img src="../images/blog-1.jpg" alt="" class="img-fluid"/>
              </div>

              <h2 class="entry-title">
                <a href="blog-single.html">Tendências de decoração para 2021</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center">
                    <i class="icofont-user"></i> <a href="blog-single.html">Grupo Easy care</a></li>
                  <li class="d-flex align-items-center">
                    <i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">01 de janeiro, 2021</time></a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                Esteja atento as maiores tendências de decoração de interiores para 2021 que vão dar uma cara nova à sua casa. 
                Viramos a página de 2020 e recebemos 2021 com esperança, otimismo e energia renovada.
                </p>
                <div class="read-more">
                  <a href="/blog-detalhado">Continuar lendo</a>
                </div>
              </div>

            </article>
          </div>

          <div class="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <article class="entry">

              <div class="entry-img">
                <img src="../images/blog-2.jpg" alt="" class="img-fluid"/>
              </div>

              <h2 class="entry-title">
                <a href="/blog-post">6 dicas para transformar sua cozinha em 2021</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center">
                    <i class="icofont-user"></i> <a href="blog-single.html">Grupo Easy Care</a></li>
                  <li class="d-flex align-items-center">
                    <i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">01 de Junho, 2021</time></a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                Muitas pessoas concordam que a cozinha é um dos melhores lugares da casa para se passar bons momentos em família.
                </p>
                <div class="read-more">
                  <a href="/blog-post">Continuar lendo</a>
                </div>
              </div>

            </article>
          </div>

          <div class="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <article class="entry">

              <div class="entry-img">
                <img src="../images/blog-3.jpg" alt="" class="img-fluid"/>
              </div>

              <h2 class="entry-title">
                <a href="/blog-post3">Como adotar o minimalismo em casa? 4 
                passos que vão te ajudar a se beneficiar desta prática e maximizar seu espaço e tempo livre!</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center">
                    <i class="icofont-user"></i> <a href="blog-single.html">Grupo Easy Care</a></li>
                  <li class="d-flex align-items-center">
                    <i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">28 Janeiro, 2021</time></a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                Sabe aquela casa que quando você visita seu pensamento <strong> “fala” </strong> internamente: <strong>wowww! </strong> Então, gostaria de ter essa mesma sensação ao olhar a sua?
                </p>
                <div class="read-more">
                  <a href="/blog-post3">Leia mais</a>
                </div>
              </div>

            </article>
          </div>

          <div class="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <article class="entry">

              <div class="entry-img">
                <img src="../images/blog-4.jpg" alt="" class="img-fluid"/>
              </div>

              <h2 class="entry-title">
                <a href="/blog-3-ideias-de-nichos">3 ideias de nichos de parede para a sua casa em 2021</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center">
                    <i class="icofont-user"></i> <a href="blog-single.html">Grupo Easy Care</a></li>
                  <li class="d-flex align-items-center">
                    <i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01"> 20 de Junho 2021</time></a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                Todo mundo gosta de uma casa bem arrumada e, principalmente, bem organizada, não é mesmo?  Apesar disso, muitas das vezes por comprarmos nossos objetos de decoração por impulso ou por não haver um planejamento prévio, acabamos por sobrecarregar os ambientes com informações demais e,
                o que antes deveria ser uma parede linda e bem paramentada, acaba virando um caos e poluindo visualmente os ambientes. 
                </p>
                <div class="read-more">
                  <a href="/blog-3-ideias-de-nichos">Continuar lendo</a>
                </div>
              </div>

            </article>
          </div>
        </div>

        <div class="blog-pagination" data-aos="fade-up">
          <ul class="justify-content-center">
            <li class="disabled"><i class="icofont-rounded-left"></i></li>
            <li><a href="#">1</a></li>
            <li class="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#"><i class="icofont-rounded-right"></i></a></li>
          </ul>
        </div>

      </div>
    </section>
  
    </>
  );
}

<div className="row special-list">{Blog}</div>;
