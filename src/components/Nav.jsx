import React from "react";
import lock from "../assets/images/lock.png";
import { Link } from "react-router-dom";

function Nav({ decryptPage, encryptPage }) {
  return (
    <nav className="container">
      <Link to={"/"}>
        <div className="logo">
          <span>
            <img src={lock} alt="" />
          </span>
          CipherCrypt
        </div>
      </Link>

      {/* Menu */}
      <div className="menu">
        <Link
          to={"/encrypt"}
          className={`encrypt ${encryptPage && "selected"}`}
        >
          Encrypt
        </Link>
        <Link
          to={"/decrypt"}
          className={`decrypt ${decryptPage && "selected"}`}
        >
          Decrypt
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
