import logo from "../assets/logo.png"
import "../styles/navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="brand-link" aria-label="Kingdomcleen Home">
          <img src={logo} alt="Kingdomcleen Logo" className="logo-image" />
          
        </a>
        <nav className="navbar-links" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
