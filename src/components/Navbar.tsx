export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="logo-link">
          <h1 className="logo">KingdomCleen</h1>
        </a>
        <nav>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Our Services</a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
