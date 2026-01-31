import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="navbar"
    >
      <div className="container navbar-inner">
        <Link to="/" className="logo-link">
          <img src={logoImg} alt="KingdomCleen Logo" className="logo-img" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <a href="/#services">Our Services</a>
          <a href="/#contact" className="btn">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
