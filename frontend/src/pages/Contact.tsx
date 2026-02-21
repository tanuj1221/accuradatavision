
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
                
                {/* Hreflang Tags for International SEO */}
                <link rel="alternate" hrefLang="en" href="https://accuradatavision.com/contact" />
                <link rel="alternate" hrefLang="en-US" href="https://accuradatavision.com/contact" />
                <link rel="alternate" hrefLang="en-GB" href="https://accuradatavision.com/contact" />
                <link rel="alternate" hrefLang="en-AU" href="https://accuradatavision.com/contact" />
                <link rel="alternate" hrefLang="en-DE" href="https://accuradatavision.com/contact" />
                <link rel="alternate" hrefLang="x-default" href="https://accuradatavision.com/contact" />
                
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
                            "url": "https://accuradatavision.com",
                            "telephone": "+91-7249417317",
                            "email": "support@accuradatavision.com",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Mumbai",
                                "addressRegion": "Maharashtra",
                                "addressCountry": "IN"
                            },
                            "areaServed": [
                                {"@type": "Country", "name": "United States", "identifier": "US"},
                                {"@type": "Country", "name": "United Kingdom", "identifier": "GB"},
                                {"@type": "Country", "name": "Australia", "identifier": "AU"},
                                {"@type": "Country", "name": "Germany", "identifier": "DE"},
                                {"@type": "Country", "name": "India", "identifier": "IN"},
                                {"@type": "Country", "name": "Canada", "identifier": "CA"},
                                {"@type": "Country", "name": "New Zealand", "identifier": "NZ"}
                            ],
                            "sameAs": [
                                "https://www.linkedin.com/company/accura-datavision"
                            ]
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
                            <div className="info-icon-wrapper">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon-svg">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <h3>Call Us</h3>
                            <p>Mon-Fri from 9am to 6pm IST</p>
                            <a href="tel:+917249417317" className="info-link">+91 7249417317</a>
                        </div>

                        <div className="info-card info-card-whatsapp">
                            <div className="info-icon-wrapper">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="info-icon-svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </div>
                            <h3>WhatsApp Us</h3>
                            <p>Chat with us anytime</p>
                            <a href="https://wa.me/917008384468" target="_blank" rel="noopener noreferrer" className="info-link info-link-whatsapp">+91 7008384468</a>
                        </div>

                        <div className="info-card">
                            <div className="info-icon-wrapper">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon-svg">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <h3>Email Us</h3>
                            <p>Our team will respond within 24 hours</p>
                            <a href="mailto:support@accuradatavision.com" className="info-link">support@accuradatavision.com</a>
                        </div>

                        <div className="info-card">
                            <div className="info-icon-wrapper">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon-svg">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <h3>Visit Us</h3>
                            <p>Come say hello at our office</p>
                            <span className="info-link">Mumbai, India</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="contact-social-section">
                        <p className="social-section-text">Connect with us on</p>
                        <a 
                            href="https://www.linkedin.com/company/accura-datavision" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-social-link"
                            aria-label="Visit Accura Datavision on LinkedIn"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span>LinkedIn</span>
                        </a>
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
