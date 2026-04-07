import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918217703077?text=Hello%20VinoraAI,%20I%20am%20interested%20in%20your%20services"
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
};

export default Layout;
