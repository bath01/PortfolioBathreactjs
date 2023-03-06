import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dev } from "../images/téléchargement.svg";
import { ReactComponent as Menu } from "../images/1491313929-menu_82986.svg";
import "../Styles/contact.css";

const Contact = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar backgroun">
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
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                row="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  );
};

export default Contact;
