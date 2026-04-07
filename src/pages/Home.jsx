import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Values from "../components/Values/Values";
import Why from "../components/Why/Why";
import Testimonials from "../components/Testimonials/Testimonials";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Values />
      <Why />
      <Testimonials />
      <Banner />
    </>
  );
};

export default Home;
