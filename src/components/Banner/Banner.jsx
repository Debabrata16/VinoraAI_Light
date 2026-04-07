import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./style.css";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="banner__container" id="contact" ref={ref}>
      {/* Animated background blobs */}
      <div className="banner__blob banner__blob--1" />
      <div className="banner__blob banner__blob--2" />

      <div className="container banner__inner">
        <motion.div
          className="banner__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.9)", borderColor: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)" }}>
            ✦ GET IN TOUCH
          </div>

          <h1>
            Let's Build Something <em>Amazing</em> Together
          </h1>
          <p>
            Turn your ideas into reality with VinoraAI. We're just one message
            away from creating something extraordinary for your business.
          </p>

          <div className="banner__btns">
            <motion.a
              href="tel:+918217703077"
              className="btn btn-dark"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              📞 +91 8217703077
            </motion.a>
            <motion.a
              href="mailto:vinoraaiworkforce@gmail.com"
              className="btn btn-dark"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              ✉️ vinoraaiworkforce@gmail.com
            </motion.a>
            <motion.a
              href="https://wa.me/918217703077?text=Hello%20VinoraAI,%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              💬 WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
