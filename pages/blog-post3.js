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
      
      <section id="cta" className="cta">
      <div className="container">

      <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li><a href="/index">Home</a></li>
          <li><a href="/blog">Blog</a></li>
        </ol>
        <h2>Como adotar o minimalismo em casa? 4 passos que vão te ajudar a se beneficiar desta prática e maximizar seu espaço e tempo livre!</h2>
      </div>
    </section>

      </div>
    </section>
    
      
    <section id="blog" className="blog">
      <div className="container">

        <div className="row">

          <div className="col-lg-8 entries">

            <article className="entry entry-single">

              <div className="entry-img">
                <img src="../images/blog-2.webp" alt="" className="img-fluid"/>
              </div>

              <h2 className="entry-title">
                <a href="blog-post3">Sabe aquela casa que quando você visita seu pensamento “fala” internamente: wowww! Então, gostaria de ter essa mesma sensação ao olhar a sua?</a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-user"></i> <a href="blog-single.html">Grupo Easy Care</a></li>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">01 de janeiro, 2021</time></a></li>
                  <li className="d-flex align-items-center"><i className="icofont-comment"></i> <a href="blog-single.html">0 Comentarios</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                Nesse post nós vamos falar um pouco sobre minimalismo, uma prática não tão nova, mas que vem ganhando muita força em nossos dias e, com certeza, será muito aplicada num futuro bem próximo.
                </p>

                <p>
                Ser minimalista é adotar ao pé da letra o famoso “menos é mais”.  O princípio do minimalismo é reduzir ao máximo o número de elementos e recursos da sua vida, fazendo assim com que a sua organização física, visual e mental, possam exigir menos de você.  Agora, se você se considera uma pessoa extremamente materialista, também vai precisar praticar o desapego. 
                </p>
                <p>Praticar o desapego é a parte mais difícil do minimalismo.  Não que seja impossível, mas é um processo rígido e pode exigir muito de você.  Primeiro, esta prática deve estar muito bem decidida internamente, na mente e na alma, caso contrário, você pode se desapontar consigo mesmo e desencadear alguns sentimentos de frustração.  E tenha certeza: não é isso que queremos! 
                  </p>
                <blockquote>
                  <i className="icofont-quote-left quote-left"></i>
                  <p>
                  Esse desapego começa com o seguinte pensamento: “menos é mais!” Aí você se pergunta:  Como assim?
                  </p>
                  
                  <i className="las la-quote-right quote-right"></i>
                  <i className="icofont-quote-right quote-right"></i>
                </blockquote>
                <strong>Vamos lá!</strong>
                <p>Ser minimalista ou, ter uma casa minimalista, não significa de modo algum que você vai precisar ter apenas um garfo e uma faca para cada morador, se desfazer dos seus móveis e muito menos pintar todas as suas paredes de branco.  Esse pensamento sobre o minimalismo é completamente errôneo e faz com que muitas pessoas desistam dele antes mesmo de tentar.</p>
                <p>Para os minimalistas já convictos, o lema é: <strong>“tudo o que eu possuo deve existir para algo”. </strong> Ou seja, tudo que você tem materialmente, tem que ter um significado ou uma utilidade.</p>
                <p>Em suma, ser minimalista é possuir somente o que você realmente precisa, seja material ou emocionalmente.  Imagine a seguinte situação: Na sua casa você possui um jogo de copos com 6 unidades para o dia a dia, mas dentro do armário você tem mais 4 copos de outros jogos que foram se quebrando com o passar do tempo. Mesmo assim, você continua os mantendo lá somente para tê-los, mas na verdade estão mesmo cheios de poeira.  Se os outros 6 te bastam, desapegar desses 4 que não têm mais sentido no seu dia a dia é praticar o minimalismo.</p>
                <strong>Com isso em mente, vamos às dicas:</strong>
                 <h3>1. Funcionalidade acima de tudo</h3>

                <p>
                Como dissemos acima, você não vai sair por aí se desfazendo dos seus objetos sem antes fazer uma análise muito crítica.  O princípio da funcionalidade está ligado diretamente à necessidade do que você já possui ou do que pretende adquirir.</p>  

                <p>Sabe aquele multiprocessador que você nunca usa, pois além de ser difícil de lavar, você tem o hábito de cortar os seus legumes com a faca ou com um mandolin?  Então, esse multiprocessador não é funcional e ainda te consome tempo.  Se desfaça dele!</p>
                  <p>Isso se aplica a tudo que você possui.  Vamos dar mais exemplos.  Veja os excessos que geralmente temos em casa:</p>
                  <div className="sidebar-item categories">
                <ul>
                  <li><a href="#">Vários jogos de talheres misturados </a></li>
                  <li><a href="#">Toalhas de banho que dariam para ser utilizadas por mais 2 famílias </a></li>
                  <li><a href="#">Excesso de almofadas nos sofás </a></li>
                  <li><a href="#">Tapetes guardados para substituir os que estão no uso </a></li>
                  <li><a href="#">Roupas de cama incontáveis, que acabamos guardando para receber visitas </a></li>
                  <li><a href="#">Lembranças “souvenirs” de viagens que só acumulam poeira </a></li>
                  <li><a href="#">Panelas em excesso, formas para bolos, potes para comida e afins </a></li>
                  <li><a href="#">Fios de telefone, carregadores, cabos de eletrônicos </a></li>
                </ul>
                <p>Ufa, olha quanta coisa!  Esses objetos guardados, geralmente nunca são usados, ocupam espaço e dificultam a limpeza dos móveis onde estão estocados.</p>
                <p>Agora estamos conseguindo entender melhor o que é ser minimalista.  Você não precisa ter apenas 7 camisas e doar as outras, mas precisa se desfazer das que não utiliza.  Seu guarda-roupas ou closet além de ficar mais organizado, vai te permitir uma limpeza fácil e frequente.</p>
                <p>Veja mais alguns exemplos:  colchões infláveis, caixas de sapatos, calçados em excesso, pastas com documentos fora da validade e/ou contas pagas.  Tudo isso pode estar te atrapalhando a ter uma vida mais fácil e saudável.</p>
                <p>Pense em cada cômodo da sua casa com cautela e examine o seu dia a dia.  Você com certeza vai encontrar muitos objetos que nem se dava conta que ainda existiam, e estão aí somente para atrapalhar a sua organização e a funcionalidade do seu ambiente.</p>
                </div>

                <h3>2. Desapego x vínculo emocional</h3>
                <p>
                Essa é uma parte muito importante do seu processo de mudança para o minimalismo.  Como fazer para me desapegar do que tenho um vínculo emocional muito forte?  Simples: <strong>não desapegue!</strong>
                </p>
                <p>Todo nós temos algo que nos traz boas lembranças e nos conecta com alguém ou com algum momento do passado.  Seja uma coleção de disco de vinil ou de livros.  Se é importante para você e te causa uma boa sensação ao ver esses objetos ou estar próximo deles, os mantenha.  
                  São eles que vão dar sentido à sua nova etapa nessa empreitada.  Mas aqueles outros que não te causam essa mesma sensação não devem continuar no seu espaço.  É essa divisão, do que te serve e é funcional, com o que não faz mais sentido ser mantido, que vai começar a dar significado à limpeza visual da sua casa e te tornar uma pessoa minimalista.</p>
                <h3>3. Móveis</h3>
                <p>
                Não, você não precisa doar nem jogar seus móveis fora.  O que você precisa fazer é olhar para a sua sala e ver se tudo faz sentido.  Sabe aquela poltrona velha que está no canto da sala há anos, mas ninguém a usa?  Então, pode ter alguém precisando dela.  E é aí que entra a parte mais legal desse nosso papo. 
                Além de nos tornarmos pessoas mais práticas, podemos ajudar os outros.  Bom, né?</p>
                <p>Nós, por costume e tradição, temos como predefinição que toda sala de estar, por exemplo, deve ter um jogo de sofás enorme, uma mesa de jantar, um móvel para a TV, um aparador para um vaso de cerâmica, uma planta no canto, uma mesinha de centro e um tapete juntando poeira.</p>
                <p>
                Será que a sua sala realmente precisa disso tudo?  Para você é mais confortável assistir à TV no quarto? Você mal usa a sua TV da sala? Então, por que mantê-la?  Lembre-se:  você não precisa jogá-la fora nem doá-la, mas pode movê-la para outro lugar da sua casa onde ela será muito melhor aproveitada.  Isso também é minimalismo. 
                </p>
                <p>Passando para a sua cozinha, imagine a seguinte situação: você tem uma mesa na cozinha e outra na sala, mas a sua família sempre faz as refeições na cozinha ou até mesmo no sofá.  Solução? Troque a mesa da sala por um futon aconchegante ou, simplesmente se desfaça dela e ganhe espaço.  Você vai ter menos um móvel para limpar e sua sala vai ficar visivelmente maior. </p>
                <p>Este conceito dos móveis serve para todos os seus cômodos.  Olhe para seu quarto com carinho.  Se tiver algo que você não usa há meses, já sabe, né?</p>
                <h3>4. Substitua seus móveis por móveis planejados</h3>
                <p>Agora vou lhe dar uma solução caso você precise muito de um móvel que não utiliza com frequência, mas que porventura, uma vez ou outra, pode fazer falta na sua casa.  Vamos nessa!</p>
                <p>Pense na mesa da sua cozinha.  Pensou?  Será que ela não poderia ser substituída por uma mesa do tipo dobrável, que fica fixada na parede e você consegue desmontar quando não a estiver usando?</p>
                <p>E a mesinha do centro de sala?  Você não acha que ela pode facilmente ser substituída por uma daquelas mesas que se encaixam por baixo do aparador e são utilizadas somente quando necessário, liberando assim o trânsito no meio do seu cômodo? Com certeza sim!</p>
                <p>Hoje em dia existem diversas opções multifuncionais de móveis.  Camas que são dobradas verticalmente na parede após o uso, e se transformam em estantes com prateleiras; prateleiras de salas de estar, que quando são puxadas para baixo, viram mesa para trabalho home office ou refeições; bancos externos, para a sua varanda ou quintal, que viram mesa para as suas 
                comemorações com a sua família e seus amigos, e até mesmo gavetas secretas que podem ser planejadas previamente e já virem embutidas em seus sofás, camas, sob suas escadas de madeira e muitos outros móveis.</p>
                <p>Legal, né?  Os móveis planejados sempre são bem-vindos quando falamos de minimalismo.  Eles dão um toque essencial na decoração da sua casa e tornam tudo muito mais prático e funcional.</p>
                <p><strong>Lembre-se sempre:</strong> uma casa minimalista deve fazer sentido para os moradores.  Se questione:  isso faz sentido pra mim?  Posso replanejar minha cozinha e meu quarto para viver melhor?  </p>
                <blockquote>
                  <i className="icofont-quote-left quote-left"></i>
                  <p>
                  Não se esqueça: menos é mais!
                  </p>
                  
                  <i className="las la-quote-right quote-right"></i>
                  <i className="icofont-quote-right quote-right"></i>
                </blockquote>
                <p>Aqui no Grupo Easy Care, você conta com um time que está preparado para lhe ajudar a planejar e executar seus projetos, transformando a sua casa não funcional em uma casa minimalista inovadora e prática. Desenvolvemos os seus móveis de um jeito superespecial e só seu! Conte com a gente! </p>
                <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>Faça seu orçamento com a nossa equipe:</h3>
              <p>  61 3975-1779</p>
            </div>
                
              </div>

              <div className="entry-footer clearfix">
                <div className="float-left">
                  <i className="icofont-folder"></i>
                  <ul className="cats">
                    <li><a href="#">Grupo Easy Care</a></li>
                  </ul>

                  <i className="icofont-tags"></i>
                  <ul className="tags">
                    <li><a href="#">Construindo e cuidando dos seus sonhos</a></li>
                  </ul>
                </div>

                <div className="float-right share">
                  <a href="" title="Share on Twitter"><i className="icofont-twitter"></i></a>
                  <a href="" title="Share on Facebook"><i className="icofont-facebook"></i></a>
                  <a href="" title="Share on Instagram"><i className="icofont-instagram"></i></a>
                </div>

              </div>

            </article>

          </div>

          <div className="col-lg-4">

            <div className="sidebar">

              <h3 className="sidebar-title">Pesquisar</h3>
              <div className="sidebar-item search-form">
                <form action="">
                  <input type="text"/>
                  <button type="submit"><i className="icofont-search"></i></button>
                </form>

              </div>

              <h3 className="sidebar-title">Categorias</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li><a href="#">Moveis Planejados <span>(25)</span></a></li>
                  <li><a href="#">MENOS É MAIS <span>(12)</span></a></li>
                  <li><a href="#">CORES <span>(5)</span></a></li>
                  <li><a href="#">MADEIRAS <span>(22)</span></a></li>
                  <li><a href="#">TECIDOS <span>(8)</span></a></li>
                  <li><a href="#">NATUREZA <span>(14)</span></a></li>
                </ul>

              </div>

              <h3 className="sidebar-title"> Posts Recente</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src="../images/grupoeasycare.com.br__blog-1.webp" alt=""/>
                  <h4><a href="blog-detalhado">Tendências de decoração para 2021</a></h4>
                  <time datetime="2020-01-01">01 de janeiro, 2021</time>
                </div>

                <div className="post-item clearfix">
                  <img src="../images/blog-2.jpg" alt=""/>
                  <h4><a href="blog-single.html">6 dicas para transformar sua cozinha em 2021</a></h4>
                  <time datetime="2020-01-01">01 de Junho, 2021</time>
                </div>

                <div className="post-item clearfix">
                  <img src="../images/blog-3.webp" alt=""/>
                  <h4><a href="/blog-post3">Como adotar o minimalismo em casa? 4 passos que vão te ajudar a se beneficiar desta prática e maximizar seu espaço e tempo livre!</a></h4>
                  <time datetime="2020-01-01">28 Janeiro, 2021</time>
                </div>

                <div className="post-item clearfix">
                  <img src="../images/blog-4.webp" alt=""/>
                  <h4><a href="blog-single.html">3 ideias de nichos de parede para a sua casa em 2021</a></h4>
                  <time datetime="2020-01-01">20 de Janho, 2021</time>
                </div>

              </div>

              <h3 className="sidebar-title">Tags</h3>
              <div className="sidebar-item tags">
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

<div classNameName="row special-list">{Blog}</div>;
