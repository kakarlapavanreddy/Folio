import "./Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        {/* LEFT */}

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-title">👋 Say Hello</span>

          <h2>
            Let's talk about
            <br />
            your next project
          </h2>

          <h3>Invest in your designs today!</h3>

          <p>
            Agency is a full-service agency, busy designing and building
            beautiful digital products, brands and experiences.
          </p>

          <div className="contact-info">
            <div className="info">
              <FaEnvelope />

              <span>hello@folioagency.com</span>
            </div>

            <div className="info">
              <FaPhoneAlt />

              <span>+91 98765 43210</span>
            </div>

            <div className="info">
              <FaMapMarkerAlt />

              <span>Hyderabad, India</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form>
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Subject" />

            <textarea rows="6" placeholder="Write your message..."></textarea>

            <button>Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
