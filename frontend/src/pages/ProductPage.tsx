import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ProductPage.css';

interface ProductPageProps {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    features: string[];
    benefits: string[];
    specs: { label: string; value: string }[];
    metaTitle?: string;
    metaDescription?: string;
}

const ProductPage = (props: ProductPageProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pageTitle = props.metaTitle || `${props.title} - Accura Datavision`;
    const pageDescription = props.metaDescription || props.description;

    return (
        <div className="product-page">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={window.location.href} />
                {/* Open Graph tags */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={props.image} />
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={props.image} />
            </Helmet>
            <div className="product-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${props.image})` }}>
                <div className="product-hero-content">
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                </div>
            </div>

            <div className="product-main-content">
                <div className="content-grid">
                    <div className="main-info">
                        <h2>Overview</h2>
                        <p className="main-desc">{props.description}</p>

                        <div className="features-section">
                            <h3>Key Features</h3>
                            <ul className="feature-list">
                                {props.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="benefits-section">
                            <h3>Why Choose {props.title}?</h3>
                            <div className="benefits-grid">
                                {props.benefits.map((benefit, idx) => (
                                    <div key={idx} className="benefit-card">
                                        <div className="benefit-icon">✦</div>
                                        <p>{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-info">
                        <div className="specs-card">
                            <h3>Specifications</h3>
                            {props.specs.map((spec, idx) => (
                                <div key={idx} className="spec-row">
                                    <span className="spec-label">{spec.label}</span>
                                    <span className="spec-value">{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="cta-card">
                            <h3>Ready to get started?</h3>
                            <p>Contact us for a custom quote or demo of our {props.title} solution.</p>
                            <a href="#contact" className="btn btn-primary full-width">Request Quote</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="back-link-container">
                <Link to="/" className="back-link">← Back to Home</Link>
            </div>
        </div>
    );
};

export default ProductPage;
