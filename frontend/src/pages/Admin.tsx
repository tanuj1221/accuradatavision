
import React, { useState, useEffect } from 'react';
import './Admin.css';

interface Message {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
}

interface FAQ {
    id: number;
    question: string;
    answer: string;
    page_category: string;
    display_order: number;
    is_active: number;
    created_at: string;
    updated_at: string;
}

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [visitors, setVisitors] = useState<any[]>([]);
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [activeTab, setActiveTab] = useState<'messages' | 'visitors' | 'faqs'>('messages');
    const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
    const [isAddingFaq, setIsAddingFaq] = useState(false);
    const [faqForm, setFaqForm] = useState({ question: '', answer: '', page_category: 'general', display_order: 0, is_active: 1 });

    // Initial check (session like) - simplified for this use case
    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            checkAuth(token);
        }
    }, []);

    const checkAuth = async (token: string) => {
        // Just verify by trying to fetch messages
        try {
            const res = await fetch('/api/admin/messages', {
                headers: { 'Authorization': token }
            });
            if (res.ok) {
                const data = await res.json();
                setMessages(data.messages);
                setIsAuthenticated(true);
                fetchVisitors(token);
                fetchFaqs(token);
            } else {
                localStorage.removeItem('adminToken');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchVisitors = async (token: string) => {
        try {
            const res = await fetch('/api/admin/visitors', {
                headers: { 'Authorization': token }
            });
            if (res.ok) {
                const data = await res.json();
                setVisitors(data.visitors);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchFaqs = async (token: string) => {
        try {
            const res = await fetch('/api/admin/faqs', {
                headers: { 'Authorization': token }
            });
            if (res.ok) {
                const data = await res.json();
                setFaqs(data.faqs);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('adminToken', data.token); // Store token
                setIsAuthenticated(true);
                checkAuth(data.token); // Fetch messages
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Connection error. Is backend running?');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
        setMessages([]);
        setVisitors([]);
        setFaqs([]);
        setPassword('');
    };

    const handleAddFaq = async () => {
        const token = localStorage.getItem('adminToken');
        if (!token) return;

        try {
            const res = await fetch('/api/admin/faqs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(faqForm)
            });

            if (res.ok) {
                setFaqForm({ question: '', answer: '', page_category: 'general', display_order: 0, is_active: 1 });
                setIsAddingFaq(false);
                fetchFaqs(token);
            } else {
                alert('Failed to add FAQ');
            }
        } catch (err) {
            console.error(err);
            alert('Error adding FAQ');
        }
    };

    const handleUpdateFaq = async () => {
        const token = localStorage.getItem('adminToken');
        if (!token || !editingFaq) return;

        try {
            const res = await fetch(`/api/admin/faqs/${editingFaq.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(faqForm)
            });

            if (res.ok) {
                setEditingFaq(null);
                setFaqForm({ question: '', answer: '', page_category: 'general', display_order: 0, is_active: 1 });
                fetchFaqs(token);
            } else {
                alert('Failed to update FAQ');
            }
        } catch (err) {
            console.error(err);
            alert('Error updating FAQ');
        }
    };

    const handleDeleteFaq = async (id: number) => {
        const token = localStorage.getItem('adminToken');
        if (!token) return;

        if (!confirm('Are you sure you want to delete this FAQ?')) return;

        try {
            const res = await fetch(`/api/admin/faqs/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': token }
            });

            if (res.ok) {
                fetchFaqs(token);
            } else {
                alert('Failed to delete FAQ');
            }
        } catch (err) {
            console.error(err);
            alert('Error deleting FAQ');
        }
    };

    const startEditFaq = (faq: FAQ) => {
        setEditingFaq(faq);
        setFaqForm({
            question: faq.question,
            answer: faq.answer,
            page_category: faq.page_category || 'general',
            display_order: faq.display_order,
            is_active: faq.is_active
        });
        setIsAddingFaq(false);
    };

    const cancelEdit = () => {
        setEditingFaq(null);
        setIsAddingFaq(false);
        setFaqForm({ question: '', answer: '', page_category: 'general', display_order: 0, is_active: 1 });
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-page">
                <div className="login-container">
                    <div className="login-box">
                        <h2>Admin Access</h2>
                        {error && <p className="error-msg">{error}</p>}
                        <form onSubmit={handleLogin}>
                            <input
                                type="password"
                                className="login-input"
                                placeholder="Enter Access Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="login-btn">Access Dashboard</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-page">
            <div className="admin-container">
                <div className="admin-header">
                    <h1>Admin Dashboard</h1>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="tab-switcher" style={{ display: 'flex', gap: '10px' }}>
                            <button
                                onClick={() => setActiveTab('messages')}
                                className="login-btn"
                                style={{ backgroundColor: activeTab === 'messages' ? '#238636' : '#161b22', border: '1px solid #30363d' }}
                            >
                                Messages
                            </button>
                            <button
                                onClick={() => setActiveTab('visitors')}
                                className="login-btn"
                                style={{ backgroundColor: activeTab === 'visitors' ? '#238636' : '#161b22', border: '1px solid #30363d' }}
                            >
                                Visitor Logs
                            </button>
                            <button
                                onClick={() => setActiveTab('faqs')}
                                className="login-btn"
                                style={{ backgroundColor: activeTab === 'faqs' ? '#238636' : '#161b22', border: '1px solid #30363d' }}
                            >
                                FAQs
                            </button>
                        </div>
                        <button onClick={handleLogout} className="login-btn" style={{ width: 'auto', backgroundColor: '#d0312d', borderColor: '#d0312d' }}>
                            Logout
                        </button>
                    </div>
                </div>

                <div className="data-table-wrapper">
                    {activeTab === 'messages' ? (
                        messages.length === 0 ? (
                            <div className="empty-state">No messages found.</div>
                        ) : (
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages.map((msg) => (
                                        <tr key={msg.id}>
                                            <td>{new Date(msg.created_at).toLocaleString()}</td>
                                            <td>{msg.name}</td>
                                            <td>{msg.email}</td>
                                            <td>{msg.subject}</td>
                                            <td style={{ maxWidth: '400px', whiteSpace: 'pre-wrap' }}>{msg.message}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    ) : activeTab === 'visitors' ? (
                        visitors.length === 0 ? (
                            <div className="empty-state">No visitor logs found.</div>
                        ) : (
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>IP Address</th>
                                        <th>Page</th>
                                        <th>User Agent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visitors.map((v) => (
                                        <tr key={v.id}>
                                            <td>{new Date(v.visited_at).toLocaleString()}</td>
                                            <td>{v.ip === '::1' ? 'Localhost' : v.ip}</td>
                                            <td>{v.path}</td>
                                            <td style={{ maxWidth: '300px', fontSize: '12px', color: '#8b949e' }}>{v.user_agent}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    ) : (
                        <div>
                            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ color: '#c9d1d9' }}>Manage FAQs</h3>
                                <button 
                                    onClick={() => {
                                        setIsAddingFaq(true);
                                        setEditingFaq(null);
                                        setFaqForm({ question: '', answer: '', page_category: 'general', display_order: 0, is_active: 1 });
                                    }}
                                    className="login-btn"
                                    style={{ width: 'auto', backgroundColor: '#238636' }}
                                >
                                    Add New FAQ
                                </button>
                            </div>

                            {(isAddingFaq || editingFaq) && (
                                <div style={{ 
                                    backgroundColor: '#161b22', 
                                    border: '1px solid #30363d', 
                                    borderRadius: '6px', 
                                    padding: '20px', 
                                    marginBottom: '20px' 
                                }}>
                                    <h4 style={{ color: '#c9d1d9', marginBottom: '15px' }}>
                                        {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        <div>
                                            <label style={{ color: '#8b949e', display: 'block', marginBottom: '5px' }}>Question</label>
                                            <input
                                                type="text"
                                                className="login-input"
                                                value={faqForm.question}
                                                onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                                                placeholder="Enter question"
                                            />
                                        </div>
                                        <div>
                                            <label style={{ color: '#8b949e', display: 'block', marginBottom: '5px' }}>Answer</label>
                                            <textarea
                                                className="login-input"
                                                value={faqForm.answer}
                                                onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                                                placeholder="Enter answer"
                                                rows={5}
                                                style={{ fontFamily: 'inherit', resize: 'vertical' }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ color: '#8b949e', display: 'block', marginBottom: '5px' }}>Page Category</label>
                                            <select
                                                className="login-input"
                                                value={faqForm.page_category}
                                                onChange={(e) => setFaqForm({ ...faqForm, page_category: e.target.value })}
                                            >
                                                <option value="general">General / Home</option>
                                                <option value="traffic-survey">Traffic Survey</option>
                                                <option value="accura-count">AccuraCount Software</option>
                                                <option value="people-counting">People Counting</option>
                                                <option value="parking-management">Parking Management</option>
                                                <option value="safety-monitoring">Safety Monitoring</option>
                                                <option value="contact">Contact</option>
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex', gap: '15px' }}>
                                            <div style={{ flex: 1 }}>
                                                <label style={{ color: '#8b949e', display: 'block', marginBottom: '5px' }}>Display Order</label>
                                                <input
                                                    type="number"
                                                    className="login-input"
                                                    value={faqForm.display_order}
                                                    onChange={(e) => setFaqForm({ ...faqForm, display_order: parseInt(e.target.value) || 0 })}
                                                />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <label style={{ color: '#8b949e', display: 'block', marginBottom: '5px' }}>Status</label>
                                                <select
                                                    className="login-input"
                                                    value={faqForm.is_active}
                                                    onChange={(e) => setFaqForm({ ...faqForm, is_active: parseInt(e.target.value) })}
                                                >
                                                    <option value={1}>Active</option>
                                                    <option value={0}>Inactive</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button
                                                onClick={editingFaq ? handleUpdateFaq : handleAddFaq}
                                                className="login-btn"
                                                style={{ backgroundColor: '#238636' }}
                                            >
                                                {editingFaq ? 'Update FAQ' : 'Add FAQ'}
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="login-btn"
                                                style={{ backgroundColor: '#6e7681' }}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {faqs.length === 0 ? (
                                <div className="empty-state">No FAQs found. Add your first FAQ!</div>
                            ) : (
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '60px' }}>Order</th>
                                            <th>Page</th>
                                            <th>Question</th>
                                            <th>Answer</th>
                                            <th style={{ width: '100px' }}>Status</th>
                                            <th style={{ width: '150px' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {faqs.map((faq) => (
                                            <tr key={faq.id}>
                                                <td style={{ textAlign: 'center' }}>{faq.display_order}</td>
                                                <td style={{ fontSize: '0.85em', color: '#8b949e' }}>{faq.page_category}</td>
                                                <td style={{ maxWidth: '300px', fontWeight: 'bold' }}>{faq.question}</td>
                                                <td style={{ maxWidth: '400px', whiteSpace: 'pre-wrap', fontSize: '0.9em' }}>{faq.answer}</td>
                                                <td>
                                                    <span style={{ 
                                                        padding: '4px 8px', 
                                                        borderRadius: '4px', 
                                                        backgroundColor: faq.is_active ? '#238636' : '#6e7681',
                                                        fontSize: '0.85em'
                                                    }}>
                                                        {faq.is_active ? 'Active' : 'Inactive'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div style={{ display: 'flex', gap: '8px' }}>
                                                        <button
                                                            onClick={() => startEditFaq(faq)}
                                                            className="login-btn"
                                                            style={{ 
                                                                padding: '6px 12px', 
                                                                fontSize: '0.85em',
                                                                backgroundColor: '#1f6feb'
                                                            }}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteFaq(faq.id)}
                                                            className="login-btn"
                                                            style={{ 
                                                                padding: '6px 12px', 
                                                                fontSize: '0.85em',
                                                                backgroundColor: '#d0312d'
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
