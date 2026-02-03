
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
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
            </Helmet>
            
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <span className="contact-label">Get In Touch</span>
                    <h1>Let's Transform Your Vision Into Reality</h1>
                    <p>
                        Ready to optimize your infrastructure with AI-powered analytics? Our team of experts is here to help you get started with the right solution for your needs.
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
                            <a href="mailto:admin@accuradatavision.com" className="info-link">admin@accuradatavision.com</a>
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

            {/* Trust Section */}
            <section className="trust-section">
                <div className="trust-content">
                    <h2>Trusted by Leading Organizations</h2>
                    <p>Join city planners, engineering firms, and enterprises who rely on our AI-powered solutions for accurate, real-time insights.</p>
                    <div className="trust-stats">
                        <div className="stat-item">
                            <div className="stat-number">97%+</div>
                            <div className="stat-label">Accuracy Rate</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support Available</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
