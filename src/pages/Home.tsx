import { motion } from "framer-motion";

const services = [
  { name: "Home Cleaning", price: "From $80" },
  { name: "Office Cleaning", price: "From $120" },
  { name: "Deep Cleaning", price: "From $200" },
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
            <h1>Spotless Cleaning, Every Time</h1>
            <p>
              Reliable residential and commercial cleaning services delivered with
              precision and care.
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
            <span className="badge">À PROPOS</span>
            <h2>
              Qui sommes nous<span> ?</span>
            </h2>

            <p>
              Nous sommes votre conseillé et votre source inépuisable et toujours
              à jour d’expertise et de savoir-faire , stratégique et
              entrepreneurial.
            </p>

            <h3 className="why-title">Pourquoi nous choisir ?</h3>
            <p>
              Notre façon de changer les choses est de concevoir des prestations
              adaptées à votre stratégie et vos objectifs.
            </p>

            <div className="values">
              <h3>Nos Valeurs</h3>
              <div className="values-grid">
                <div className="value">🤝 La Confiance</div>
                <div className="value">📍 La Proximité</div>
                <div className="value">⭐ La Qualité</div>
                <div className="value">🚀 L’Engagement</div>
                <div className="value">🏆 L’Excellence</div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src="/images/about-us.svg" alt="About us" />
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us">
        <div className="container">
          <h2>Pourquoi nous choisir ?</h2>
          <div className="why-us-grid">
            <div className="why-us-item">
              <h3>Expertise Professionnelle</h3>
              <p>Notre équipe est composée de professionnels formés et expérimentés, garantissant un service de haute qualité.</p>
            </div>
            <div className="why-us-item">
              <h3>Produits Écologiques</h3>
              <p>Nous utilisons des produits de nettoyage écologiques et sans danger pour votre famille et vos animaux.</p>
            </div>
            <div className="why-us-item">
              <h3>Satisfaction Garantie</h3>
              <p>Votre satisfaction est notre priorité. Nous nous engageons à fournir un nettoyage impeccable à chaque visite.</p>
            </div>
          </div>

          <div className="why-us-image">
            <img src="/images/why-us.svg" alt="Why us" />
          </div>
        </div>
      </section>

      <section id="services" className="services">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="service-card"
          >
            <div className="image-placeholder" />
            <h3>{service.name}</h3>
            <p>{service.price}</p>
          </motion.div>
        ))}
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
