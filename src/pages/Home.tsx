import { motion } from "framer-motion";
import homeCleaningImg from "../assets/home-cleaning.jpeg";
import officeCleaningImg from "../assets/office-cleaning.jpg";
import deepCleaningImg from "../assets/deep-cleaning.jpg";
import aboutUsImg from "../assets/about-us.jpg";
import whyUsImg from "../assets/why-us.jpg";

const services = [
  {
    name: "Home Cleaning",
    price: "From $80",
    image: homeCleaningImg,
    description: "A thorough cleaning of your home, including dusting, vacuuming, and mopping.",
  },
  {
    name: "Office Cleaning",
    price: "From $120",
    image: officeCleaningImg,
    description: "Keep your workspace clean and professional with our comprehensive office cleaning services.",
  },
  {
    name: "Deep Cleaning",
    price: "From $200",
    image: deepCleaningImg,
    description: "An intensive cleaning for a spotless and sanitized environment, perfect for a fresh start.",
  },
];

export default function Home() {
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
            <a href="#services" className="btn">
              View Services
            </a>
          </motion.div>

          <div className="hero-image" />
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-grid">
          <div className="about-text">
            <span className="badge">ABOUT US</span>
            <h2>
              Who are we ?
            </h2>

            <p>
              We are your advisor and your inexhaustible and always up-to-date source of expertise and know-how, both strategic and entrepreneurial.
            </p>

            <h3 className="why-title">Why choose us ?</h3>
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
            <img src={aboutUsImg} alt="About us" />
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us">
        <div className="container">
          <h2>Why Choose Us ?</h2>
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

          <div className="why-us-image">
            <img src={whyUsImg} alt="Why us" />
          </div>
        </div>
      </section>

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
              className="service-card"
            >
              <div className="service-card-inner">
                <div className="service-card-front">
                  <img src={service.image} alt={service.name} className="service-image" />
                  <h3>{service.name}</h3>
                  <p>{service.price}</p>
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

      <section id="contact" className="page">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required />
          <button className="btn primary">Send</button>
        </form>
      </section>
    </>
  );
}
