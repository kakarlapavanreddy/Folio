import { useState } from "react";
import "./Contact.css";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("Message Sent Successfully!");

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>We'd love to hear about your project.</p>

            <div className="info-box">
              <FaPhone />

              <span>+91 9876543210</span>
            </div>

            <div className="info-box">
              <FaEnvelope />

              <span>contact@folioagency.com</span>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt />

              <span>Hyderabad, India</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-info" data-aos="fade-right"></div>

      <form data-aos="fade-left"></form>
    </section>
  );
}

export default Contact;
