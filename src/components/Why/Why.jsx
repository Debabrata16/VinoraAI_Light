import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./style.css";

const whyFeatures = [
  "Innovation-driven solutions",
  "Result-focused strategy",
  "Premium creative quality",
  "End-to-end execution",
  "Data + Creativity combined",
];

const steps = [
  { num: "01", title: "Understand Your Vision", desc: "We analyze your goals, audience, and requirements to build a strong foundation." },
  { num: "02", title: "Strategy & Planning", desc: "We create a roadmap tailored to your business needs and growth targets." },
  { num: "03", title: "Build & Execute", desc: "Our team designs, develops, and launches your solution with precision & creativity." },
  { num: "04", title: "Launch & Scale", desc: "We deliver, optimize, and help you grow continuously after launch." },
];

const Why = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="why__container container" id="why" ref={ref}>
      <div className="why__grid">
        {/* Left: Why VinoraAI */}
        <motion.div
          className="why__left"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag" style={{ borderColor: "rgba(168,85,247,0.3)", background: "rgba(168,85,247,0.1)", color: "var(--accent-purple)" }}>
            WHY CHOOSE US
          </div>
          <h1>
            Why <span className="grad">VinoraAI?</span>
          </h1>
          <p className="text">
            We don't just build — we strategize, create, and scale with you at
            every step of your journey.
          </p>
          <div className="why__features">
            {whyFeatures.map((f, i) => (
              <motion.div
                key={f}
                className="why-feat"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              >
                <span className="why-feat-icon">🔷</span>
                {f}
              </motion.div>
            ))}
          </div>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: "1.5rem" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Work With Us
          </motion.a>
        </motion.div>

        {/* Right: Process */}
        <motion.div
          className="why__right"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="section-tag">OUR PROCESS</div>
          <h1>How We <span className="grad">Work</span></h1>
          <div className="process__steps">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="process__step"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                whileHover={{ x: 6 }}
              >
                <span className="step-num">{s.num}</span>
                <div className="step-body">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
