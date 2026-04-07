import React from "react";
import { motion } from "framer-motion";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import "./style.css";

const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <img src="/logo-white.png" alt="VinoraAI" className="footer__logo" />
          <p className="footer__tagline">
            AI-Powered Creative & Digital Growth Solutions
          </p>
          <div className="footer__socials">
            <motion.a href="https://instagram.com" target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.15 }} aria-label="Instagram">
              <CgInstagram />
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.15 }} aria-label="Twitter">
              <AiFillTwitterSquare />
            </motion.a>
            <motion.a href="https://facebook.com" target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.15 }} aria-label="Facebook">
              <AiFillFacebook />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.15 }} aria-label="LinkedIn">
              <AiFillLinkedin />
            </motion.a>
          </div>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h3>Services</h3>
          <ul>
            {["Website Development","App Development","SaaS Software","SEO Optimization","Digital Marketing","VFX & Animation"].map(s => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer__col">
          <h3>Company</h3>
          <ul>
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Why Us?", href: "#why" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Contact", href: "#contact" },
            ].map(l => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel:+918217703077">📞 +91 8217703077</a>
            </li>
            <li>
              <a href="mailto:vinoraaiworkforce@gmail.com">✉️ vinoraaiworkforce@gmail.com</a>
            </li>
            <li>
              <a href="http://www.vinoraai.com" target="_blank" rel="noreferrer">🌐 www.vinoraai.com</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">📷 @VinoraAI</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom__inner">
          <span>© 2025 VinoraAI. All rights reserved.</span>
          <span className="footer__tagline-bottom">Let's Create the Future — Together ✦</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
