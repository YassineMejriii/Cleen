import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram, MapPin, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import homeCleaningImg from "../assets/home-cleaning.jpeg";
import officeCleaningImg from "../assets/office-cleaning.jpg";
import deepCleaningImg from "../assets/deep-cleaning .jpg";
import geminiAboutImg from "../assets/Gemini_Generated_Image_iot119iot119iot1 (1).png";
import geminiResidentialImg from "../assets/Gemini_Generated_Image_houixjhouixjhoui (1).png";
import whyUsImg from "../assets/why-us.jpg";
import commercialCleaningImg from "../assets/commercial_cleaning_services.jpg";
import familyDayImg from "../assets/🏡✨ Sunday is Family Day! ✨🏡_Nothing feels better than spending quality time with loved ones in a fresh, clean, and clutter-free home! 💖 Enjoy a relaxing Sunday without worrying about the mess—Gold Star Maids has.jpg";

const WaveDivider = () => (
  <div className="wave-divider">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path
        d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,58.7C672,53,768,75,864,85.3C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L0,0Z"
        fill="#ffffff"
      ></path>
    </svg>
  </div>
);

const services = [
{
  name: "Residential Cleaning",
  descriptionName: "Whether for regular cleaning or a deep clean, we make your home clean and comfortable.",
  image: geminiResidentialImg,
  description: "What We Offer:\n Complete room cleaning \n Vacuuming & floor washing \n Dusting & disinfection \n Kitchen & bathroom cleaning",
},
{
  name: "Commercial Cleaning",
  descriptionName: "A clean space means a better impression for your clients and employees.",
  image: officeCleaningImg,
  description: "Services: \n Office cleaning \n Common area maintenance \n Post-event cleaning",
},
{
  name: "Post-Renovation Cleaning",
  descriptionName: " We deliver a clean, healthy, and ready-to-use space.",
  image: deepCleaningImg,
  description: "Has your space just been renovated? We remove dust, debris, and all traces left after the work is done.",
},
];

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-content"
          >
            <h1>Welcome to KingdomCleen</h1>
            <p>
              KingdomCleen is a professional cleaning company based in Ottawa, serving residential and commercial clients across Ontario. We deliver reliable, high-quality cleaning using modern equipment and eco-friendly products. From homes to offices and commercial spaces, we offer flexible cleaning plans tailored to your needs. At KingdomCleen, quality, care, and customer satisfaction come first.
            </p>
            <a href="#services" className="btn-primary">
              View Services
            </a>
          </motion.div>

          <div className="hero-image image-card">
            <img src={commercialCleaningImg} alt="Commercial cleaning services" />
          </div>
        </div>
      </section>

      <WaveDivider />

      <section id="about" className="about clean-pattern">
        <div className="container">
          <div className="about-grid glass-card">
            <div className="about-text">
              <span className="badge">ABOUT US</span>
              <h3>Who are we?</h3>
              <p>
                We are your advisor and your inexhaustible and always up-to-date source of expertise and know-how, both strategic and entrepreneurial.
              </p>
              <h3 className="why-title">Why choose us?</h3>
              <p>
                Our way of making a difference is to design services adapted to your strategy and objectives.
              </p>
              <div className="values">
                <h3>Our Values</h3>
                <div className="values-grid">
                  <div className="value">🤝 Trust</div>
                  <div className="value">📍 Proximity</div>
                  <div className="value">⭐ Quality</div>
                  <div className="value">🚀 Commitment</div>
                  <div className="value">🏆 Excellence</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={geminiAboutImg} alt="About us" />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section id="why-us" className="why-us clean-pattern">
        <div className="container">
          <div className="why-us-grid-container glass-card">
            <div className="why-us-content">
              <span className="badge">Why Choose Us?</span>
              
              <div className="why-us-grid">
                <div className="why-us-item">
                  <h3>Professional Expertise</h3>
                  <p>Our team is composed of trained and experienced professionals, guaranteeing a high-quality service.</p>
                </div>
                <div className="why-us-item">
                  <h3>Eco-friendly Products</h3>
                  <p>We use eco-friendly and safe cleaning products for your family and pets.</p>
                </div>
                <div className="why-us-item">
                  <h3>Satisfaction Guaranteed</h3>
                  <p>Your satisfaction is our priority. We are committed to providing an impeccable cleaning on every visit.</p>
                </div>
              </div>
            </div>
            <div className="why-us-image">
              <img src={whyUsImg} alt="Why us" />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section id="services" className="services-section">
        <div className="section-heading">
          <span className="badge1">OUR SERVICES</span>
          <h2>Discover our services</h2>
        </div>
        <div className="services">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="service-card glass-card"
            >
              <div className="service-card-inner">
                <div className="service-card-front">
                  <img src={service.image} alt={service.name} className="service-image" />
                  <h3>{service.name}</h3>
                  <p>{service.descriptionName}</p>
                </div>
                <div className="service-card-back">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-heading">
            <span className="badge1">CONTACT</span>
          </div>
          
          {/* Contact Information Cards */}
          <div className="contact-grid">
            <motion.a
              href="tel:(438)223-2322"
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <Phone size={32} />
              </div>
              <div className="contact-content">
                <h3>Telephone</h3>
                <p>(438) 223-2322</p>
              </div>
            </motion.a>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kingdomcleen@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <Mail size={32} />
              </div>
              <div className="contact-content">
                <h3>Email</h3>
                <p>kingdomcleen@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/profile.php?id=61587206704842"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <Facebook size={32} />
              </div>
              <div className="contact-content">
                <h3>Facebook</h3>
                <p>Suivez-nous</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <Instagram size={32} />
              </div>
              <div className="contact-content">
                <h3>Instagram</h3>
                <p>Suivez-nous</p>
              </div>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=1338+Wellington+St+W+Ottawa+ON+K1Y+3B7"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <MapPin size={32} />
              </div>
              <div className="contact-content">
                <h3>Adresse</h3>
                <p>1338 Wellington St. W, Ottawa, ON K1Y 3B7</p>
              </div>
            </motion.a>
          </div>

          {/* Google Maps */}
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

      <WaveDivider />

      {/* FAQ Section */}
      <section className="faq-container">
        <div className="container">
          <div className="section-heading">
            <span className="badge1">FAQ</span>
          </div>
          <div className="faq-grid">
            {/* Image on the left */}
            <div className="faq-image">
              <img src={familyDayImg} alt="Family Day Clean Home" />
            </div>
            
            {/* Questions on the right */}
            <div className="faq-section">
              <div className="faq-item">
                <p className="faq-question">💬 <strong> Do you bring your own products?</strong></p>
                <p className="faq-answer">  👤  Yes, we use professional, safe products for your home.</p>
              </div>
              <div className="faq-item">
                <p className="faq-question">💬 <strong> Do you work on weekends?</strong></p>
                <p className="faq-answer">      👤 Yes, upon request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </>
  );
}
