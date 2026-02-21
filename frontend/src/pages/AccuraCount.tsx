import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './AccuraCount.css';

interface FAQ {
    id: number;
    question: string;
    answer: string;
    display_order: number;
    is_active: number;
}

const AccuraCount = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch FAQs from API
        fetch('/api/faqs?page=accura-count')
            .then(res => res.json())
            .then(data => setFaqs(data.faqs || []))
            .catch(err => console.error('Error fetching FAQs:', err));
    }, []);

    return (
        <div className="accura-page">
            <Helmet>
                <title>AccuraCount - TMC, AADT & Traffic Analysis Software | US, UK, Europe, Australia</title>
                <meta name="description" content="Professional TMC (Turning Movement Count), AADT, traffic volume analysis software for US, UK, Europe, Australia, Germany. Visualize vehicle trajectories, generate heatmaps, perform vehicle classification, origin-destination analysis. Export survey-ready reports with 95%+ accuracy. Client-side traffic data visualization and analysis platform." />
                <meta name="keywords" content="TMC software, AADT analysis tool, turning movement count software, traffic analysis platform, vehicle trajectory visualization, traffic survey software, intersection analysis tool, traffic data visualization, vehicle classification software, origin destination analysis, peak hour analysis tool, traffic volume software, USA traffic software, UK TMC platform, Europe traffic analysis, Australia traffic counting software, Germany AADT tool, transportation planning software" />
                <link rel="canonical" href="https://accuradatavision.com/accura-count" />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="AccuraCount - TMC, AADT & Traffic Analysis Software | US, UK, Europe, Australia" />
                <meta property="og:description" content="Professional TMC, AADT, traffic volume analysis software. Visualize vehicle trajectories, generate heatmaps, export survey-ready reports with 95%+ accuracy." />
                <meta property="og:type" content="product" />
                <meta property="og:url" content="https://accuradatavision.com/accura-count" />
                <meta property="og:image" content="https://accuradatavision.com/images/accura_count_software.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Accura Datavision" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AccuraCount - TMC, AADT & Traffic Analysis Software" />
                <meta name="twitter:description" content="Professional TMC, AADT, traffic volume analysis software with 95%+ accuracy. Visualize trajectories, generate heatmaps, export reports." />
                <meta name="twitter:image" content="https://accuradatavision.com/images/accura_count_software.png" />
                
                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="author" content="Accura Datavision" />
                
                {/* Structured Data - SoftwareApplication */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "AccuraCount",
                        "description": "Professional TMC, AADT, traffic volume analysis software for visualizing vehicle trajectories, generating heatmaps, and exporting survey-ready reports with 95%+ accuracy.",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Windows, macOS, Linux",
                        "provider": {
                            "@type": "Organization",
                            "name": "Accura Datavision",
                            "url": "https://accuradatavision.com"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "127"
                        }
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

            {/* Hero Section */}
            <header className="ac-hero">
                <div className="ac-hero-content">
                    <div className="ac-hero-text">
                        <h1>Client-Side Traffic Analysis & Reporting Software</h1>
                        <p>
                            Traffic surveys today are no longer just about counting vehicles.
                            To truly understand traffic behavior, we need insights like movement trajectories,
                            congestion zones, lane usage, and spatial heatmaps.
                        </p>
                    </div>
                    <div className="ac-hero-image">
                        <img src="/images/accura_count_software.png" alt="AccuraCount traffic analysis software dashboard showing vehicle trajectories, counting lines, lane analysis, and interactive traffic data visualization" loading="lazy" />
                    </div>
                </div>
            </header>

            {/* Intro Text */}
            <section className="ac-section">
                <div className="ac-header">
                    <h2>Beyond Manual Counting</h2>
                    <p>
                        At AccuraDataVision, we’ve built a powerful client-side traffic analysis platform that allows
                            teams to visualize processed tracking data and generate complete survey-ready outputs with 95%+ accuracy.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="ac-comparison-grid">
                    <div className="ac-card manual">
                        <h3>❌ Manual Counting Limitations</h3>
                        <ul className="ac-list">
                            <li><span className="ac-icon">❌</span> Vehicle trajectories across the junction</li>
                            <li><span className="ac-icon">❌</span> Occlusion-aware movement patterns</li>
                            <li><span className="ac-icon">❌</span> Density & dwell-time congestion zones</li>
                            <li><span className="ac-icon">❌</span> Speed variation across road space</li>
                            <li><span className="ac-icon">❌</span> Directional flow intelligence</li>
                        </ul>
                    </div>

                    <div className="ac-card solution">
                        <h3>✅ The Accura Solution</h3>
                        <p style={{ marginBottom: '1rem', color: '#166534' }}>Our solution combines AI Machine Vision based tracking with human intelligence validation for edge cases, delivering reliable, survey-grade analytics.</p>
                        <ul className="ac-list">
                            <li><span className="ac-icon">✅</span> AI Machine Vision based tracking results</li>
                            <li><span className="ac-icon">✅</span> Human intelligence validation</li>
                            <li><span className="ac-icon">✅</span> Complete spatial awareness</li>
                            <li><span className="ac-icon">✅</span> Reliable, survey-grade analytics</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="ac-section" style={{ background: '#f8fafc', maxWidth: '100%' }}>
                <div className="ac-header">
                    <h2>What Clients Can Do Inside The Software</h2>
                    <p>Complete control over your traffic data visualization and reporting.</p>
                </div>

                <div className="ac-features-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="ac-feature-card">
                        <span className="ac-feature-icon">📌</span>
                        <h4>Visualize Trajectories</h4>
                        <p>Visualize vehicle trajectories directly on video playback to verify every movement.</p>
                    </div>

                    <div className="ac-feature-card">
                        <span className="ac-feature-icon">✏️</span>
                        <h4>Draw Counting Lines</h4>
                        <p>Interactively draw counting lines & measure directional flows with precision.</p>
                    </div>

                    <div className="ac-feature-card">
                        <span className="ac-feature-icon">🛣️</span>
                        <h4>Lane Analysis</h4>
                        <p>Define lanes and analyze lane-wise distribution of traffic volume.</p>
                    </div>

                    <div className="ac-feature-card">
                        <span className="ac-feature-icon">📊</span>
                        <h4>Interactive Dashboards</h4>
                        <p>Detailed analytics for vehicle class, speed, and flow trends over time.</p>
                    </div>

                    <div className="ac-feature-card">
                        <span className="ac-feature-icon">🔥</span>
                        <h4>Advanced Heatmaps</h4>
                        <p>Generate density, speed, dwell-time & coverage heatmaps for spatial insights.</p>
                    </div>

                    <div className="ac-feature-card">
                        <span className="ac-feature-icon">📑</span>
                        <h4>Export Reports</h4>
                        <p>Export professional Excel sheets + multi-page PDF reports ready for submission.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section className="ac-section" style={{ background: '#f8fafc' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="ac-header">
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div 
                                    key={faq.id} 
                                    style={{ 
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

            {/* Bottom CTA */}
            <section className="ac-section">
                <div className="ac-cta">
                    <h2>Trafffic Intelligence, Not Just Counting</h2>
                    <p>
                        This is not just traffic counting — it’s complete traffic intelligence,
                        built for modern transportation studies.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AccuraCount;
