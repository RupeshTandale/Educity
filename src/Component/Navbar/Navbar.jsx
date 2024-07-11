import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo1.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link} from "react-scroll";
import menu from '../../assets/menu.png'

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} duration={500}><img src={logo} alt="logo" className="logo" /></Link> 
      <ul className={mobileMenu ? "":'mobile-view-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li><Link to="programs" smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to="about" smooth={true} offset={-60} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-220} duration={500}>Campus</Link></li>
        <li><Link to="testimonial" smooth={true} offset={-230} duration={500}>Testimonial</Link></li>
        <li>
        <Link to="contact" smooth={true} offset={-200} duration={500}
        className="btn">Contact Us</Link>
        </li>
      </ul>
        <img src={menu} className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
}
export default Navbar;
