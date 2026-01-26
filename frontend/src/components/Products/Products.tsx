import { Link } from 'react-router-dom';
import './Products.css';

const products = [
  {
    id: 'traffic',
    title: 'Traffic Survey',
    description: 'AI-powered vehicle counting with multi-directional analysis, vehicle classification, and traffic flow patterns.',
    image: '/images/analysis_detect.jpg',
    features: ['Directional counting', 'Vehicle classification', 'Flow analysis', 'PDF/Excel reports'],
    link: '/traffic-survey'
  },
  {
    id: 'people',
    title: 'People Counting',
    description: 'Accurate footfall analytics for retail spaces, malls, and public areas with entry/exit tracking.',
    image: '/images/people_counting_detect.png',
    features: ['Footfall analytics', 'Crowd density', 'Entry/exit tracking', 'Heatmaps'],
    link: '/people-counting'
  },
  {
    id: 'parking',
    title: 'Parking Management',
    description: 'Real-time parking occupancy detection and available spot tracking for smarter parking solutions.',
    image: '/images/parking_detect.png',
    features: ['Occupancy detection', 'Spot tracking', 'Real-time guidance', 'Utilization reports'],
    link: '/parking-management'
  },
  {
    id: 'safety',
    title: 'Safety Monitoring',
    description: 'Intelligent anomaly detection for public and private spaces. Automatically identify safety hazards, unauthorized access, or suspicious behaviors and trigger instant alerts.',
    image: '/images/ppe_detect.png',
    features: ['Anomaly & accident detection', 'Restricted zone monitoring', 'Instant SMS/Email alerts', '24/7 automated incident logging'],
    link: '/safety-monitoring'
  },
];

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="products-container">
        <span className="section-tag">Our Products</span>
        <h2 className="products-title">
          AI Vision Solutions for <span>Every Need</span>
        </h2>
        <p className="products-subtitle">
          From traffic analysis to safety monitoring, our solutions help you make data-driven decisions.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
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
