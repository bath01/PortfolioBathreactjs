import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAndroid,
    faDev,
    faPhoenixFramework
} from "@fortawesome/free-brands-svg-icons";
import "../Styles/service.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Service = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  return (
    <>
      <section className="section bg-grey">
        <div className="section-title">
          <h2>Services</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center services-center">
          <article className="service">
            <FontAwesomeIcon className="service-icon" icon={faDev} />
            <h4>Web developement</h4>
            <div className="underline"></div>
            <p>
              I'm baby meditation tofu chillwave, distillery messenger bag
              thundercats chicharrones kale chips gochujang. Banh mi direct
              trade marfa salvia.
            </p>
          </article>
          <article className="service">
            <FontAwesomeIcon
              className="service-icon"
              icon={faPhoenixFramework}
            />
            <h4>Web Design</h4>
            <div className="underline"></div>
            <p>
              I'm baby meditation tofu chillwave, distillery messenger bag
              thundercats chicharrones kale chips gochujang. Banh mi direct
              trade marfa salvia.
            </p>
          </article>
          <article className="service">
            <FontAwesomeIcon className="service-icon" icon={faAndroid} />
            <h4>App Design</h4>
            <div className="underline"></div>
            <p>
              I'm baby meditation tofu chillwave, distillery messenger bag
              thundercats chicharrones kale chips gochujang. Banh mi direct
              trade marfa salvia.
            </p>
          </article>
          <article className="service">
            <FontAwesomeIcon className="service-icon" icon={faAndroid} />
            <h4>App Design</h4>
            <div className="underline"></div>
            <p>
              I'm baby meditation tofu chillwave, distillery messenger bag
              thundercats chicharrones kale chips gochujang. Banh mi direct
              trade marfa salvia.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Service;
