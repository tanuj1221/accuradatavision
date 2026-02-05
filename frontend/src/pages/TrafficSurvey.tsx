import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './TrafficSurvey.css';

interface FAQ {
    id: number;
    question: string;
    answer: string;
    display_order: number;
    is_active: number;
}

const TrafficSurvey = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch FAQs from API
        fetch('/api/faqs?page=traffic-survey')
            .then(res => res.json())
            .then(data => setFaqs(data.faqs || []))
            .catch(err => console.error('Error fetching FAQs:', err));
    }, []);

    const scrollToContact = () => {
        const element = document.getElementById('features');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="traffic-survey-page">
            <Helmet>
                <title>TMC, AADT, Vehicle Classification | Traffic Survey Services | US, UK, Europe, Australia</title>
                <meta name="description" content="Professional TMC (Turning Movement Count), AADT, traffic volume studies, vehicle classification, pedestrian & cyclist counting in US, UK, Europe, Australia, Germany. AI-powered intersection analysis, origin-destination surveys, peak hour studies, gap analysis with 97%+ accuracy. Expert CCTV traffic surveys and data collection." />
                <meta name="keywords" content="TMC services, turning movement count, AADT, annual average daily traffic, traffic volume studies, vehicle classification, pedestrian counting, cyclist counting, intersection analysis, origin destination survey, peak hour analysis, gap analysis, speed studies, traffic data collection, automated traffic counting, video traffic survey, manual traffic counts, CCTV traffic counting, traffic engineering services, transportation planning, highway survey, road traffic survey, junction survey, roundabout analysis, multi-modal survey, level of service, USA traffic survey, UK TMC, Europe traffic studies, Australia AADT, Germany vehicle classification" />
                <link rel="canonical" href="https://accuradatavision.com/traffic-survey" />
            </Helmet>

            {/* Hero Section */}
            <section className="ts-hero">
                <div className="ts-split-bg">
                    <div className="ts-split-left" style={{ backgroundImage: 'url("/images/long_trajectories.jpg")' }}></div>
                    <div className="ts-split-right">
                        <video autoPlay loop muted playsInline className="ts-hero-video">
                            <source src="/videos/tracking_compressed_15fps.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="ts-hero-overlay"></div>
                <div className="ts-hero-content">
                    <span className="ts-hero-label">Next-Gen Traffic Analytics</span>
                    <h1>Precision Data Through <br /> Advanced AI & Verification.</h1>
                    <p>
                        Our advanced tracker handles complex occlusions—even at low camera heights. We use AI to identify problematic trajectories and ID shifts, then apply expert analyst verification to post-process the data, guaranteeing over 97% accuracy.
                    </p>
                    <div className="ts-btn-group">
                        <button onClick={scrollToContact} className="ts-btn ts-btn-primary">
                            See Full Solution <span style={{ fontSize: '1.2em' }}>↓</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Process / ROI Definition Section */}
            <section className="ts-section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="visual-container">
                    <div className="visual-content">
                        <span className="ts-subtitle">Step 1: Ingest & Analyze</span>
                        <h2>Smart Region Definition & Tracking</h2>
                        <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                            We start by integrating your existing CCTV footage. You define the <strong>Region of Interest (ROI)</strong>—whether it's a complex junction, a roundabout, or a highway segment.
                        </p>
                        <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                            Our <strong>Advanced Tracker</strong> then takes over. Unlike basic motion detectors, it robustly handles:
                        </p>
                        <ul className="feature-list" style={{ color: '#475569' }}>
                            <li style={{ marginBottom: '0.5rem' }}>• <strong>Low Camera Angles:</strong> Maintaining IDs even when vehicles block each other.</li>
                            <li style={{ marginBottom: '0.5rem' }}>• <strong>Occlusions:</strong> Tracking vehicles through obstacles (trees, poles, or other cars).</li>
                            <li style={{ marginBottom: '0.5rem' }}>• <strong>Complex Trajectories:</strong> Accurately mapping turns and lane changes.</li>
                        </ul>
                    </div>

                    <div className="visual-image-wrapper">
                        <div className="video-container-framed" style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            border: '4px solid white',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                padding: '4px 10px',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                zIndex: 10
                            }}>Industry vs Accura AI</div>
                            <video controls autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
                                <source src="/videos/v1_og_3way_comparison_web.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                            See the difference: Industry Standard vs. Current Software
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Flow Section (New) */}
            <section className="ts-process-section">
                <div className="process-header">
                    <span className="ts-subtitle">End-to-End Transparency</span>
                    <h2>How We Deliver Precision</h2>
                </div>

                <div className="process-timeline">
                    <div className="process-step">
                        <div className="step-number">01</div>
                        <div className="step-content">
                            <img src="/images/v5_scene_context_web.jpg" alt="Scene Setup" />
                            <h3>Video Input & ROI</h3>
                            <p>Define regions of interest from any CCTV footage</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-number">02</div>
                        <div className="step-content">
                            <img src="/images/tracking_demo.gif" alt="AI Detection" />
                            <h3>AI Detection & Tracking</h3>
                            <p>Real-time vehicle identification with unique IDs</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-number">03</div>
                        <div className="step-content">
                            <img src="/images/tracking_output.jpg" alt="Trajectory Output" />
                            <h3>Trajectory Analysis</h3>
                            <p>Complete movement visualization and path mapping</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-number">04</div>
                        <div className="step-content">
                            <img src="/images/ai_verification_analysis.jpg" alt="AI Verification Analysis" />
                            <h3>AI + Manual Verification</h3>
                            <p>Detect outliers, ID switches & occlusions with AI algorithms and expert review</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-number">05</div>
                        <div className="step-content">
                            <img src="/images/long_trajectories_web.jpg" alt="Post Processed Data" />
                            <h3>Post-Processed Data</h3>
                            <p>98%+ accurate trajectory data ready for analysis</p>
                        </div>
                    </div>

                    <div className="process-step">
                        <div className="step-number">06</div>
                        <div className="step-content">
                            <img src="/images/visualization_window_web.jpg" alt="Accura Count Software" />
                            <h3>Accura Count Visualization</h3>
                            <p>Visualize data your way with our powerful analysis platform</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accura Count Software Section (Injected) */}
            <div id="accura-count-details">
                {/* Hero / Intro */}
                <header className="ac-hero">
                    <div className="ac-hero-text">
                        <h1>Client-Side Traffic Analysis & Reporting Software</h1>
                        <p>
                            We deliver not just data, but the tools to verify it. By providing our Client-Side Analysis Software with every project, we offer complete transparency—allowing you to inspect individual vehicle trajectories, replay traffic events, validate insights, perform custom analysis, and generate comprehensive reports to better understand traffic behavior with accurate counts.
                        </p>
                    </div>
                    <div className="ac-video-grid">
                        <div className="ac-video-item">
                            <video src="/videos/ac_counting.mp4" autoPlay loop muted playsInline />
                        </div>
                        <div className="ac-video-item">
                            <video src="/videos/ac_lanes.mp4" autoPlay loop muted playsInline />
                        </div>
                        <div className="ac-video-item">
                            <video src="/videos/ac_statistics.mp4" autoPlay loop muted playsInline />
                        </div>
                    </div>
                </header>

                {/* Intro Text */}
                <section className="ac-section">
                    <div className="ac-header">
                        <h2>What Clients Can Do Inside The Software</h2>
                        <p>Complete control over your traffic data visualization and reporting.</p>
                    </div>

                    {/* Features Grid */}
                    <div className="ac-features-grid" style={{ maxWidth: '1200px', margin: '3rem auto' }}>
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
                    
                    <div className="ac-header" style={{ marginTop: '5rem' }}>
                        <h2>Beyond Manual Counting</h2>
                        <p>
                            At AccuraDataVision, we’ve built a powerful client-side traffic analysis platform that allows
                            teams to visualize processed tracking data and generate complete survey-ready outputs with 97%+ accuracy.
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
                            <p style={{ marginBottom: '1rem', color: '#166534' }}>Our solution combines AI-based tracking with human intelligence validation for edge cases, delivering reliable, survey-grade analytics.</p>
                            <ul className="ac-list">
                                <li><span className="ac-icon">✅</span> AI-based tracking results</li>
                                <li><span className="ac-icon">✅</span> Human intelligence validation</li>
                                <li><span className="ac-icon">✅</span> Complete spatial awareness</li>
                                <li><span className="ac-icon">✅</span> Reliable, survey-grade analytics</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>

            {/* Why Our Model Section */}
            <section className="ts-section" id="features">
                <div className="ts-section-header">
                    <span className="ts-subtitle">The Accura Advantage</span>
                    <h2>Why Our Model Leads the Industry</h2>
                    <p>We don't just count cars. We understand traffic behavior using state-of-the-art deep learning.</p>
                </div>

                <div className="why-grid">
                    <div className="why-card">
                        <div className="why-icon">🎯</div>
                        <h3>97%+ Proven Accuracy</h3>
                        <p>
                            Unlike standard off-the-shelf models, our system is fine-tuned on diverse urban environments. Every dataset is human-verified to ensure ground-truth alignment.
                        </p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon">👁️</div>
                        <h3>Detail-Oriented Segmentation</h3>
                        <p>
                            We go beyond simple bounding boxes. Our segmentation masks precisely delineate vehicles, preventing overlap errors even in dense congestion.
                        </p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon">🌙</div>
                        <h3>All-Condition Robustness</h3>
                        <p>
                            Rain, snow, or night-time glare? No problem. Our models are trained on varied weather datasets to deliver consistent results 24/7.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visual / Technology Section */}
            <div className="ts-visual-breakdown">
                <div className="visual-container">
                    <div className="visual-content">
                        <span className="ts-subtitle">Under the Hood</span>
                        <h2>More Than Just Counting</h2>
                        <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>
                            Traditional loops and sensors fail to capture the full picture. Our vision-based approach provides rich contextual data that transforms urban planning.
                        </p>

                        <div className="features-grid-small">
                            <div className="feature-item-small">
                                <span className="check-icon">✓</span>
                                <div>
                                    <strong>Multi-Class Classification</strong>
                                    <div style={{ fontSize: '0.85em', color: '#64748b' }}>Cars, Trucks, Buses, Bikes, Pedestrians</div>
                                </div>
                            </div>
                            <div className="feature-item-small">
                                <span className="check-icon">✓</span>
                                <div>
                                    <strong>Turning Movements (TMC)</strong>
                                    <div style={{ fontSize: '0.85em', color: '#64748b' }}>Left, Right, U-Turn patterns</div>
                                </div>
                            </div>
                            <div className="feature-item-small">
                                <span className="check-icon">✓</span>
                                <div>
                                    <strong>Gap & Headway Analysis</strong>
                                    <div style={{ fontSize: '0.85em', color: '#64748b' }}>Safety and flow efficiency metrics</div>
                                </div>
                            </div>
                            <div className="feature-item-small">
                                <span className="check-icon">✓</span>
                                <div>
                                    <strong>Gridlock Prediction</strong>
                                    <div style={{ fontSize: '0.85em', color: '#64748b' }}>Queue length monitoring</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="visual-image-wrapper">
                        <img src="/images/analysis_detect.jpg" alt="Traffic Analysis Visualization" className="visual-image" />
                        <div className="stat-badge">
                            <span className="stat-number">24h</span>
                            <span className="stat-label">Turnaround</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="ts-faq-section" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem', color: '#1e3a8a' }}>
                        Frequently Asked Questions
                    </h2>
                    
                    <div className="faq-list">
                        {faqs.length === 0 ? (
                            <div style={{ textAlign: 'center', color: '#64748b', padding: '40px 0' }}>
                                No FAQs available at the moment.
                            </div>
                        ) : (
                            faqs.map((faq, index) => (
                                <div 
                                    key={faq.id} 
                                    className="faq-item" 
                                    style={{ 
                                        marginBottom: '30px', 
                                        borderBottom: index === faqs.length - 1 ? 'none' : '1px solid #e2e8f0', 
                                        paddingBottom: '25px' 
                                    }}
                                >
                                    <h3 style={{ color: '#1e40af', marginBottom: '12px', fontSize: '1.3rem' }}>
                                        {faq.question}
                                    </h3>
                                    <p style={{ color: '#64748b', lineHeight: '1.7' }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* FAQ Schema Markup */}
                {faqs.length > 0 && (
                    <Helmet>
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
                    </Helmet>
                )}
            </section>

            {/* CTA Section */}
            <section className="ts-cta-section">
                <div className="ts-cta-content">
                    <h2>Ready to Optimize Your Roads?</h2>
                    <p>
                        Join city planners, engineering firms, and private developers who trust Accura Datavision for their traffic intelligence.
                    </p>
                    <div className="ts-btn-group">
                        <Link to="/contact" className="ts-btn ts-btn-primary" style={{ transform: 'scale(1.1)' }}>
                            Get Free Consultation
                        </Link>
                        <Link to="/contact" className="ts-btn ts-btn-secondary" style={{ transform: 'scale(1.1)' }}>
                            Request Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrafficSurvey;
