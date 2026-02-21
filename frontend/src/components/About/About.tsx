import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-images-grid">
          <div className="grid-image large">
            <img
              src="/images/long_trajectories.jpg"
              alt="AI Machine Vision based traffic survey showing vehicle trajectories and movement patterns for TMC and AADT analysis"
              loading="lazy"
            />
            <span className="image-label">Traffic Survey</span>
          </div>
          <div className="grid-image">
            <img
              src="/images/traffic_detect.jpg"
              alt="Traffic detection and vehicle classification for comprehensive traffic analysis"
              loading="lazy"
            />
            <span className="image-label">Vehicle Classification</span>
          </div>
          <div className="grid-image">
            <img
              src="/images/analysis_detect.jpg"
              alt="Traffic analysis and intersection study for transportation planning"
              loading="lazy"
            />
            <span className="image-label">Intersection Analysis</span>
          </div>
          <div className="grid-image">
            <img
              src="/images/accura_count_software.png"
              alt="AccuraCount software for traffic data visualization and reporting"
              loading="lazy"
            />
            <span className="image-label">AccuraCount Software</span>
          </div>
        </div>
        <div className="about-content">
          <span className="section-tag">About Us</span>
          <h2 className="about-title">
            Turning Camera Feeds Into <span>Actionable Insights</span>
          </h2>
          <p className="about-text">
            We specialize in professional traffic survey services, providing accurate TMC (Turning Movement Count), AADT (Annual Average Daily Traffic), vehicle classification, and comprehensive traffic data analysis for transportation planning and traffic engineering projects.
          </p>
          <p className="about-text">
            Our AI Machine Vision based video analytics technology combined with expert human verification delivers 95%+ accurate traffic data. We process your CCTV footage to provide detailed traffic surveys, intersection analysis, origin-destination studies, and peak hour analysis. Serving clients across <strong>US, UK, Europe, Australia, Germany, and India</strong>.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">95%+</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Processing</span>
            </div>
            <div className="stat">
              <span className="stat-number">24h</span>
              <span className="stat-label">Fast Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
