import React from "react";

export default function Sobre() {
  return (
    <section className="our-process">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <h2 className="title">
              our
              <span>
                process
              </span>
            </h2>
            <p className="title-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="our-process__item our-process__item--l-b">
              <h3>
                <i className="zmdi zmdi-accounts-alt"></i>
                meet
              </h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="our-process__item our-process__item--l-t">
              <h3>
                <i className="zmdi zmdi-library"></i>
                discussion
              </h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="our-process__item our-process__item--l-b">
              <h3>
                <i className="zmdi zmdi-puzzle-piece"></i>
                ideal
              </h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="our-process__item">
              <h3>
                <i className="zmdi zmdi-city-alt"></i>
                construct
              </h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
