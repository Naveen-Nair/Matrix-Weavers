const mongoose = require('mongoose');

const arVrUsageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ar_vr_implementation: {
        type: Boolean,
        default: false
    },
    platforms_used: {
        type: [String], // E.g., 'AR on mobile apps', 'VR headsets'
    },
    products_visualized: {
        type: [String], // E.g., 'Electronics', 'Furniture'
    },
    customer_feedback: {
        type: String, // Feedback on AR/VR experience
    },
    impact_on_sales: {
        type: String, // E.g., 'Increased engagement', 'Higher conversion rates'
    }
});

module.exports = mongoose.model('ar_vr_usage', arVrUsageSchema);
