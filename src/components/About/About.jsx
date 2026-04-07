import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./style.css";

const features = [
  "Innovation-driven solutions",
  "End-to-end execution",
  "Result-focused strategy",
  "Data + Creativity combined",
  "Premium creative quality",
  "Dedicated support team",
];

const stats = [
  { num: "5+", label: "Years of Experience", desc: "Delivering exceptional digital solutions worldwide." },
  { num: "150+", label: "Happy Clients", desc: "Businesses growing with our solutions and support." },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="about__container" id="about" ref={ref}>
      <div className="container about__inner">
        {/* Left: Image */}
        <motion.div
          className="about__image-col pos-rel"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="about__image">
            <img src="/whoarewe.png" alt="About VinoraAI" />
          </div>
          <motion.div
            className="about__progress"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="progress_bar">
              <CircularProgressbar value={92} text="92%" />
            </div>
            <h4>
              Business Growth
              <br />
              <small>Consistently high</small>
            </h4>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="section-tag">WHO WE ARE</div>
          <h1>
            Turning Ideas Into <span className="grad">Digital Reality</span>
          </h1>
          <p className="text">
            VinoraAI is a next-generation creative technology and digital
            solutions company. We help businesses transform ideas into scalable
            digital products and high-performing brands — powered by AI,
            driven by results.
          </p>

          <div className="about-features">
            {features.map((f, i) => (
              <motion.div
                key={f}
                className="about-feat"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              >
                <div className="check">✓</div>
                {f}
              </motion.div>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-desc">{s.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="about__buttons">
            <motion.a
              href="#services"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Services
            </motion.a>
            <a href="#services" className="about-arrow-link">
              <span>Learn More</span>
              <AiOutlineArrowDown />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
