import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Accura Datavision",
                        "url": "https://accuradatavision.com",
                        "logo": "https://accuradatavision.com/logo.svg",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-7249417317",
                            "contactType": "Customer Service",
                            "email": "support@accuradatavision.com",
                            "areaServed": ["US", "GB", "AU", "DE"],
                            "availableLanguage": ["English"]
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Mumbai",
                            "addressCountry": "IN"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/accura-datavision"
                        ]
                    })}
                </script>
            </Helmet>
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo-container">
                            <img src="/logo.svg" alt="Accura Datavision Logo" className="footer-logo-img" />
                        </div>
                        <p className="footer-desc">
                            Transforming video data into actionable intelligence with high-precision AI Machine Vision and human verification.
                        </p>
                        <div className="footer-social">
                            <a 
                                href="https://www.linkedin.com/company/accura-datavision" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Visit Accura Datavision on LinkedIn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <span>Follow us on LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="/#why-choose-us">Why Choose Us</a></li>
                            <li><a href="/#products">Products</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/traffic-survey">Traffic Surveys</Link></li>
                            <li><Link to="/people-counting">Pedestrian Counting</Link></li>
                            <li><Link to="/parking-management">Parking Management</Link></li>
                            <li><Link to="/contact">Custom Machine Vision Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <div className="contact-info">
                            <p>
                                <a href="mailto:support@accuradatavision.com" className="contact-link">
                                    support@accuradatavision.com
                                </a>
                            </p>
                            <p className="contact-phone">
                                <a href="tel:+917249417317" className="contact-link">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    +91 7249417317
                                </a>
                            </p>
                            <p className="contact-whatsapp">
                                <a 
                                    href="https://wa.me/917008384468" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="contact-icon">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    +91 7008384468
                                </a>
                            </p>
                            <p>Mumbai, India</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Accura DataVision. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
