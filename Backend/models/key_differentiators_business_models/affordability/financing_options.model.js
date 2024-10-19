const mongoose = require('mongoose');

const financingOptionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    emi_available: {
        type: Boolean,
        default: false
    },
    emi_partners: {
        type: [String], // e.g., 'Bajaj Finserv', 'HDFC Bank'
    },
    credit_offers: {
        type: [String], // Credit card offers or similar
    },
    interest_rate: {
        type: Number, // EMI interest rate, e.g., 12%
    },
    tenure_options: {
        type: String, // e.g., '3 months, 6 months, 12 months'
    }
});

module.exports = mongoose.model('financing_options', financingOptionsSchema);
