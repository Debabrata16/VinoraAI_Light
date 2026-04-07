import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Values from "./components/Values/Values";
import Why from "./components/Why/Why";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Values />
      <Why />
      <Testimonials />
      <Banner />
      <Footer />
      <a
        href="https://wa.me/919480253601?text=Hello%20VinoraAI,%20I%20am%20interested%20in%20your%20services"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

export default App;
