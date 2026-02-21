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
    { name: 'AccuraCount Software', href: '/accura-count' },
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
                <strong>TrafficSurvey CCTV</strong> <span className="highlight-text">95%+</span> accurate
              </span>
              <span className="promo-separator">|</span>
              <span className="promo-item">
                <strong>Aerial footage</strong> <span className="highlight-text">97%+</span>
              </span>
            </div>
            <a 
              href="https://wa.me/7008384468?text=Hello!%20I%20would%20like%20to%20request%20an%20AccuraCount%20software%20demo." 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-cta-button"
            >
              <span className="whatsapp-cta-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </span>
              <span className="whatsapp-cta-text">Request Demo</span>
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
                <Link className="nav-link text-white" to="/about">ABOUT US</Link>
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
