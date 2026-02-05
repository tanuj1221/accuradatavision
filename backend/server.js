
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize SQLite Database
const db = new sqlite3.Database('./contact.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create table if not exists
        db.run(`CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            company TEXT,
            phone TEXT,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Migration: Add company and phone columns if they don't exist
        db.run(`ALTER TABLE messages ADD COLUMN company TEXT`, (err) => {
            if (err && !err.message.includes('duplicate column')) {
                console.error('Migration warning (company):', err.message);
            }
        });
        
        db.run(`ALTER TABLE messages ADD COLUMN phone TEXT`, (err) => {
            if (err && !err.message.includes('duplicate column')) {
                console.error('Migration warning (phone):', err.message);
            }
        });

        // Create visitors table
        db.run(`CREATE TABLE IF NOT EXISTS visitors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ip TEXT,
            user_agent TEXT,
            path TEXT,
            visited_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) console.error('Error creating visitors table:', err.message);
        });

        // Create FAQs table
        db.run(`CREATE TABLE IF NOT EXISTS faqs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            page_category TEXT DEFAULT 'general',
            display_order INTEGER DEFAULT 0,
            is_active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) console.error('Error creating faqs table:', err.message);
            else {
                console.log('FAQs table ready.');
                // Add page_category column if it doesn't exist (migration)
                db.run(`ALTER TABLE faqs ADD COLUMN page_category TEXT DEFAULT 'general'`, (err) => {
                    if (err && !err.message.includes('duplicate column')) {
                        console.error('Migration warning (page_category):', err.message);
                    }
                });
            }
        });
    }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Trust proxy if behind Nginx/Apache/Cloudflare to get real IP
app.set('trust proxy', true);

// Track Visitor Route
app.post('/api/track', (req, res) => {
    const { path, userAgent } = req.body;
    // Get IP - handling various proxy headers
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip;

    // Simple basic Insert
    db.run(
        `INSERT INTO visitors (ip, user_agent, path) VALUES (?, ?, ?)`,
        [ip, userAgent, path],
        (err) => {
            if (err) {
                console.error('Error tracking visitor:', err.message);
                return res.status(500).json({ error: 'Failed to track' });
            }
            res.status(200).json({ success: true });
        }
    );
});



// Transporter configuration for BigRock Titan Email
const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email', // Standard Titan Email SMTP host
    port: 465,                // SSL Port
    secure: true,             // True for 465
    auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify transporter connection (Non-blocking)
transporter.verify((error, success) => {
    if (error) {
        console.error('Warning: Mail server connection failed:', error.message);
        console.log('System will continue to save messages to local database.');
    } else {
        console.log('Server is ready to send messages');
    }
});

// Route to handle contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, company, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Name, email, subject, and message are required' });
    }

    // 1. Save to SQLite Database
    const sql = `INSERT INTO messages (name, email, company, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(sql, [name, email, company || '', phone || '', subject, message], async function (err) {
        if (err) {
            console.error('Error saving to database:', err.message);
            return res.status(500).json({ error: 'Failed to save message' });
        }

        console.log(`Message saved to database with ID: ${this.lastID}`);
        let emailStatus = 'sent';

        // 2. Try sending emails (Fire and forget style mostly, but we define status)
        try {
            // Send email to Admin
            const adminMailOptions = {
                from: `"${name}" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_USER,
                replyTo: email,
                subject: `New Contact Inquiry: ${subject}`,
                html: `
                    <h3>New Contact Inquiry</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                    <p><strong>Subject:</strong> ${subject}</p>
                    <br>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `
            };

            await transporter.sendMail(adminMailOptions);

            // Send confirmation email to User
            const userMailOptions = {
                from: `"Accura Datavision" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: `We received your message: ${subject}`,
                html: `
                    <h3>Hi ${name},</h3>
                    <p>Thank you for contacting Accura Datavision. We have received your message regarding "<strong>${subject}</strong>".</p>
                    <p>Our team will review your inquiry and get back to you shortly.</p>
                    <br>
                    <p>Best regards,</p>
                    <p><strong>Accura Datavision Team</strong></p>
                    <p>admin@accuradatavision.com</p>
                `
            };

            await transporter.sendMail(userMailOptions);

        } catch (emailError) {
            console.error('Error sending email:', emailError.message);
            emailStatus = 'failed';
        }

        // Return success if DB save worked, regardless of email
        if (emailStatus === 'sent') {
            res.status(200).json({ message: 'Message received and email sent successfully.' });
        } else {
            res.status(200).json({ message: 'Message received and saved. Email notification failed temporarily.' });
        }
    });
});

