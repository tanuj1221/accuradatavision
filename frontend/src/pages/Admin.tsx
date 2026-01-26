
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

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [visitors, setVisitors] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<'messages' | 'visitors'>('messages');

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
        setPassword('');
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
                    ) : (
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
