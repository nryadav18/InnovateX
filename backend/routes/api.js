const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Contact = require('../models/Contact');
const Lead = require('../models/Lead');
const Admin = require('../models/Admin');
const { protect } = require('../middleware/authMiddleware');

// ==========================================
// PUBLIC ROUTES
// ==========================================

// Create new contact message
router.post('/contact', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Create new school partnership lead
router.post('/leads', async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// ==========================================
// ADMIN AUTH ROUTES
// ==========================================

// Admin Login
router.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    
    if (admin && (await admin.matchPassword(password))) {
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      });
      res.json({
        success: true,
        data: {
          _id: admin._id,
          username: admin.username,
          token
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create initial admin (Run once physically or via script)
router.post('/admin/setup-initial', async (req, res) => {
  try {
    // Only allow if no admins exist
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      return res.status(400).json({ message: 'Admin already exists' });
    }
    const admin = await Admin.create({
      username: 'admin',
      password: 'password123'
    });
    res.status(201).json({ message: 'Initial admin created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==========================================
// PROTECTED ADMIN ROUTES
// ==========================================

// Get all contacts
router.get('/admin/contacts', protect, async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort('-createdAt');
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all leads
router.get('/admin/leads', protect, async (req, res) => {
  try {
    const leads = await Lead.find({}).sort('-createdAt');
    res.json({ success: true, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update lead status
router.put('/admin/leads/:id', protect, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id, 
      { status: req.body.status }, 
      { new: true, runValidators: true }
    );
    res.json({ success: true, data: lead });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
