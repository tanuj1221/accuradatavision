
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

interface FAQ {
    id: number;
    question: string;
    answer: string;
    display_order: number;
    is_active: number;
}

const Contact = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch FAQs from API
        fetch('/api/faqs?page=contact')
            .then(res => res.json())
            .then(data => setFaqs(data.faqs || []))
            .catch(err => console.error('Error fetching FAQs:', err));
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                alert('Thank you for your message! We will get back to you soon.');
                setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
            } else {
                setStatus('error');
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            alert('An error occurred. Please check if the backend server is running.');
        } finally {
            setStatus('idle');
        }
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact - TMC, AADT, Traffic Survey Services | US, UK, Europe, Australia</title>
                <meta name="description" content="Contact Accura Datavision for professional TMC (Turning Movement Count), AADT, traffic volume studies, vehicle classification, pedestrian counting services in US, UK, Europe, Australia, Germany. Get expert traffic data collection, intersection analysis, origin-destination surveys. Request a quote for transportation planning and traffic engineering projects." />
                <meta name="keywords" content="TMC quote, AADT services, traffic survey contact, turning movement count, vehicle classification quote, traffic volume studies, pedestrian counting services, intersection analysis, traffic data collection USA, UK traffic survey quote, Europe TMC services, Australia AADT, Germany traffic survey, request traffic survey quote, transportation planning services, traffic engineering consultation" />
                <link rel="canonical" href="https://accuradatavision.com/contact" />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Contact - TMC, AADT, Traffic Survey Services | Accura Datavision" />
                <meta property="og:description" content="Contact Accura Datavision for professional TMC, AADT, traffic volume studies, vehicle classification services. Get expert traffic data collection and analysis." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://accuradatavision.com/contact" />
                <meta property="og:image" content="https://accuradatavision.com/images/traffic_detect.jpg" />
                <meta property="og:site_name" content="Accura Datavision" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact - TMC, AADT, Traffic Survey Services" />
                <meta name="twitter:description" content="Contact Accura Datavision for professional TMC, AADT, traffic volume studies, vehicle classification services." />
                <meta name="twitter:image" content="https://accuradatavision.com/images/traffic_detect.jpg" />
                
                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="author" content="Accura Datavision" />
                
                {/* Structured Data - ContactPage */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact Accura Datavision",
                        "description": "Contact us for professional TMC, AADT, traffic volume studies, vehicle classification, and traffic survey services.",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "Accura Datavision",
                            "telephone": "+91-7249417317",
                            "email": "support@accuradatavision.com",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Mumbai",
                                "addressCountry": "IN"
                            }
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
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <span className="contact-label">Get In Touch</span>
                    <h1>Let's Transform Your Vision Into Reality</h1>
                    <p>
                        Ready to optimize your infrastructure with AI Machine Vision based analytics? Our team of experts is here to help you get started with the right solution for your needs.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main">
                <div className="contact-container">
                    {/* Contact Info Cards */}
                    <div className="contact-info-grid">
                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <h3>Call Us</h3>
                            <p>Mon-Fri from 9am to 6pm IST</p>
                            <a href="tel:+917249417317" className="info-link">+91 7249417317</a>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">✉️</div>
                            <h3>Email Us</h3>
                            <p>Our team will respond within 24 hours</p>
                            <a href="mailto:support@accuradatavision.com" className="info-link">support@accuradatavision.com</a>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <h3>Visit Us</h3>
                            <p>Come say hello at our office</p>
                            <span className="info-link">Mumbai, India</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <div className="form-header">
                            <h2>Send Us a Message</h2>
                            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="form-input"
                                        placeholder="Your Company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="form-input"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a subject...</option>
                                    <option value="Traffic Survey">Traffic Survey Services</option>
                                    <option value="People Counting">People Counting Solutions</option>
                                    <option value="Parking Management">Parking Management</option>
                                    <option value="Safety Monitoring">Safety & Security Monitoring</option>
                                    <option value="Demo Request">Request a Demo</option>
                                    <option value="Partnership">Partnership Inquiry</option>
                                    <option value="Support">Technical Support</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Tell us about your project requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' ? (
                                    <>
                                        <span className="btn-spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <span className="btn-arrow">→</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

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

            {/* Trust Section */}
            <section className="trust-section">
                <div className="trust-content">
                    <h2>Trusted by Leading Organizations</h2>
                    <p>Join city planners, engineering firms, and enterprises who rely on our AI Machine Vision based solutions for accurate, real-time insights.</p>
                    <div className="trust-stats">
                        <div className="stat-item">
                            <div className="stat-number">95%+</div>
                            <div className="stat-label">Accuracy Rate</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support Available</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">9000+</div>
                            <div className="stat-label">Hours Computed & Delivered</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
