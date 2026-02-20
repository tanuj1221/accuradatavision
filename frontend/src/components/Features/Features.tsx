import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🚗',
      title: 'Vehicle Classification',
      description: 'Categorize cars, trucks, buses, and bikes with high precision using AI Machine Vision technology.'
    },
    {
      icon: '📊',
      title: 'Link Count Analysis',
      description: 'Measure traffic volume and flow rates across road segments with accurate counting and directional analysis.'
    },
    {
      icon: '🚦',
      title: 'Queue Length Detection',
      description: 'Monitor congestion levels and waiting times at intersections for better traffic management.'
    },
    {
      icon: '🅿️',
      title: 'Parking Management',
      description: 'Track occupancy, duration, and turnover in parking zones with real-time monitoring.'
    },
    {
      icon: '⏱️',
      title: 'Journey Time Tracking',
      description: 'Calculate precise travel times between origin-destination points for route optimization.'
    },
    {
      icon: '🔄',
      title: 'Roundabout Analysis',
      description: 'Analyze complex entry/exit movements and turning behaviors in roundabout configurations.'
    },
    {
      icon: '🔥',
      title: 'Density Heatmap',
      description: 'Visualize traffic density patterns across road networks with color-coded heatmaps for spatial insights.'
    },
    {
      icon: '📈',
      title: 'Dual Time Heatmap',
      description: 'Compare traffic patterns across different time periods side-by-side for trend analysis and planning.'
    },
    {
      icon: '🗺️',
      title: 'Road Coverage Heatmap',
      description: 'Analyze road network coverage and identify high-traffic zones with comprehensive mapping.'
    },
    {
      icon: '⏰',
      title: 'Peak Hours Analysis',
      description: 'Identify peak traffic hours and optimize infrastructure planning based on time-based patterns.'
    },
    {
      icon: '⚡',
      title: 'Speed Analysis',
      description: 'Monitor vehicle speeds, detect violations, and analyze speed distribution patterns for safety assessment.'
    },
    {
      icon: '⚠️',
      title: 'Near Miss Detection',
      description: 'Identify and analyze near-miss incidents to improve road safety and prevent accidents.'
    },
    {
      icon: '📑',
      title: 'Exportable Reports',
      description: 'Generate detailed insights in PDF, Excel, and CSV formats instantly for comprehensive documentation.'
    },
    {
      icon: '🌊',
      title: 'Traffic Flow Patterns',
      description: 'Analyze directional flow patterns and identify bottlenecks in traffic movement for optimization.'
    },
    {
      icon: '🚨',
      title: 'Incident Detection',
      description: 'Automatically detect traffic incidents, accidents, and abnormal traffic conditions in real-time.'
    },
    {
      icon: '📍',
      title: 'O-D Matrix Analysis',
      description: 'Generate origin-destination matrices for comprehensive traffic movement analysis and planning.'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-tag">Comprehensive Analysis</span>
          <h2 className="features-title">
            Advanced Traffic Analysis <span>Capabilities</span>
          </h2>
          <p className="features-subtitle">
            Our AI Machine Vision based platform delivers comprehensive traffic analysis with 16+ specialized features designed for transportation planning and traffic engineering.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

