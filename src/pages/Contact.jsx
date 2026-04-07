import React from "react";
import Banner from "../components/Banner/Banner";

// Contact page — shows the CTA Banner at the top.
// Replace or extend this with a full contact form component when ready.
const ContactPage = () => {
  return (
    <>
      <Banner />

      {/* Basic contact form placeholder — swap out for your full form component */}
      <section style={{ padding: "60px 5%", maxWidth: 700, margin: "0 auto" }}>
        <h2>Get in Touch</h2>
        <p style={{ marginBottom: 32, color: "#555" }}>
          Fill in the form below and our team will get back to you within 24 hours.
        </p>
        <form>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #ddd", fontSize: 15 }}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #ddd", fontSize: 15 }}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="message" style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your project…"
              style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #ddd", fontSize: 15, resize: "vertical" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "13px 36px",
              borderRadius: 8,
              background: "#4f46e5",
              color: "#fff",
              border: "none",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
