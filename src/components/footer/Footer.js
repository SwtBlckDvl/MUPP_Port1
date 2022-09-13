import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <h1>MUPP</h1>
        <p>Based in Mexico City</p>
      </div>
      <div className="footer-contact">
        <h3>Contact Me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Marcos Ulises</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/ulises-peña-partida-70421a198"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/SwtBlckDvl"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
