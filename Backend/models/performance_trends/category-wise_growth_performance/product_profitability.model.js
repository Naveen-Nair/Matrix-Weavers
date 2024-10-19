const mongoose = require('mongoose');

const productProfitabilitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    product_line: {
        type: String, // Product line (e.g., 'Premium', 'Mid-range', 'Budget')
        required: true
    },
    year: {
        type: Number, // Year for profitability analysis
        required: true
    },
    profit_margin: {
        type: Number, // Profit margin of the product line
        required: true
    },
    total_revenue: {
        type: Number, // Total revenue from the product line
    },
    currency: {
        type: String, // Currency (e.g., 'INR', 'USD')
    }
});

module.exports = mongoose.model('product_profitability', productProfitabilitySchema);
