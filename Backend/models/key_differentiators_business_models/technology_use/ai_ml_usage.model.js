const mongoose = require('mongoose');

const aiMlUsageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ai_ml_implementation: {
        type: Boolean,
        default: false
    },
    use_cases: {
        type: [String], // E.g., 'Personalized recommendations', 'Dynamic pricing'
    },
    tools_used: {
        type: [String], // E.g., 'TensorFlow', 'PyTorch', etc.
    },
    customer_experience_impact: {
        type: String, // E.g., 'Improved conversion rates', 'Higher satisfaction'
    }
});

module.exports = mongoose.model('ai_ml_usage', aiMlUsageSchema);
