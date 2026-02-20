import { useEffect, useState } from 'react';
import './Statistics.css';

interface Stat {
  number: string;
  label: string;
  description: string;
  icon: string;
}

const Statistics = () => {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch statistics from API
    fetch('/api/statistics')
      .then(res => res.json())
      .then(data => {
        if (data.stats && data.stats.length > 0) {
          setStats(data.stats);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching statistics:', err);
        setLoading(false);
      });
  }, []);

  // Only show section if we have statistics data
  if (!loading && stats.length === 0) {
    return null;
  }

  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-header">
          <span className="section-tag">Our Track Record</span>
          <h2 className="statistics-title">
            Trusted by Industry Leaders <span>Worldwide</span>
          </h2>
          <p className="statistics-subtitle">
            Our proven expertise and commitment to excellence have made us a preferred partner for traffic data collection and analysis across the globe.
          </p>
        </div>

        {loading ? (
          <div className="statistics-loading">
            <p>Loading statistics...</p>
          </div>
        ) : (
          <div className="statistics-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        )}

        <div className="statistics-footer">
          <p className="statistics-note">
            <strong>Global Reach:</strong> Serving clients across United States, United Kingdom, Europe, Australia, Germany, and expanding to new markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

