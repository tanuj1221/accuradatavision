import { Helmet } from 'react-helmet-async';
import './AboutPage.css';

const About = () => {
  const values = [
    {
      title: 'Precision First',
      description: 'We are committed to delivering the highest accuracy standards through rigorous quality control and expert verification processes.'
    },
    {
      title: 'Innovation Driven',
      description: 'Continuously advancing our AI Machine Vision technology to stay at the forefront of traffic analytics innovation.'
    },
    {
      title: 'Client Centric',
      description: 'Your success is our priority. We work closely with clients to understand their unique requirements and deliver tailored solutions.'
    },
    {
      title: 'Data Security',
      description: 'We maintain the highest standards of data security and privacy compliance, ensuring your information is always protected.'
    },
    {
      title: 'Global Expertise',
      description: 'Serving clients worldwide with deep understanding of international traffic standards and regulatory requirements.'
    },
    {
      title: 'Transparency',
      description: 'Complete transparency in our processes with AccuraCount software, allowing clients to verify and analyze data independently.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Video Collection',
      description: 'Receive and process CCTV footage from various sources, ensuring compatibility with our AI Machine Vision systems.'
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'Advanced AI Machine Vision algorithms analyze footage to extract vehicle trajectories, classifications, and movement patterns.'
    },
    {
      step: '03',
      title: 'Human Verification',
      description: 'Expert analysts review and validate AI results, handling complex scenarios and edge cases for maximum accuracy.'
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Rigorous quality checks ensure data meets industry standards (FHWA, AUSTROADS, IRC) and client specifications.'
    },
    {
      step: '05',
      title: 'Analysis & Reporting',
      description: 'Generate comprehensive reports in PDF and Excel formats with visualizations, ready for submission and decision-making.'
    },
    {
      step: '06',
      title: 'Client Delivery',
      description: 'Deliver final reports along with AccuraCount software access for independent verification and further analysis.'
    }
  ];

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us - AI Machine Vision Based Traffic Survey Services | Accura Datavision</title>
        <meta name="description" content="Learn about Accura Datavision - a leading provider of AI Machine Vision based traffic survey services, TMC, AADT, vehicle classification, and comprehensive traffic data analysis. Serving US, UK, Europe, Australia, Germany with 95%+ accuracy." />
        <meta name="keywords" content="about accura datavision, traffic survey company, AI machine vision, TMC services, AADT analysis, vehicle classification, traffic data collection, transportation planning, traffic engineering, CCTV traffic analysis" />
        <meta name="author" content="Accura Datavision" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://accuradatavision.com/about" />
        
        {/* Hreflang Tags for International SEO */}
        <link rel="alternate" hrefLang="en" href="https://accuradatavision.com/about" />
        <link rel="alternate" hrefLang="en-US" href="https://accuradatavision.com/about" />
        <link rel="alternate" hrefLang="en-GB" href="https://accuradatavision.com/about" />
        <link rel="alternate" hrefLang="en-AU" href="https://accuradatavision.com/about" />
        <link rel="alternate" hrefLang="en-DE" href="https://accuradatavision.com/about" />
        <link rel="alternate" hrefLang="x-default" href="https://accuradatavision.com/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us - AI Machine Vision Based Traffic Survey Services" />
        <meta property="og:description" content="Accura Datavision specializes in AI Machine Vision based traffic survey services with 95%+ accuracy. Serving clients worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://accuradatavision.com/about" />
        <meta property="og:image" content="https://accuradatavision.com/images/traffic_detect.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Accura Datavision" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - AI Machine Vision Based Traffic Survey Services" />
        <meta name="twitter:description" content="Learn about Accura Datavision - leading AI Machine Vision based traffic survey services provider with 95%+ accuracy." />
        <meta name="twitter:image" content="https://accuradatavision.com/images/traffic_detect.jpg" />
        
        {/* Enhanced Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Accura Datavision",
            "description": "Professional AI Machine Vision based traffic survey services provider specializing in TMC, AADT, vehicle classification, and comprehensive traffic data analysis",
            "url": "https://accuradatavision.com/about",
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://accuradatavision.com/#organization",
              "name": "Accura Datavision",
              "alternateName": "Accura DataVision",
              "url": "https://accuradatavision.com",
              "logo": "https://accuradatavision.com/logo.svg",
              "description": "Leading provider of AI Machine Vision based traffic survey services with 95%+ accuracy. Specializing in TMC, AADT, vehicle classification, and comprehensive traffic data analysis.",
              "email": "support@accuradatavision.com",
              "telephone": "+91-7249417317",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "areaServed": [
                {"@type": "Country", "name": "United States"},
                {"@type": "Country", "name": "United Kingdom"},
                {"@type": "Country", "name": "Australia"},
                {"@type": "Country", "name": "Germany"},
                {"@type": "Country", "name": "India"}
              ],
              "knowsAbout": [
                "AI Machine Vision",
                "Traffic Survey Services",
                "TMC Analysis",
                "AADT Analysis",
                "Vehicle Classification",
                "Traffic Data Collection",
                "Transportation Planning"
              ],
              "sameAs": [
                "https://www.linkedin.com/company/accura-datavision"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://accuradatavision.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Us",
                  "item": "https://accuradatavision.com/about"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-hero-badge">About Accura Datavision</span>
          <h1 className="about-hero-title">
            Transforming Traffic Data Collection Through <span>AI Machine Vision</span>
          </h1>
          <p className="about-hero-subtitle">
            We specialize in delivering accurate, reliable traffic survey services using advanced AI Machine Vision technology combined with expert human verification. Our innovative approach sets new standards in transportation planning and traffic engineering.
          </p>
        </div>
        <div className="about-hero-image">
          <img 
            src="/images/traffic_detect.jpg" 
            alt="AI Machine Vision based traffic analysis"
            loading="eager"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="about-container">
          <div className="section-header">
            <span className="section-tag">Our Story</span>
            <h2>Pioneering the Future of Traffic Analytics</h2>
          </div>
          <div className="story-content-full">
            <div className="story-image-full">
            <video 
                autoPlay
                loop
                muted
                playsInline
                aria-label="AI Machine Vision based traffic analysis and data collection demonstration"
                className="story-video"
              >
                <source src="/videos/tracking_compressed_15fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="story-text-full">
              <p>
                Accura Datavision was founded with a vision to revolutionize traffic data collection through innovative AI Machine Vision technology. Recognizing the limitations of traditional manual counting methods—time-consuming, expensive, and prone to human error—we set out to create a better solution.
              </p>
              <p>
                Our journey began with developing proprietary AI Machine Vision algorithms capable of accurately analyzing CCTV footage to extract comprehensive traffic data. However, we understood that technology alone wasn't enough. That's why we integrated expert human verification into our workflow, ensuring the highest accuracy standards while maintaining efficiency.
              </p>
              <p>
                Today, we serve clients across the globe—from the United States and United Kingdom to Australia, Germany, and beyond. Our commitment to innovation, accuracy, and client satisfaction has made us a trusted partner for transportation planners, traffic engineers, and infrastructure developers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-section">
        <div className="about-container">
          <div className="section-header">
            <span className="section-tag">Our Foundation</span>
            <h2>Mission, Vision & Approach</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-number">01</div>
              <div className="mission-card-content">
                <h3>Our Mission</h3>
                <p>
                  To provide the most accurate and reliable traffic data collection and analysis services using cutting-edge AI Machine Vision technology, enabling transportation planners and traffic engineers to make informed decisions that shape the future of transportation infrastructure.
                </p>
              </div>
            </div>
            <div className="mission-card">
              <div className="mission-number">02</div>
              <div className="mission-card-content">
                <h3>Our Vision</h3>
                <p>
                  To become the global leader in AI Machine Vision based traffic analytics, setting new standards for accuracy, efficiency, and innovation in the transportation planning industry while making advanced traffic analysis accessible to organizations worldwide.
                </p>
              </div>
            </div>
            <div className="mission-card">
              <div className="mission-number">03</div>
              <div className="mission-card-content">
                <h3>Our Approach</h3>
                <p>
                  We combine state-of-the-art AI Machine Vision algorithms with expert human verification to deliver 95%+ accurate results. Our hybrid methodology ensures every project meets the highest quality standards while maintaining cost-effectiveness and fast turnaround times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="about-process">
        <div className="about-container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2>How We Deliver Excellence</h2>
            <p className="section-subtitle">
              A systematic approach ensuring accuracy and reliability at every step
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((item, index) => (
              <div key={index} className="process-item">
                <div className="process-step-number">{item.step}</div>
                <div className="process-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2>What Drives Us</h2>
            <p className="section-subtitle">
              The core principles that define our work and relationships
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="value-card-content">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="about-what-we-do">
        <div className="about-container">
          <div className="section-header">
            <span className="section-tag">Our Expertise</span>
            <h2>What We Do</h2>
            <p className="section-subtitle">
              We provide comprehensive AI Machine Vision based solutions for traffic data collection and analysis.
            </p>
          </div>

          <div className="expertise-grid">
            <div className="expertise-item">
              <div className="expertise-number">01</div>
              <div className="expertise-item-content">
                <h3>Traffic Survey Services</h3>
                <p>
                  Professional TMC (Turning Movement Count), AADT (Annual Average Daily Traffic), vehicle classification, and comprehensive traffic volume studies using AI Machine Vision technology.
                </p>
              </div>
            </div>
            <div className="expertise-item">
              <div className="expertise-number">02</div>
              <div className="expertise-item-content">
                <h3>Intersection Analysis</h3>
                <p>
                  Detailed intersection studies including turning movements, gap analysis, headway analysis, and level of service calculations for transportation planning.
                </p>
              </div>
            </div>
            <div className="expertise-item">
              <div className="expertise-number">03</div>
              <div className="expertise-item-content">
                <h3>Origin-Destination Surveys</h3>
                <p>
                  Comprehensive OD surveys to understand travel patterns, route choices, and traffic flow distribution across road networks.
                </p>
              </div>
            </div>
            <div className="expertise-item">
              <div className="expertise-number">04</div>
              <div className="expertise-item-content">
                <h3>Peak Hour Analysis</h3>
                <p>
                  Identification of peak traffic periods, directional flow analysis, and capacity assessment for infrastructure planning and optimization.
                </p>
              </div>
            </div>
            <div className="expertise-item">
              <div className="expertise-number">05</div>
              <div className="expertise-item-content">
                <h3>Vehicle Classification</h3>
                <p>
                  Accurate classification of vehicles by type (cars, trucks, buses, motorcycles) using AI Machine Vision algorithms for detailed traffic composition analysis.
                </p>
              </div>
            </div>
            <div className="expertise-item">
              <div className="expertise-number">06</div>
              <div className="expertise-item-content">
                <h3>Data Reporting</h3>
                <p>
                  Professional reports in PDF and Excel formats, including visualizations, charts, and comprehensive data analysis ready for submission to authorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="about-technology">
        <div className="about-container">
          <div className="section-header">
            <span className="section-tag">Our Technology</span>
            <h2>AI Machine Vision Based Solutions</h2>
            <p className="section-subtitle">
              Our proprietary AI Machine Vision technology processes CCTV footage to extract accurate traffic data. Unlike traditional methods, our system delivers superior results.
            </p>
          </div>
          <div className="tech-image-full">
            <img 
              src="/images/lane_appearance.jpg" 
              alt="AI Machine Vision based traffic analysis technology"
              loading="lazy"
            />
          </div>
          <div className="tech-features-full">
            <ul className="tech-features">
              <li>
                <strong>Advanced Tracking:</strong> Maintains vehicle IDs even through occlusions and complex traffic scenarios
              </li>
              <li>
                <strong>Multi-Class Detection:</strong> Accurately identifies and classifies different vehicle types
              </li>
              <li>
                <strong>Trajectory Analysis:</strong> Tracks complete vehicle paths for turning movement analysis
              </li>
              <li>
                <strong>Human Verification:</strong> Expert analysts review and validate AI Machine Vision results for 95%+ accuracy
              </li>
              <li>
                <strong>Client Software:</strong> AccuraCount software for visualization and custom analysis
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

