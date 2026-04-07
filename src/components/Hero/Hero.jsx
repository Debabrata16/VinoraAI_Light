import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const hexItems = [
  { label: "WEB", color: "rgba(91,156,246,0.7)", fill: "rgba(126, 252, 227, 0.12)", size: 140, pos: { top: "8%", left: "10%" } },
  { label: "AI",  color: "rgba(168,85,247,0.75)", fill: "rgba(168,85,247,0.12)", size: 100, pos: { top: "15%", right: "18%" } },
  { label: "SEO", color: "rgba(34,211,238,0.65)", fill: "rgba(34,211,238,0.08)", size: 150, pos: { top: "98%", right: "5%" } },
  { label: "VFX", color: "rgba(240,192,96,0.65)", fill: "rgba(240,192,96,0.08)", size: 190, pos: { top: "45%", right: "20%" } },
  { label: "APP", color: "rgba(91,156,246,0.5)",  fill: "rgba(91,156,246,0.08)", size: 90, pos: { bottom: "8%", left: "85%" } },
  { label: "GAME", color: "rgba(255, 35, 35, 0.5)",  fill: "rgba(252, 255, 87, 0.08)", size: 90, pos: { bottom: "40%", left: "85%" } },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        {/* Left */}
        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-tag" variants={itemVariants}>
            ✦ AI-Powered Agency
          </motion.div>

          <motion.h1 variants={itemVariants}>
            <strong>AI-Powered <span className="grad">Creative</span> &<br />
            Digital <span className="grad">Growth</span> Solutions</strong>
          </motion.h1>

          <motion.p variants={itemVariants}>
            We build powerful digital experiences that combine technology,
            creativity, and marketing to grow your business faster.
          </motion.p>

          <motion.div className="hero-btns" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-ghost"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              💬 Talk to Us
            </motion.a>
          </motion.div>

          <motion.div className="hero-meta" variants={itemVariants}>
            <span><span className="dot" /> WE BUILD</span>
            <span><span className="dot" /> WE CREATE</span>
            <span><span className="dot" /> WE GROW</span>
          </motion.div>
        </motion.div>

        {/* Right — Hex Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          <div className="hex-visual">
            {/* Glow */}
            <motion.div
              className="hex-glow"
              animate={{ scale: [1, 4.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* Orbiting hexagons */}
            {hexItems.map((h, i) => (
              <motion.div
                key={h.label}
                className="hex-item"
                style={{ position: "absolute", ...h.pos }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + i * 0.5,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <svg width={h.size} height={h.size * 1.12} viewBox="0 0 50 56">
                  <polygon
                    points="25,2 48,14.5 48,41.5 25,54 2,41.5 2,14.5"
                    fill={h.fill}
                    stroke={h.color}
                    strokeWidth="1.5"
                  />
                  <text
                    x="25"
                    y="32"
                    textAnchor="middle"
                    fill={h.color}
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Syne, sans-serif"
                  >
                    {h.label}
                  </text>
                </svg>
              </motion.div>
            ))}

            {/* Center hex */}
            <motion.div
              className="hex-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />

            {/* Floating cards */}
            <motion.div
              className="floating-card"
              style={{ bottom: "12%", right: "85%" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ y: -4, scale: 1.04 }}
            >
              <span className="fc-icon">💡</span>
              <div>
                <div className="fc-title">AI Strategy</div>
                <div className="fc-sub">Innovation-driven</div>
              </div>
            </motion.div>

            <motion.div
              className="floating-card"
              style={{ top: "45%", right: "85%" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ y: -4, scale: 1.04 }}
            >
              <span className="fc-icon">📈</span>
              <div>
                <div className="fc-title">250+ Projects</div>
                <div className="fc-sub">Delivered globally</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