// Admin Login Route
app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;
    if (password === process.env.ADMIN_PASS) {
        res.status(200).json({ success: true, token: process.env.ADMIN_PASS }); // Sending pass back as token for simplicity in this specific user req
    } else {
        res.status(401).json({ error: 'Invalid password' });
    }
});

// Admin Get Messages Route
app.get('/api/admin/messages', (req, res) => {
    const token = req.headers.authorization;
    if (!token || token !== process.env.ADMIN_PASS) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    db.all("SELECT * FROM messages ORDER BY created_at DESC", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ messages: rows });
    });
});

// Admin Get Visitors Route
app.get('/api/admin/visitors', (req, res) => {
    const token = req.headers.authorization;
    if (!token || token !== process.env.ADMIN_PASS) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    db.all("SELECT * FROM visitors ORDER BY visited_at DESC LIMIT 100", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ visitors: rows });
    });
});

// ===== FAQ MANAGEMENT ROUTES =====

// Public: Get all active FAQs (with optional page filter)
app.get('/api/faqs', (req, res) => {
    const { page } = req.query;
    let sql = "SELECT * FROM faqs WHERE is_active = 1";
    let params = [];
    
    if (page) {
        sql += " AND page_category = ?";
        params.push(page);
    }
    
    sql += " ORDER BY display_order ASC, id ASC";
    
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ faqs: rows });
    });
});

// Admin: Get all FAQs (including inactive)
app.get('/api/admin/faqs', (req, res) => {
    const token = req.headers.authorization;
    if (!token || token !== process.env.ADMIN_PASS) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    db.all("SELECT * FROM faqs ORDER BY display_order ASC, id ASC", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ faqs: rows });
    });
});

// Admin: Create new FAQ
app.post('/api/admin/faqs', (req, res) => {
    const token = req.headers.authorization;
    if (!token || token !== process.env.ADMIN_PASS) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { question, answer, display_order, page_category } = req.body;
    
    if (!question || !answer) {
        return res.status(400).json({ error: 'Question and answer are required' });
    }

    const sql = `INSERT INTO faqs (question, answer, display_order, page_category) VALUES (?, ?, ?, ?)`;
    db.run(sql, [question, answer, display_order || 0, page_category || 'general'], function (err) {
        if (err) {
            console.error('Error creating FAQ:', err.message);
            return res.status(500).json({ error: 'Failed to create FAQ' });
        }

        res.status(201).json({ 
            message: 'FAQ created successfully',
            id: this.lastID
        });
    });
});

// Admin: Update FAQ
app.put('/api/admin/faqs/:id', (req, res) => {
    const token = req.headers.authorization;
    if (!token || token !== process.env.ADMIN_PASS) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    const { question, answer, display_order, is_active, page_category } = req.body;

    if (!question || !answer) {
        return res.status(400).json({ error: 'Question and answer are required' });
    }

    const sql = `UPDATE faqs SET question = ?, answer = ?, display_order = ?, is_active = ?, page_category = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    db.run(sql, [question, answer, display_order || 0, is_active !== undefined ? is_active : 1, page_category || 'general', id], function (err) {
        if (err) {
            console.error('Error updating FAQ:', err.message);
            return res.status(500).json({ error: 'Failed to update FAQ' });
        }

        if (this.changes === 0) {
            return res.status(404).json({ error: 'FAQ not found' });
        }

        res.json({ message: 'FAQ updated successfully' });
    });
});

// Admin: Delete FAQ
app.delete('/api/admin/faqs/:id', (req, res) => {
    const token = req.headers.authorization;
    if (!token || token !== process.env.ADMIN_PASS) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    
    db.run(`DELETE FROM faqs WHERE id = ?`, [id], function (err) {
        if (err) {
            console.error('Error deleting FAQ:', err.message);
            return res.status(500).json({ error: 'Failed to delete FAQ' });
        }

        if (this.changes === 0) {
            return res.status(404).json({ error: 'FAQ not found' });
        }

        res.json({ message: 'FAQ deleted successfully' });
    });
});

// ===== END FAQ ROUTES =====

// Serve Frontend (Must be after API routes)
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all handler for any request that doesn't match an API route
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
