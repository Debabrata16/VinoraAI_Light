import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine, RiSearchLine } from "react-icons/ri";
import "./style.css";

const links = ["home", "about", "services", "why", "testimonials", "contact"];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`site-nav-wrapper${scrolled ? " scrolled" : ""}`}>
      <motion.nav
        className="site-nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <motion.a
          className="nav-logo"
          href="#home"
          aria-label="Welix Digital Home"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/logo-dark.png" alt="VinoraAI Logo" />
        </motion.a>

        {/* Desktop Links */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link}`}
              className={activeLink === link ? "active" : ""}
              onClick={() => setActiveLink(link)}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {link === "why" ? "Why Us?" : link.charAt(0).toUpperCase() + link.slice(1)}
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          {/* Search */}
          <div className={`nav-search${searchOpen ? " open" : ""}`}>
            <button
              className="search-icon-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <RiSearchLine />
            </button>
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  className="search-box"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 180, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <input type="text" placeholder="Search…" autoFocus />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a
            href="#contact"
            className="btn btn-primary nav-cta"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Quote
          </motion.a>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — drops below the pill */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link}`}
                onClick={() => { setMenuOpen(false); setActiveLink(link); }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                {link === "why" ? "Why Us?" : link.charAt(0).toUpperCase() + link.slice(1)}
              </motion.a>
            ))}
            <div className="mobile-nav-actions">
              <a href="tel:+919480253601" className="btn btn-outline">
                📞 +91 9480253601
              </a>
              <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
