import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dev } from "../images/téléchargement.svg";
import { ReactComponent as Menu } from "../images/1491313929-menu_82986.svg";
import "../Styles/contact.css";
import axios from "axios";

const Contact = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
    };

    fetch("http://localhost:3001/usersCreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setName("");
    setEmail("");
    setMessage("");
    alert("User envoyé !");
  };

const [data, setData] = useState([]);

useEffect(() => {
  fetch("http://localhost:3001/users")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error(error));
}, []);




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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                row="5"
                placeholder="message"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
        <br></br>
        <br></br>
        <article className="contact-form">
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <p>Nom: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Message: {item.message}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default Contact;
