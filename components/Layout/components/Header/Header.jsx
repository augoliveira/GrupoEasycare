import React from "react";
import Link from "next/link";

import TopBar from "../TopBar/TopBar";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItemsCount = useSelector((state) => state.cart.length);
  return (
    <>
      <TopBar />
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" className="logo" alt="logo" class="img-fluid" title="Logo grupo easy care - móveis planejados" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link">Inicio</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">Sobre-Nós</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/projetos">
                    <a className="nav-link">Projetos</a>
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link href="/servicos">
                    <a className="nav-link">Serviços</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/Blog">
                    <a className="nav-link">Blog</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contato">
                    <a className="nav-link">Fale conosco</a>
                  </Link>
                </li>
              </ul>
            </div>

            
          </div>
        </nav>
      </header>
    </>
  );
}
