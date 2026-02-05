import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-images-grid">
          <div className="grid-image large">
            <img
              src="/images/long_trajectories.jpg"
              alt="Traffic Detection"
            />
            <span className="image-label">Traffic Survey</span>
          </div>
          <div className="grid-image">
            <img
              src="/images/people_counting_detect.png"
              alt="People Counting"
            />
            <span className="image-label">People Counting</span>
          </div>
          <div className="grid-image">
            <img
              src="/images/parking_detect.png"
              alt="Parking Management"
            />
            <span className="image-label">Parking Management</span>
          </div>
          <div className="grid-image">
            <img
              src="/images/ppe_detect.png"
              alt="Safety Monitoring"
            />
            <span className="image-label">Safety Monitoring</span>
          </div>
        </div>
        <div className="about-content">
          <span className="section-tag">About Us</span>
          <h2 className="about-title">
            Turning Camera Feeds Into <span>Actionable Insights</span>
          </h2>
          <p className="about-text">
            We build AI-powered vision solutions that help cities and businesses make smarter decisions. From counting vehicles at intersections to tracking footfall in retail spaces and managing parking lots — our systems turn camera feeds into actionable data.
          </p>
          <p className="about-text">
            Our technology uses advanced deep learning to deliver accurate, real-time insights without expensive hardware. Just send us your video, and we handle the rest.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">97%+</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Processing</span>
            </div>
            <div className="stat">
              <span className="stat-number">$20</span>
              <span className="stat-label">Starting Price</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
