import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine, RiSearchLine } from "react-icons/ri";
import "./style.css";

// Map of nav labels -> routes
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
  const navigate = useNavigate();

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
        <motion.div whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link className="nav-logo" to="/" aria-label="VinoraAI Home">
            <img src="/logo-dark.png" alt="VinoraAI Logo" />
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to={item.path}>{item.label}</Link>
            </motion.div>
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

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="btn btn-primary nav-cta">
              Get a Quote
            </Link>
          </motion.div>

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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to={item.path} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="mobile-nav-actions">
              <a href="tel:+919480253601" className="btn btn-outline">
                📞 +91 9480253601
              </a>
              <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
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
