import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
import "./style.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container container__header">
        <div className="header-contact">
          <a href="mailto:vinoraaiworkforce@gmail.com">
            <AiFillMail />
            <span>vinoraaiworkforce@gmail.com</span>
          </a>
          <a href="tel:+918217703077">
            <AiFillPhone />
            <span>+91 8217703077</span>
          </a>
        </div>
        <div className="header-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <CgInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <AiFillTwitterSquare />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <AiFillFacebook />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
