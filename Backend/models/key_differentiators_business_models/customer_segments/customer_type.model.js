const mongoose = require('mongoose');

const customerTypeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    customer_type: {
        type: String, // e.g., 'Corporate', 'Individual'
        required: true
    },
    company_size: {
        type: String, // For corporate customers, e.g., 'Small', 'Medium', 'Large'
    },
    industry_focus: {
        type: String, // For corporate customers, e.g., 'Tech', 'Healthcare'
    },
    purchasing_volume: {
        type: String, // e.g., 'Bulk purchases', 'Single purchases'
    },
    relationship_type: {
        type: String, // e.g., 'Contract-based', 'One-time purchase'
    },
    loyalty_program_enrolled: {
        type: Boolean, // true if enrolled in loyalty programs
        default: false
    },
    customer_feedback_score: {
        type: Number, // Rating or score for satisfaction levels
    }
});

module.exports = mongoose.model('customer_type', customerTypeSchema);
