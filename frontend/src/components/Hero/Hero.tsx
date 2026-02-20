import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Intelligent Vision <span>Solutions</span>
        </h1>
        <p className="hero-subtitle">
          Professional traffic survey services with AI Machine Vision based analysis. TMC, AADT, vehicle classification, and comprehensive traffic data collection with 95%+ accuracy.
        </p>

        <div className="featured-product">
          <h3 className="featured-title mb-2">Professional Traffic Survey Services</h3>
          <p className="featured-description mb-3">
            Comprehensive TMC, AADT, vehicle classification, and traffic data analysis with 95%+ accuracy.
          </p>
          <ul className="featured-highlights mb-3">
            <li>TMC & AADT Analysis</li>
            <li>Vehicle Classification</li>
            <li>Origin-Destination Surveys</li>
            <li>Peak Hour & Gap Analysis</li>
            <li>PDF/Excel Reports</li>
          </ul>
          <div className="featured-badge">
            <span className="badge-icon">✓</span>
            <span className="badge-text">Custom Quotes Available</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/traffic-survey" className="btn btn-blue btn-lg">Traffic Survey Solutions</Link>
          <a href="#products" className="btn btn-blue btn-lg">Explore All Products</a>
        </div>
      </div>
      <div className="hero-video">
        <video autoPlay muted loop playsInline aria-label="AI Machine Vision based traffic counting demonstration video">
          <source src="/videos/m12_enhanced_compressed.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
