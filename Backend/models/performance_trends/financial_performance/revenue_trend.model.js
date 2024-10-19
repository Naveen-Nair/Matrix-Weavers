const mongoose = require('mongoose');

const revenueTrendSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number, // Year of revenue
        required: true
    },
    revenue: {
        type: Number, // Revenue for the given year
        required: true
    },
    revenue_growth: {
        type: String, // Percentage or absolute growth from the previous year
    },
    currency: {
        type: String, // Currency in which revenue is reported (e.g., 'INR', 'USD')
    }
});

module.exports = mongoose.model('revenue_trend', revenueTrendSchema);
