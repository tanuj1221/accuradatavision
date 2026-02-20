import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ProductPage.css';

interface FAQ {
    id: number;
    question: string;
    answer: string;
    display_order: number;
    is_active: number;
}

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
    pageCategory?: string;
}

const ProductPage = (props: ProductPageProps) => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch FAQs if pageCategory is provided
        if (props.pageCategory) {
            fetch(`/api/faqs?page=${props.pageCategory}`)
                .then(res => res.json())
                .then(data => setFaqs(data.faqs || []))
                .catch(err => console.error('Error fetching FAQs:', err));
        }
    }, [props.pageCategory]);

    const pageTitle = props.metaTitle || `${props.title} - Accura Datavision`;
    const pageDescription = props.metaDescription || props.description;
    const baseUrl = 'https://accuradatavision.com';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : `${baseUrl}${props.pageCategory ? `/${props.pageCategory}` : ''}`;
    const imageUrl = props.image.startsWith('http') ? props.image : `${baseUrl}${props.image}`;

    return (
        <div className="product-page">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content={`${props.title}, AI traffic analytics, video analytics, ${props.title.toLowerCase()} software, traffic survey services, TMC, AADT, US, UK, Europe, Australia, Germany`} />
                <link rel="canonical" href={currentUrl} />
                
                {/* Open Graph tags */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Accura Datavision" />
                
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                
                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="author" content="Accura Datavision" />
                
                {/* Structured Data - Product/Service */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": props.title,
                        "description": pageDescription,
                        "provider": {
                            "@type": "Organization",
                            "name": "Accura Datavision",
                            "url": baseUrl,
                            "telephone": "+91-7249417317",
                            "email": "support@accuradatavision.com"
                        },
                        "areaServed": [
                            {"@type": "Country", "name": "United States"},
                            {"@type": "Country", "name": "United Kingdom"},
                            {"@type": "Country", "name": "Australia"},
                            {"@type": "Country", "name": "Germany"}
                        ],
                        "serviceType": props.title,
                        "image": imageUrl
                    })}
                </script>
                
                {/* FAQ Schema */}
                {faqs.length > 0 && (
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })}
                    </script>
                )}
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
                            <a href="/contact" className="btn btn-primary full-width">Request Quote</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section style={{ padding: '60px 20px', backgroundColor: '#f8fafc' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: '#1e40af' }}>
                            Frequently Asked Questions
                        </h2>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div 
                                    key={faq.id} 
                                    style={{ 
                                        borderBottom: index === faqs.length - 1 ? 'none' : '1px solid #e2e8f0', 
                                        paddingBottom: '20px',
                                        backgroundColor: 'white',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        marginBottom: index === faqs.length - 1 ? '0' : '15px'
                                    }}
                                >
                                    <h3 style={{ color: '#1e40af', marginBottom: '10px', fontSize: '1.1rem' }}>
                                        {faq.question}
                                    </h3>
                                    <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="back-link-container">
                <Link to="/" className="back-link">← Back to Home</Link>
            </div>
        </div>
    );
};

export default ProductPage;
