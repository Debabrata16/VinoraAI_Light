import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const techServices = [
  { icon: "🌐", title: "Website Development", desc: "High-performance, responsive websites designed to convert visitors into customers." },
  { icon: "📱", title: "App Development", desc: "Powerful mobile apps for Android & iOS that deliver seamless user experiences." },
  { icon: "☁️", title: "SaaS Software", desc: "Scalable cloud-based platforms to automate processes and grow your business." },
  { icon: "🔍", title: "SEO Optimization", desc: "Rank higher on search engines and attract the right audience organically." },
  { icon: "📢", title: "Digital Marketing", desc: "Data-driven marketing strategies that boost visibility and drive real results." },
];

const creativeServices = [
  { icon: "📸", title: "Corporate Shoots", desc: "Professional visuals that represent your brand and build credibility." },
  { icon: "👗", title: "Fashion Shoots", desc: "Stylish, high-end fashion & portfolio photography." },
  { icon: "🎬", title: "Event Coverage", desc: "Cinematic coverage of your special moments and brand events." },
  { icon: "🎥", title: "Ad Films & Reels", desc: "Engaging videos that grab attention & drive action." },
  { icon: "✨", title: "VFX & Animation", desc: "Stunning visuals that bring ideas to life with motion magic." },
];

const miniSlides = [
  { icon: "🤖", text: "AI-powered strategies that evolve with your business." },
  { icon: "🎨", text: "Creative excellence meets data-driven growth." },
  { icon: "🚀", text: "End-to-end solutions from idea to launch." },
];

/* 🔥 IMPROVED CARD ANIMATION */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="services__container container" id="services" ref={ref}>

      {/* INTRO */}
      <div className="services__intro">

        {/* LEFT - SLIDER */}
        <motion.div
          className="services__intro__media"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mini-slider-square">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4200, disableOnInteraction: false }}
              speed={900}
              loop={true}
            >
              {miniSlides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="mini-square-content">
                    <div className="mini-text-wrap">
                      <p className="mini-text-big">{s.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* RIGHT - TEXT */}
        <motion.div
          className="services__intro__text"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="section-tag">WHAT WE DO</div>

          <h1>
            We Are the <span className="grad">Solutions</span> for Your Digital Problems
          </h1>

          <p>
            From AI-powered automation to premium multimedia production, we combine{" "}
            <strong>innovation</strong> with <strong>execution</strong>.
          </p>

          <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* TECH SERVICES */}
      <motion.div
        className="services__servicesComp"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="services__comp__header">
          <h1>Tech & Digital Services</h1>
          <button className="btn btn-dark">Get a Quote</button>
        </div>

        <div className="services__grid">
          {techServices.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="service-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CREATIVE SERVICES */}
      <motion.div
        className="services__servicesComp services__creative"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="services__comp__header">
          <h1>Creative & Media Services</h1>
          <button className="btn btn-dark">View All</button>
        </div>

        <div className="services__grid">
          {creativeServices.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="service-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Services;