import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../Styles/navbar.css";
import { ReactComponent as Dev } from "../images/téléchargement.svg";
import { ReactComponent as Menu } from "../images/1491313929-menu_82986.svg";
import PortfolioImage from "../images/hero.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
    faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import Service from "./service";
import Experience from "./experience";





const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Dev />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Menu />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul className="nav-links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projets</NavLink>
              </li>
              <li>
                <NavLink to="/about">A propos</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="hero">
        <section className="section-center hero-center">
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h1>Je suis Bath Dorgeles</h1>
              <h4>Designer UI & Developpeur Web Et Mobile Freelance</h4>
              <a className="btn" href="/contact">
                contact Moi
              </a>
              <div className="social-links">
                <a href="" className="social-link">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="" className="social-link">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="" className="social-link">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="" className="social-link">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </article>
          <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained hero-img">
            <div className="imgPortfolio">
              <img src={PortfolioImage} alt="Image" />
            </div>
          </div>
        </section>
      </header>
      <Service />
      <Experience />
    </>
  );
};

export default Navbar;
