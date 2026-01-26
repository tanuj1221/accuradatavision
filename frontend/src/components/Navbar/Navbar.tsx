import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productItems = [
    { name: 'Traffic Survey', href: '/traffic-survey' },
    { name: 'People Counting', href: '/people-counting' },
    { name: 'Parking Management', href: '/parking-management' },
    { name: 'Safety Monitoring', href: '/safety-monitoring' },
  ];

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProductsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">About Us</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => window.innerWidth > 991 && setIsProductsOpen(true)}
              onMouseLeave={() => window.innerWidth > 991 && setIsProductsOpen(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={toggleDropdown}
                aria-expanded={isProductsOpen}
              >
                Products
              </a>
              <ul className={`dropdown-menu ${isProductsOpen ? 'show' : ''}`}>
                {productItems.map((item) => (
                  <li key={item.name}>
                    <Link className="dropdown-item" to={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
