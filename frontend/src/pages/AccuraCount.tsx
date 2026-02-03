import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './AccuraCount.css';

const AccuraCount = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="accura-page">
            <Helmet>
                <title>AccuraCount - TMC, AADT & Traffic Analysis Software | US, UK, Europe, Australia</title>
                <meta name="description" content="Professional TMC (Turning Movement Count), AADT, traffic volume analysis software for US, UK, Europe, Australia, Germany. Visualize vehicle trajectories, generate heatmaps, perform vehicle classification, pedestrian counting, origin-destination analysis. Export survey-ready reports with 97%+ accuracy. Client-side traffic data visualization and analysis platform." />
                <meta name="keywords" content="TMC software, AADT analysis tool, turning movement count software, traffic analysis platform, vehicle trajectory visualization, traffic survey software, intersection analysis tool, traffic data visualization, vehicle classification software, origin destination analysis, peak hour analysis tool, traffic volume software, USA traffic software, UK TMC platform, Europe traffic analysis, Australia traffic counting software, Germany AADT tool, transportation planning software" />
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
                        <img src="/images/accura_count_software.png" alt="AccuraCount Dashboard Interface" />
                    </div>
                </div>
            </header>

            {/* Intro Text */}
            <section className="ac-section">
                <div className="ac-header">
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
