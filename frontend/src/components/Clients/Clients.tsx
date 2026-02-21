import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Clients.css';

interface ClientCategory {
  category: string;
  clients: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  location: string;
}

const Clients = () => {
  const [clientCategories, setClientCategories] = useState<ClientCategory[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch client data from API
    Promise.all([
      fetch('/api/client-categories').then(res => res.json()),
      fetch('/api/testimonials').then(res => res.json())
    ])
      .then(([categoriesData, testimonialsData]) => {
        if (categoriesData.categories) {
          setClientCategories(categoriesData.categories);
        }
        if (testimonialsData.testimonials) {
          setTestimonials(testimonialsData.testimonials);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching client data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <span className="section-tag">Trusted Partners</span>
          <h2 className="clients-title">
            Trusted by Industry <span>Leaders</span>
          </h2>
          <p className="clients-subtitle">
            We work with government agencies, engineering firms, and private organizations across the globe to deliver accurate traffic data solutions.
          </p>
        </div>

        {loading ? (
          <div className="clients-loading">
            <p>Loading client information...</p>
          </div>
        ) : (
          <>
            {clientCategories.length > 0 && (
              <div className="client-categories">
                {clientCategories.map((category, index) => (
                  <div key={index} className="client-category">
                    <h3 className="category-title">{category.category}</h3>
                    <ul className="client-list">
                      {category.clients.map((client, idx) => (
                        <li key={idx} className="client-item">
                          <span className="client-icon">✓</span>
                          {client}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {testimonials.length > 0 && (
              <div className="testimonials-section">
                <h3 className="testimonials-title">What Our Clients Say</h3>
                <div className="testimonials-grid">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                      <div className="testimonial-quote">
                        <span className="quote-icon">"</span>
                        <p>{testimonial.quote}</p>
                      </div>
                      <div className="testimonial-author">
                        <div className="author-info">
                          <strong>{testimonial.author}</strong>
                          <span>{testimonial.company}</span>
                          <span className="author-location">{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <div className="clients-cta">
          <p>Join organizations that trust Accura Datavision for their traffic data needs</p>
          <Link to="/contact" className="btn btn-outline">Become a Client</Link>
        </div>
      </div>
    </section>
  );
};

export default Clients;

