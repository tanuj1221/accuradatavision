import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Products from '../components/Products';
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

    return (
        <>
            <Helmet>
                <title>TMC, AADT, Vehicle Classification & Traffic Survey Services | US, UK, Europe, Australia</title>
                <meta name="description" content="Leading provider of TMC (Turning Movement Count), AADT, traffic volume studies, vehicle classification, pedestrian counting in US, UK, Europe, Australia, Germany. AI-powered traffic data collection, intersection analysis, origin-destination surveys, peak hour studies with 97%+ accuracy. Professional CCTV traffic surveys and transportation planning services." />
                <meta name="keywords" content="TMC, turning movement count, AADT, traffic volume studies, vehicle classification, pedestrian counting, cyclist counting, intersection survey, origin destination study, peak hour analysis, gap analysis, speed studies, traffic data collection, automated counting, video traffic survey, traffic engineering, transportation planning, highway survey, roundabout analysis, USA traffic counting, UK traffic survey, Europe traffic analysis, Australia TMC, Germany AADT, CCTV traffic counting, AI traffic survey, manual traffic counts, junction analysis" />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Accura Datavision - TMC, AADT & Traffic Survey Services" />
                <meta property="og:description" content="Professional TMC, AADT, vehicle classification, and comprehensive traffic survey services in US, UK, Europe, Australia, Germany with 97%+ accuracy using AI-powered video analytics." />
            </Helmet>
            <Hero />
            <WhyChooseUs />
            <About />
            <Products />
            
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
