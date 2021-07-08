import React from "react";
import dynamic from "next/dynamic";



import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";
import Formulario from "../components/Formulario/formulario";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function portfoliodetalhe() {
  return (
    <>
  
<main id="main">
 <section id="breadcrumbs" className="breadcrumbs">
 <div className="container-fluid">

   <div className="row justify-content-center">
     <div className="col-xl-10">
       <ol>
         <li><a href="index.html">Home</a></li>
         <li>Portfolio Detalhe</li>
       </ol>
       <h2>Portfolio Detalhe</h2>
     </div>
   </div>

 </div>
</section>


<section id="portfolio-details" className="portfolio-details">
 <div className="container-fluid">

   <div className="row justify-content-center">
     <div className="col-xl-10">
       <div className="row">

         <div className="col-lg-8">
           <div className="owl-carousel portfolio-details-carousel">
             <img src="/images/portfolio-1.jpg" className="img-fluid" alt=""/>
             <img src="/images/portfolio-2.jpg" className="img-fluid" alt=""/>
             <img src="/images/portfolio-3.jpg" className="img-fluid" alt=""/>
           </div>
         </div>

         <div className="col-lg-4 portfolio-info">
           <ul>
             <li><strong>Categoria</strong>: Móveis planejados</li>
             <li><strong>Cliente</strong>: nome</li>
             <li><strong>Data do projeto</strong>: 01 março, 2021</li>
             <li><strong> URL Projeto</strong>: <a href="#">www.Grupoeasycare.com.br</a></li>
           </ul>

           <p>
           Estamos há 5 anos no mercado empenhados na prestação de serviços de móveis planejados, pedras esculpidas e, atualmente, atuamos com engenharia, automação residencial, energia fotovoltaica e serviços financeiros.
           </p>
            </div>

          </div>
        </div>
      </div>

    </div>
 </section>
  

 </main>main
  
      
     
       <Formulario />
              
      </>
   
     );
   }
   
   <div classNameNameName="row special-list">{portfoliodetalhe}</div>;