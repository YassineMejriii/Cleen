import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import "../styles/contact.css";

const ContactInfo = [
  {
    icon: Phone,
    label: "Telephone",
    value: "(438) 223-2322",
    link: "tel:(438)223-2322",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kingdomcleen@gmail.com",
    link: "mailto:kingdomcleen@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "1338 Wellington St. W, Ottawa, ON K1Y 3B7",
    link: "https://maps.google.com/?q=1338+Wellington+St+W+Ottawa+ON+K1Y+3B7",
  },
];



export default function Contact() {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contact Us</h1>
        <p>We're here to help. Get in touch with us today!</p>
      </motion.section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-grid">
            {ContactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.icon === MapPin ? "_blank" : "_self"}
                  rel={info.icon === MapPin ? "noopener noreferrer" : ""}
                  className="contact-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    <IconComponent size={32} />
                  </div>
                  <div className="contact-content">
                    <h3>{info.label}</h3>
                    <p>{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Google Maps */}
      <section className="map-section">
        <div className="container">
          <h2>Our Location</h2>
          <motion.div
            className="map-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.0159639532907!2d-75.74564222346987!3d45.41623657105672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04cd3b8e8e8d%3A0x9e8e8e8e8e8e8e8e!2s1338%20Wellington%20St%20W%2C%20Ottawa%2C%20ON%20K1Y%203B7!5e0!3m2!1sen!2sca!4v1706779200000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
