import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Intelligent Vision <span>Solutions</span>
        </h1>
        <p className="hero-subtitle">
          Advanced AI-powered traffic survey, people tracking, and safety monitoring systems for smarter cities.
        </p>
        
        <div className="featured-product">
          <div className="featured-badge">Featured Product</div>
          <h3 className="featured-title">Traffic Survey & Counting</h3>
          <p className="featured-description">
            AI-powered vehicle counting with directional analysis. Get accurate traffic flow data with vehicle classification and movement patterns.
          </p>
          <ul className="featured-highlights">
            <li>Multi-directional vehicle counting</li>
            <li>Vehicle type classification</li>
            <li>Real-time analytics dashboard</li>
            <li>Detailed PDF/Excel reports</li>
          </ul>
          <div className="featured-pricing">
            <span className="price-label">Starting from</span>
            <span className="price-amount">$20</span>
            <span className="price-period">/ 24h camera feed</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary btn-lg">Get Started</a>
          <a href="#products" className="btn btn-outline-light btn-lg">Explore All Products</a>
        </div>
      </div>
      <div className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/vis3_web.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
