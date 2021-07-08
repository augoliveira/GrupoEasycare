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

      <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <ol>
          <li><a href="/index">Home</a></li>
          <li><a href="/blog">Blog</a></li>
        </ol>
        <h2>3 ideias de nichos de parede para a sua casa em 2021</h2>
      </div>
    </section>

      </div>
    </section>
    
      
    <section id="blog" class="blog">
      <div class="container">

        <div class="row">

          <div class="col-lg-8 entries">

            <article class="entry entry-single">

              <div class="entry-img">
                <img src="../images/blog-4.jpg" alt="" class="img-fluid"/>
              </div>

              <h2 class="entry-title">
                <a href="blog-single.html">Todo mundo gosta de uma casa bem arrumada e, principalmente, bem organizada, não é mesmo?  Apesar disso, muitas das vezes por comprarmos nossos objetos de decoração por impulso ou por não haver um planejamento prévio, acabamos por sobrecarregar os ambientes com informações demais e, o que antes deveria ser uma parede linda e bem paramentada, acaba virando um caos e poluindo visualmente os ambientes.</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">Grupo Easy Care</a></li>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">01 de janeiro, 2021</time></a></li>
                  <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">0 Comentarios</a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                Nesse post nós vamos falar um pouco sobre minimalismo, uma prática não tão nova, mas que vem ganhando muita força em nossos dias e, com certeza, será muito aplicada num futuro bem próximo.
                </p>

                <p>
                Nos dias de hoje, existe no mercado do alto consumo e planejamento, uma gama infinita de acessórios e objetos de decoração que facilitam a organização e a ornamentação da sua casa.  Difícil mesmo é escolher qual é a melhor opção.  
                </p>
                <p>Se o seu projeto inclui deixar as suas paredes com um toque arrojado e completamente atual, eu lhe digo:  a melhor opção para isso são os nichos!
                  </p>
                <blockquote>
                  <i class="icofont-quote-left quote-left"></i>
                  <p>
                  Os nichos são objetos das mais variadas formas e materiais, que são instalados nas paredes e têm por finalidade organizar, separar e proteger os seus itens de decoração, coleção ou material de uso diário.  
                  Eles podem ser produzidos sob encomenda e fixados como se fossem prateleiras, ou ainda podem ser embutidos na sua parede, caso você esteja planejando sua casa do zero e já preveja a instalação deles nos locais adequados.
                  </p>
                  
                  <i class="las la-quote-right quote-right"></i>
                  <i class="icofont-quote-right quote-right"></i>
                </blockquote>
                <p>Eles estão sempre ali, visíveis e acessíveis.  Então, é sim possível instalar nichos em qualquer cômodo.  Nichos vão facilitar a sua vida seja no seu quarto, na sala, cozinha, banheiro ou até mesmo na área de serviço.</p>
                 <p>Separamos algumas ideias para te ajudar a escolher as melhores opções para os cômodos do seu lar.  Vamos ver?</p>
                 <h3>1. Nichos simples</h3>
                 <img src="../images/post-nichos-quadrado.jpg" alt="" class="img-fluid"/>

                <p>
                Os nichos simples podem ter várias formas, mas o mais utilizado é o quadrado.  Porém, você não precisa se prender a isso.  É possível solicitar uma produção de um nicho no formato que desejar.  Eles podem ser redondos, retangulares, hexagonais e de muitos outros formatos.  O material mais utilizado para a sua confecção é o MDF.</p>  

                <p>Nichos simples servem para dar destaque a um objeto importante, evidenciar seus livros, plantas e tudo mais que você julgar que deva ganhar um cantinho especial na sua parede.</p>
                  <p>No banheiro, você pode utilizá-los para expor difusores de essências aromatizantes, perfumes e outros acessórios.</p>
                  
                <p>É possível utilizar um, dois ou mais nichos nivelados vertical ou horizontalmente na mesma parede.  Com isso, você vai ser capaz de compor um ambiente inteiro e dar vida a elas.  </p>
                <p>Caso seja de sua preferência, os nichos também podem ser instalados sem seguir uma linha reta.  Deixe sua imaginação fluir e os espalhe pelos espaços vazios das paredes.  O resultado será incrível.</p>
                <h3>2. Nichos agrupados</h3>
                <img src="../images/post-nichos.jpg" alt="" class="img-fluid"/>
                <p>
                Agrupar nichos é uma ótima ideia para construir formas das mais variadas.  Neste caso, você pode utilizar os nichos quadrados, quadrados com retangulares e os hexagonais, que são os que mais surtem efeitos diferentes.
                </p>
                <p>Pela sua forma muito peculiar, os nichos hexagonais (com seis lados), desde que sejam todos produzidos no mesmo tamanho, se encaixam perfeitamente uns aos outros.  As possibilidades de criação com eles são inúmeras.  Ao final, ficam parecendo uma colmeia.  Puro requinte!</p>
                <p>
                Mas atenção! Antes de colocar a mão na massa, é preciso planejar como será a sua composição de nichos hexagonais.  Você pode agrupar quantos nichos desejar e até mesmo misturar as cores.  Saia do tradicional e tenha certeza de que eles darão uma ótima impressão às suas paredes.  Os nichos hexagonais são versáteis e se adaptam a qualquer ambiente.  Não tenha medo de ousar!</p>
                <h3>3. Estante de nichos</h3>
                <img src="../images/blog-nincho-post.jpg" alt="" class="img-fluid"/>
                <p>Agora me diga: Por que utilizar apenas um nicho, se você pode uni-los num projeto prévio e ter uma estante mega elegante?  As estantes feitas de nicho estão em alta e com elas você consegue aproveitar alguns cantos da sua casa que antes pareciam impossíveis.  Um ótimo exemplo são os “espaços mortos” sob as escadas, no caso da sua casa ter mais de um pavimento.</p>
                <p>Esta opção de nicho é mais complexa e não basta ir à uma loja e comprar vários nichos e anexar um ao outro na parede.  Uma estante feita de nichos requer um projeto cuidadoso e uma medição precisa.  É para isso que estamos aqui.  Para te ajudar a ter o melhor dos projetos para a sua casa, com a qualidade e a pontualidade que somente o Grupo Easy Care tem.</p>
                <strong>Te ajudamos com os seus nichos desde o planejamento até a instalação.  </strong>
                <div class="info-box">
              <i class="bx bx-phone-call"></i>
              <h3>Faça seu orçamento com a nossa equipe:</h3>
              <p>  61 3975-1779</p>
            </div>
                
              </div>

              <div class="entry-footer clearfix">
                <div class="float-left">
                  <i class="icofont-folder"></i>
                  <ul class="cats">
                    <li><a href="#">Grupo Easy Care</a></li>
                  </ul>

                  <i class="icofont-tags"></i>
                  <ul class="tags">
                    <li><a href="#">Construindo e cuidando dos seus sonhos</a></li>
                  </ul>
                </div>

                <div class="float-right share">
                  <a href="" title="Share on Twitter"><i class="icofont-twitter"></i></a>
                  <a href="" title="Share on Facebook"><i class="icofont-facebook"></i></a>
                  <a href="" title="Share on Instagram"><i class="icofont-instagram"></i></a>
                </div>

              </div>

            </article>

          </div>

          <div class="col-lg-4">

            <div class="sidebar">

              <h3 class="sidebar-title">Pesquisar</h3>
              <div class="sidebar-item search-form">
                <form action="">
                  <input type="text"/>
                  <button type="submit"><i class="icofont-search"></i></button>
                </form>

              </div>

              <h3 class="sidebar-title">Categorias</h3>
              <div class="sidebar-item categories">
                <ul>
                  <li><a href="#">Moveis Planejados <span>(25)</span></a></li>
                  <li><a href="#">MENOS É MAIS <span>(12)</span></a></li>
                  <li><a href="#">CORES <span>(5)</span></a></li>
                  <li><a href="#">MADEIRAS <span>(22)</span></a></li>
                  <li><a href="#">TECIDOS <span>(8)</span></a></li>
                  <li><a href="#">NATUREZA <span>(14)</span></a></li>
                </ul>

              </div>

              <h3 class="sidebar-title"> Posts Recente</h3>
              <div class="sidebar-item recent-posts">
                <div class="post-item clearfix">
                  <img src="../images/blog-1.jpg" alt=""/>
                  <h4><a href="blog-detalhado">Tendências de decoração para 2021</a></h4>
                  <time datetime="2020-01-01">01 de janeiro, 2021</time>
                </div>

                <div class="post-item clearfix">
                  <img src="../images/blog-2.jpg" alt=""/>
                  <h4><a href="blog-single.html">6 dicas para transformar sua cozinha em 2021</a></h4>
                  <time datetime="2020-01-01">01 de Junho, 2021</time>
                </div>

                <div class="post-item clearfix">
                  <img src="../images/blog-3.jpg" alt=""/>
                  <h4><a href="blog-single.html">Como adotar o minimalismo em casa? 4 passos que vão te ajudar a se beneficiar desta prática e maximizar seu espaço e tempo livre!</a></h4>
                  <time datetime="2020-01-01">28 Janeiro, 2021</time>
                </div>

                <div class="post-item clearfix">
                  <img src="../images/blog-4.jpg" alt=""/>
                  <h4><a href="blog-single.html">3 ideias de nichos de parede para a sua casa em 2021</a></h4>
                  <time datetime="2020-01-01">20 de Janho, 2021</time>
                </div>

              </div>

              <h3 class="sidebar-title">Tags</h3>
              <div class="sidebar-item tags">
                <ul>
                  <li><a href="#">Moveis planejados</a></li>
                  <li><a href="#">2. Ilhas</a></li>
                  <li><a href="#">3. Iluminação</a></li>
                  <li><a href="#">6. Ajuda profissional</a></li>
                </ul>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  
    </>
  );
}

<div className="row special-list">{Blog}</div>;
