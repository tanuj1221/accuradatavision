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
    <header className="navbar-wrapper fixed-top">
      {/* Top Bar: Logo and Promos */}
      <div className="navbar-top">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left: Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Accura Datavision" className="navbar-logo-img" />
          </Link>

          {/* Right: CTA and Info */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <div className="promo-container">
              <span className="promo-item">
                <strong>TrafficSurvey CCTV</strong> <span className="highlight-text">97%+</span> accurate
              </span>
              <span className="promo-separator">|</span>
              <span className="promo-item">
                <strong>Aerial footage</strong> <span className="highlight-text">100%</span>
              </span>
            </div>
            <a href="/contact" className="btn btn-primary btn-sm btn-demo d-flex align-items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              AccuraCount software demo
            </a>
          </div>

          {/* Mobile Toggler (only visible on small screens) */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      {/* Bottom Bar: Navigation */}
      <div className={`navbar-bottom ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left: Slogan / CTA */}
          <div className="d-none d-lg-flex align-items-center navbar-slogan-container">
            <div className="navbar-slogan">
              Let's meet!
            </div>
            <a href="/contact" className="event-badge ms-4 d-flex align-items-center gap-3 text-decoration-none">
              <div className="event-icon-container"> {/* Removed bg-primary */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> {/* Orange Icon */}
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="event-details d-flex flex-column">
                <span className="schedule-title">Schedule a Meeting <span className="arrow">»</span></span>
                <span className="schedule-subtitle">Discuss your project needs</span>
              </div>
            </a>
          </div>

          {/* Right: Navigation Links */}
          <nav className="main-nav">
            <ul className="navbar-nav d-flex flex-row gap-4">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">HOME</Link>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => window.innerWidth > 991 && setIsProductsOpen(true)}
                onMouseLeave={() => window.innerWidth > 991 && setIsProductsOpen(false)}
              >
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  onClick={toggleDropdown}
                  aria-expanded={isProductsOpen}
                >
                  PRODUCTS
                </a>
                <ul className={`dropdown-menu ${isProductsOpen ? 'show' : ''}`}>
                  {productItems.map((item) => (
                    <li key={item.name}>
                      <Link className="dropdown-item" to={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/* Added placeholders for other requested links to match design */}
              <li className="nav-item">
                <Link className="nav-link text-white" to="/#about">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
