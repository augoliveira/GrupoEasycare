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
        <h2>6 dicas para transformar sua cozinha em 2021</h2>
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
                <img src="../images/blog-2.jpg" alt="" class="img-fluid"/>
              </div>

              <h2 class="entry-title">
                <a href="blog-single.html">Muitas pessoas concordam que a cozinha é um dos melhores lugares da casa para se passar bons momentos em família. 
                Outras, fazem de tudo para fugir dela.  Mas o que não se pode negar é que uma cozinha bem planejada, prática e funcional, enche os olhos de qualquer um, não é mesmo?</a>
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
                Quem nunca sentiu aquele brilho nos olhos ao ver aquele planejamento de primeira linha em uma revista, um filme ou até mesmo em uma novela?  Às vezes, pode parecer que 
                ter acesso à algumas funcionalidades atuais, custa caro e é uma realidade distante.  Mas isso não é verdade.
                </p>

                <p>
                Existem acessórios e ideias que podem transformar a sua cozinha sem muito trabalho.  Por isso é importante estar sempre antenado ao que há de novidades no mercado.
                </p>

                <blockquote>
                  <i class="icofont-quote-left quote-left"></i>
                  <p>
                  Neste artigo, vamos abordar 6 dicas que vão desde o planejamento até os mais variados detalhes que vão fazer da sua cozinha um espaço mais aconchegante e bem aproveitado.  

                  </p>
                  <i class="las la-quote-right quote-right"></i>
                  <i class="icofont-quote-right quote-right"></i>
                </blockquote>

                <h3>1. Planejar é fundamental</h3>

                <p>
                Seja a sua cozinha nova ou não, começar pelo planejamento para se obter o resultado desejado é fundamental.  
                Pense em cada ponto que vamos abordar, enumere as prioridades da sua família, 
                considere o acesso ou não das crianças a possíveis bancadas e, principalmente, 
                analise todos os eletrodomésticos que você possui ou pretende adquirir ao longo do tempo.  

                <p>Os eletrodomésticos da cozinha são aparelhos dos quais não podemos abrir mão e que geralmente demoram a ser substituídos.  
                  Contudo, sempre surge uma opção de um freezer com maior capacidade ou uma lava-louças maior.  
                  Preveja isso! Analise com calma suas necessidades e faça o seu projeto.  
                  Com ele em mãos vai ser mais fácil evitar dores de cabeça no futuro.</p>
                  <p>Com móveis sob medida é possível aproveitar cada cantinho do seu espaço e fazer com que ele seja muito mais funcional do que parecia antes.</p>
                  <img src="../images/blog-inside-post.jpg" class="img-fluid" alt=""/>

                </p>

                <h3>2. Ilhas</h3>
                <p>
                Considerando que você chegou até este artigo, é bem provável que dentre as muitas cozinhas que já viu, estejam as cozinhas que possuem ilhas. 
                As ilhas nada mais são do que móveis instalados no meio do espaço útil, o que torna a circulação e a instalação de armários sob medida nas paredes muito mais fácil e acessível.

                </p>
                <p>As ilhas trazem para as cozinhas um toque de sofisticação a mais. 
                  Com designs ousados e atuais, elas contribuem demais para a decoração e tornam seu espaço mais comunicável.</p>
                  <p>Em espaços pequenos é possível instalar ilhas com a retirada das paredes que geralmente dividem a sala da cozinha.  Se você possuir espaço para uma, pense nas várias possibilidades que ela pode te trazer, tais como: 
                    pia, cooktop, triturador de alimentos ou até mesmo uma bancada para refeições ou outro tipo de interação.</p>
                <img src="../images/blog-inside-post1.jpg" class="img-fluid" alt=""/>

                <h3>3. Iluminação</h3>
                <p>
                Tão importante quanto as ilhas do item anterior, é a iluminação de uma cozinha.  
                Luzes brancas sempre favorecem a este ambiente, pois diminuem a sensação de calor causada pelas lâmpadas de tons de amarelo.  Abuse delas!
 
                <p>Hoje em dia, com as fitas de LED, é possível utilizar luzes em volta, em cima, por baixo ou até mesmo dentro dos armários.  Além de tornar a sua cozinha muito mais elegante, a iluminação correta proporciona maior conforto para os olhos neste espaço que certas vezes nos ocupa grande parte do dia.</p>


                </p>
                <img src="../images/blog-inside-post2.jpg" class="img-fluid" alt=""/>
                <p>
                Luminárias em forma de pendentes ou trilhos estão em alta e combinam perfeitamente para o espaço sobre as ilhas ou mesas. 
                </p>
                <h3>4. Não economize nas gavetas</h3>
                <p>Está aqui um dos grandes trunfos de uma cozinha organizada: gavetas!  É muito comum que em projetos de cozinhas sob medida, surjam pedidos de grandes armários com prateleiras, e que as gavetas sejam deixadas exclusivamente para a parte que chamamos de “gaveteiro”.</p>
                <p>O problema desses armários é que se eles possuírem um espaço muito amplo entre uma prateleira e outra, acabam por desperdiçar uma área útil enorme devido à dificuldade de acomodação vertical dos seus utensílios (empilhamento).  A solução?  Gavetas internas!</p>
                <img src="../images/blog-inside-post3.jpg" class="img-fluid" alt=""/>
                <p>Essas gavetas são simplesmente sensacionais.  Além de proporcionar a utilização do espaço interno com um aproveitamento muito maior, elas ajudam a separar os seus pertences por categorias e evitam o tão temido empilhamento.</p>
                <h3>5. Capriche nas cores e no tipo de revestimento</h3>
                <p>Aqui entra um pouco da sua personalidade.  Não existe regra!  Sua cozinha pode ter tons homogêneos ou ser altamente colorida.  Além disso é possível utilizar os mais diversos tipos de material para revestir suas paredes e pisos. </p>
                <img src="../images/blog-inside-post4.jpg" class="img-fluid" alt=""/>
                <p>Azulejos decorativos estão super na moda.  Contudo, você pode utilizar cerâmicas, porcelanato, mármores e até mesmo pedras esculpidas.  Deixe sua imaginação fluir e lembre-se de adequar o revestimento ao tipo de luz e luminárias que irá utilizar.  Assim, sua decoração não entra em conflito com a iluminação.</p>
                <p>Uma boa dica se você é fã de novidades, é deixar uma parede reservada para um profissional de lettering pintar uma arte sob encomenda que seja “a cara da sua família”!</p>
                <img src="../images/blog-inside-post5.jpg" class="img-fluid" alt=""/>
                <h3>6.  Ajuda profissional</h3>
                <p>Existem algumas reformas ou alterações na sua casa que são altamente realizáveis com a ajuda de um amigo ou um parente que tenha além de disposição, aquele dom em alvenaria, arquitetura e decoração.  No entanto, é bastante aconselhável que você busque um profissional da área para te ajudar num projeto.</p>
                <p>Reformas planejadas, principalmente com móveis sob medida, dependendo do nível de alteração e da instalação de novas estruturas, podem ser bem mais </p>
                <p>trabalhosas do que parecem à primeira vista.  Um bom projeto feito por um profissional vai minimizar muito as chances de algo não sair da forma esperada e evitar frustrações futuras. </p>
                <blockquote>
                  <i class="icofont-quote-left quote-left"></i>
                  <p>
                  Pense a longo prazo e sempre opte pelo melhor para você e sua família! 

                  </p>
                  <i class="las la-quote-right quote-right"></i>
                  <i class="icofont-quote-right quote-right"></i>
                </blockquote>
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
