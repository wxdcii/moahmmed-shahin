import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone, FaEnvelope, FaFacebookF,
  FaTwitter, FaLinkedinIn, FaPinterestP, FaBars, FaTimes
} from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header-wrapper">
    
      <header className={`main-header ${scrolled ? 'fixed' : ''}`}>
        <div className="logo" />
        {/* Hamburger Icon */}
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`navigation${menuOpen ? ' open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
