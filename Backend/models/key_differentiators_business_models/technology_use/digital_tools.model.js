const mongoose = require('mongoose');

const digitalToolsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    apps_available: {
        type: Boolean,
        default: true
    },
    app_features: {
        type: [String], // E.g., 'Order tracking', 'Product recommendations'
    },
    chatbot_implementation: {
        type: Boolean,
        default: false
    },
    chatbot_features: {
        type: [String], // E.g., 'Customer support', 'Product inquiries'
    },
    customer_usage_stats: {
        type: String, // Metrics on app and chatbot usage
    },
    impact_on_customer_satisfaction: {
        type: String, // E.g., 'Improved response time', 'Higher engagement'
    }
});

module.exports = mongoose.model('digital_tools', digitalToolsSchema);
