import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";

const testimonials = [
  {
    img: "https://i.pravatar.cc/80?img=11",
    name: "Arjun Mehta",
    role: "CEO, TechVentures",
    text: "VinoraAI transformed our digital presence completely. Their AI-driven approach delivered results far beyond what we expected. Truly exceptional.",
  },
  {
    img: "https://i.pravatar.cc/80?img=21",
    name: "Priya Sharma",
    role: "Marketing Head, BrandLift",
    text: "The SEO and digital marketing strategy they built for us tripled our organic traffic in just three months. The team is brilliant and responsive.",
  },
  {
    img: "https://i.pravatar.cc/80?img=32",
    name: "Rohit Verma",
    role: "Founder, StartupX",
    text: "From website development to VFX production, VinoraAI handled everything seamlessly. One of the best agencies we've partnered with.",
  },
  {
    img: "https://i.pravatar.cc/80?img=44",
    name: "Sneha Patel",
    role: "Creative Director, PixelHouse",
    text: "Their creative shoots and ad films brought our fashion brand to life. The quality of work is premium and they always deliver on time.",
  },
  {
    img: "https://i.pravatar.cc/80?img=53",
    name: "Karan Singh",
    role: "CTO, CloudBase",
    text: "The SaaS platform they built for us is rock-solid, scalable, and beautifully designed. VinoraAI is our long-term technology partner.",
  },
];

const stars = "★★★★★";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="testimonials__container" id="testimonials" ref={ref}>
      {/* Heading */}
      <motion.h1
        className="container testimonials__heading"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        What People Say <span className="grad">About Us</span>
      </motion.h1>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Swiper
          className="testimonials__swiper container"
          spaceBetween={20}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.1, // mobile
            },
            600: {
              slidesPerView: 1.4,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="testimony"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="testimony__avatar">
                  <img src={t.img} alt={t.name} />
                </div>

                <div className="testimony__comment">
                  <div className="stars">{stars}</div>
                  <p className="text">"{t.text}"</p>
                  <p className="testimony__author">
                    <strong>{t.name}</strong> / {t.role}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;