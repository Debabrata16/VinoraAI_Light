import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./style.css";

const values = [
  { icon: "⚡", title: "Innovation", desc: "Driven by the latest AI & tech" },
  { icon: "🎨", title: "Creativity", desc: "Designs that engage & convert" },
  { icon: "📈", title: "Growth", desc: "Strategies focused on results" },
  { icon: "🤝", title: "Results", desc: "Measurable success, every time" },
];

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="values__container" ref={ref}>
      <div className="container values__inner">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            className="value-pill"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.04 }}
          >
            <div className="value-icon">{v.icon}</div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Values;
