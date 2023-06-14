import React from "react";
import hero from "../assets/images/hero.png";
import arrow from "../assets/images/arrow.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container">
      <div className="intro">
        <h1>Caesar Cipher Encryption</h1>
        <p>
          Experience the ancient art of Caesar cipher encryption with our
          cutting-edge platform
        </p>
        <div className="button">
          <Link to={"/encrypt"} className="btn">
            Get Started
            <span>
              <img src={arrow} alt=" >" />
            </span>
          </Link>
        </div>
      </div>

      <div className="hero">
        <img src={hero} alt="" />
      </div>
    </header>
  );
}

export default Header;
