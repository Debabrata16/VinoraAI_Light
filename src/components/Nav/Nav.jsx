import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine, RiSearchLine } from "react-icons/ri";
import "./style.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Why Us?", path: "/why-us" },
  { label: "Contact", path: "/contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <Link className="nav-logo" to="/">
          <img src="/logo-dark.png" alt="Logo" />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          {/* Search */}
          <div className="nav-search">
            <button
              className="search-icon-btn"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <RiSearchLine />
            </button>

            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  className="search-box"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  <input type="text" placeholder="Search…" autoFocus />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" className="btn btn-primary nav-cta">
            Get a Quote
          </Link>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </motion.nav>

      {/* BACKDROP */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-backdrop"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={item.path} onClick={() => setMenuOpen(false)}
                style={{ display: "block", width: "100%", textAlign: "center" }}>
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <div className="mobile-nav-actions">
              <a href="tel:+918217703077" className="btn btn-outline">
                📞 +91 8217703077
              </a>

              <Link
                to="/contact"
                className="btn btn-primary"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;