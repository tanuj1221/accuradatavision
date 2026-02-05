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
          Advanced AI-powered traffic count and survey solution.
        </p>

        <div className="featured-product">
          <h3 className="featured-title mb-2">Traffic Survey & Counting</h3>
          <p className="featured-description mb-3">
            Accurate AI vehicle counting, classification, and directional analysis.
          </p>
          <ul className="featured-highlights mb-3">
            <li>Multi-directional counting</li>
            <li>Vehicle classification</li>
            <li>Real-time analytics</li>
            <li>PDF/Excel reports</li>
          </ul>
          <div className="featured-pricing">
            <span className="price-label">From</span>
            <span className="price-amount">$20</span>
            <span className="price-period">/ 24h</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/traffic-survey" className="btn btn-blue btn-lg">Traffic Survey Solutions</Link>
          <a href="#products" className="btn btn-blue btn-lg">Explore All Products</a>
        </div>
      </div>
      <div className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/videos/m12_enhanced_compressed.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
