const mongoose = require('mongoose');

const customerSupportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    online_support_available: {
        type: Boolean,
        default: true
    },
    offline_support_available: {
        type: Boolean,
        default: true
    },
    support_channels: {
        type: [String], // E.g., ['Phone', 'Email', 'Live chat']
    },
    average_response_time: {
        type: String, // e.g., '24 hours', 'Immediate'
    },
    customer_feedback: {
        type: String, // Customer satisfaction metrics, reviews
    }
});

module.exports = mongoose.model('customer_support', customerSupportSchema);
