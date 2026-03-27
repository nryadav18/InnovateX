const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  schoolName: { type: String, required: true },
  principalName: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  students: { type: String, required: true },
  message: { type: String },
  status: { 
    type: String, 
    enum: ['New', 'Contacted', 'Proposal Sent', 'Closed'], 
    default: 'New' 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);
