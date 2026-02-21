import './TrustSignals.css';

const TrustSignals = () => {
  const capabilities = [
    {
      title: 'Offshore Analysis Expertise',
      description: 'Specialized in providing counting services for clients in USA, UK, Europe, Australia, Middle East with meticulous attention to detail.',
      features: [
        'FHWA Classification',
        'AUSTROADS Classification',
        'UNECE Classifications',
        'IRC Classifications',
        'Custom Classification Schemes'
      ]
    },
    {
      title: 'Comprehensive Traffic Surveys',
      description: 'End-to-end traffic data collection and analysis services for diverse project requirements.',
      features: [
        'Traffic Volume Studies',
        'Origin-Destination Surveys',
        'Parking Demand Surveys',
        'Household & Opinion Surveys',
        'Midblock & Intersection Surveys'
      ]
    },
    {
      title: 'AI Machine Vision Based Technology',
      description: 'State-of-the-art AI Machine Vision and deep learning for accurate, efficient data processing.',
      features: [
        'Advanced Vehicle Tracking',
        'Real-time Analytics',
        'Automated Classification',
        'Quality Control Framework',
        'Client-Side Analysis Software'
      ]
    }
  ];

  return (
    <section className="trust-signals-section">
      <div className="trust-signals-container">
        <div className="trust-signals-header">
          <span className="section-tag">Why Trust Us</span>
          <h2 className="trust-signals-title">
            Advanced Technology & <span>Proven Methodology</span>
          </h2>
          <p className="trust-signals-subtitle">
            Our AI Machine Vision based approach combined with expert human verification delivers reliable, accurate traffic data solutions that meet industry standards.
          </p>
        </div>

        <div className="certifications-grid">
          <div className="cert-card">
            <div className="cert-icon">✓</div>
            <h3 className="cert-name">ISO Certified</h3>
            <p className="cert-description">Quality management systems and processes</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">🎯</div>
            <h3 className="cert-name">95%+ Accuracy</h3>
            <p className="cert-description">Industry-leading precision through AI Machine Vision and human verification</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">🔒</div>
            <h3 className="cert-name">Data Security</h3>
            <p className="cert-description">Secure processing with privacy-compliant data handling</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">📋</div>
            <h3 className="cert-name">Industry Standards</h3>
            <p className="cert-description">FHWA, AUSTROADS, IRC compliant data formats and reporting</p>
          </div>
        </div>

        <div className="capabilities-section">
          <h3 className="capabilities-title">Our Core Capabilities</h3>
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <h4 className="capability-title">{capability.title}</h4>
                <p className="capability-description">{capability.description}</p>
                <ul className="capability-features">
                  {capability.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="global-reach">
          <h3 className="global-reach-title">Serving Clients Across the Globe</h3>
          <div className="countries-list">
            <div className="country-group">
              <strong>Americas:</strong> United States
            </div>
            <div className="country-group">
              <strong>Europe:</strong> United Kingdom, Germany, and expanding
            </div>
            <div className="country-group">
              <strong>Asia-Pacific:</strong> Australia, India, Middle East
            </div>
          </div>
          <p className="global-reach-note">
            Our methods, perfected on roadways around the world, have been optimized to deliver accurate results across diverse traffic conditions and regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;

