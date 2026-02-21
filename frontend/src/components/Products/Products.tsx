import { Link } from 'react-router-dom';
import './Products.css';

const products = [
  {
    id: 'traffic',
    title: 'Traffic Survey & Analysis',
    description: 'Professional TMC (Turning Movement Count), AADT, traffic volume studies, vehicle classification, and comprehensive traffic data analysis with 95%+ accuracy.',
    image: '/images/analysis_detect.jpg',
    features: ['TMC & AADT Analysis', 'Vehicle Classification', 'Origin-Destination Surveys', 'Peak Hour Studies', 'Gap & Headway Analysis', 'PDF/Excel Reports'],
    link: '/traffic-survey'
  },
  {
    id: 'people',
    title: 'People Counting',
    description: 'AI Machine Vision based footfall analytics for retail spaces, malls, and public areas with entry/exit tracking and crowd intelligence.',
    image: '/images/people_counting_detect.png',
    features: ['Footfall Analytics', 'Crowd Density', 'Entry/Exit Tracking', 'Heatmaps', 'Real-time Monitoring'],
    link: '/people-counting'
  },
  {
    id: 'parking',
    title: 'Parking Management',
    description: 'AI Machine Vision based real-time parking occupancy detection and available spot tracking for smarter parking solutions.',
    image: '/images/parking_detect.png',
    features: ['Occupancy Detection', 'Spot Tracking', 'Real-time Guidance', 'Utilization Reports', 'Multi-level Support'],
    link: '/parking-management'
  },
  {
    id: 'safety',
    title: 'Safety Monitoring',
    description: 'AI Machine Vision based intelligent anomaly detection for public and private spaces. Automatically identify safety hazards, unauthorized access, or suspicious behaviors.',
    image: '/images/ppe_detect.png',
    features: ['Anomaly Detection', 'Restricted Zone Monitoring', 'Instant Alerts', '24/7 Automated Logging', 'PPE Compliance'],
    link: '/safety-monitoring'
  },
  {
    id: 'accura-count',
    title: 'AccuraCount Software',
    description: 'Client-side traffic analysis and reporting software. Visualize trajectories, draw counting lines, perform lane analysis, and export professional reports.',
    image: '/images/accura_count_software.png',
    features: ['Trajectory Visualization', 'Counting Line Analysis', 'Lane-wise Distribution', 'Heatmaps & Dashboards', 'Custom Reports'],
    link: '/accura-count'
  },
];

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="products-container">
        <span className="section-tag">Our Products</span>
        <h2 className="products-title">
          AI Machine Vision Based <span>Solutions</span>
        </h2>
        <p className="products-subtitle">
          Comprehensive AI Machine Vision solutions for traffic analysis, people counting, parking management, and safety monitoring.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={`${product.title} - ${product.description}`}
                  loading="lazy"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="product-footer">
                  <Link to={product.link} className="btn btn-sm">Learn More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
