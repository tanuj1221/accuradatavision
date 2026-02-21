import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Products from '../components/Products';
import TrustSignals from '../components/TrustSignals';
import Results from '../components/Results';
import { Helmet } from 'react-helmet-async';

interface FAQ {
    id: number;
    question: string;
    answer: string;
    display_order: number;
    is_active: number;
}

const Home = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);

    useEffect(() => {
        // Fetch general FAQs for home page
        fetch('/api/faqs?page=general')
            .then(res => res.json())
            .then(data => setFaqs(data.faqs || []))
            .catch(err => console.error('Error fetching FAQs:', err));
    }, []);

    const baseUrl = 'https://accuradatavision.com';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : baseUrl;

    return (
        <>
            <Helmet>
                <title>TMC, AADT, Vehicle Classification & Traffic Survey Services | US, UK, Europe, Australia</title>
                <meta name="description" content="Leading provider of TMC (Turning Movement Count), AADT, traffic volume studies, vehicle classification, link count analysis, queue length detection, journey time tracking, roundabout analysis, density heatmaps, speed analysis, near miss detection, O-D matrix analysis in US, UK, Europe, Australia, Germany. AI Machine Vision based traffic data collection with 95%+ accuracy, faster delivery, and cost-effective solutions. Professional CCTV traffic surveys and transportation planning services." />
                <meta name="keywords" content="TMC, turning movement count, AADT, traffic volume studies, vehicle classification, link count analysis, queue length detection, journey time tracking, roundabout analysis, density heatmap, dual time heatmap, road coverage heatmap, peak hours analysis, speed analysis, near miss detection, O-D matrix analysis, origin destination matrix, traffic flow patterns, incident detection, parking management, traffic data collection, automated counting, video traffic survey, traffic engineering, transportation planning, highway survey, USA traffic counting, UK traffic survey, Europe traffic analysis, Australia TMC, Germany AADT, CCTV traffic counting, AI Machine Vision traffic survey, exportable reports PDF Excel CSV, traffic survey company USA, traffic engineering services UK, transportation planning Australia, traffic data collection Germany, FHWA compliant traffic studies, AUSTROADS traffic surveys, IRC traffic analysis, traffic consulting services, video analytics traffic counting, machine learning traffic analysis, computer vision traffic detection, automated traffic monitoring, intelligent transportation systems, smart city traffic solutions, traffic survey software, traffic counting services, intersection traffic analysis, origin destination studies, peak hour traffic analysis, traffic flow modeling, traffic pattern analysis" />
                <link rel="canonical" href={currentUrl} />
                
                {/* Hreflang Tags for International SEO */}
                <link rel="alternate" hrefLang="en" href={`${baseUrl}/`} />
                <link rel="alternate" hrefLang="en-US" href={`${baseUrl}/`} />
                <link rel="alternate" hrefLang="en-GB" href={`${baseUrl}/`} />
                <link rel="alternate" hrefLang="en-AU" href={`${baseUrl}/`} />
                <link rel="alternate" hrefLang="en-DE" href={`${baseUrl}/`} />
                <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/`} />
                
                {/* Global Distribution Meta Tags */}
                <meta name="distribution" content="global" />
                <meta name="rating" content="general" />
                <meta name="target" content="all" />
                <meta name="audience" content="all" />
                <meta name="coverage" content="Worldwide" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Accura Datavision - TMC, AADT & Traffic Survey Services | US, UK, Europe, Australia" />
                <meta property="og:description" content="Professional TMC, AADT, vehicle classification, and comprehensive traffic survey services in US, UK, Europe, Australia, Germany with 95%+ accuracy using AI Machine Vision based video analytics." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content={`${baseUrl}/images/traffic_detect.jpg`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Accura Datavision" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="en_GB" />
                <meta property="og:locale:alternate" content="en_AU" />
                <meta property="og:locale:alternate" content="en_DE" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accura Datavision - TMC, AADT & Traffic Survey Services" />
                <meta name="twitter:description" content="Professional TMC, AADT, vehicle classification, and comprehensive traffic survey services in US, UK, Europe, Australia, Germany with 95%+ accuracy." />
                <meta name="twitter:image" content={`${baseUrl}/images/traffic_detect.jpg`} />
                
                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="author" content="Accura Datavision" />
                
                {/* Structured Data - Organization */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Accura Datavision",
                        "url": baseUrl,
                        "logo": `${baseUrl}/logo.svg`,
                        "description": "Professional TMC, AADT, traffic volume studies, vehicle classification, link count analysis, queue length detection, journey time tracking, roundabout analysis, density heatmaps, speed analysis, near miss detection, O-D matrix analysis, and comprehensive traffic survey services in US, UK, Europe, Australia, Germany with 95%+ accuracy, faster delivery, and cost-effective solutions",
                        "telephone": "+91-7249417317",
                        "email": "support@accuradatavision.com",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Mumbai",
                            "addressCountry": "IN"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/accura-datavision"
                        ],
                        "areaServed": [
                            {"@type": "Country", "name": "United States", "identifier": "US"},
                            {"@type": "Country", "name": "United Kingdom", "identifier": "GB"},
                            {"@type": "Country", "name": "Australia", "identifier": "AU"},
                            {"@type": "Country", "name": "Germany", "identifier": "DE"},
                            {"@type": "Country", "name": "India", "identifier": "IN"},
                            {"@type": "Country", "name": "Canada", "identifier": "CA"},
                            {"@type": "Country", "name": "New Zealand", "identifier": "NZ"},
                            {"@type": "Country", "name": "Netherlands", "identifier": "NL"},
                            {"@type": "Country", "name": "France", "identifier": "FR"},
                            {"@type": "Country", "name": "Spain", "identifier": "ES"}
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Traffic Survey Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "TMC - Turning Movement Count",
                                        "description": "Professional turning movement count services for intersection analysis"
                                    },
                                    "areaServed": ["US", "GB", "AU", "DE", "IN"]
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "AADT - Annual Average Daily Traffic",
                                        "description": "Comprehensive AADT analysis for transportation planning"
                                    },
                                    "areaServed": ["US", "GB", "AU", "DE", "IN"]
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Vehicle Classification",
                                        "description": "AI Machine Vision based vehicle classification and counting"
                                    },
                                    "areaServed": ["US", "GB", "AU", "DE", "IN"]
                                }
                            ]
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "127"
                        }
                    })}
                </script>
                
                {/* Structured Data - Website */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Accura Datavision",
                        "url": baseUrl,
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": `${baseUrl}/?search={search_term_string}`
                            },
                            "query-input": "required name=search_term_string"
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
            <Hero />
            <Results />
            <WhyChooseUs />
            <About />
            <Products />
            <TrustSignals />
            
            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem', color: '#1e3a8a' }}>
                            Frequently Asked Questions
                        </h2>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div 
                                    key={faq.id} 
                                    style={{ 
                                        backgroundColor: 'white',
                                        padding: '25px',
                                        borderRadius: '8px',
                                        marginBottom: index === faqs.length - 1 ? '0' : '20px',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <h3 style={{ color: '#1e40af', marginBottom: '12px', fontSize: '1.3rem' }}>
                                        {faq.question}
                                    </h3>
                                    <p style={{ color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Home;
