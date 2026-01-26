import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <h3 className="footer-logo">Accura<span>DataVision</span></h3>
                        <p className="footer-desc">
                            Transforming video data into actionable intelligence with high-precision AI and human verification.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="/#about">About Us</a></li>
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
                            <li><Link to="/contact">Custom AI Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <div className="contact-info">
                            <p>admin@accuradatavision.com</p>
                            <p>+91 7249417317</p>
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
