const mongoose = require('mongoose');

const salesPerSqFootSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    store_location: {
        type: String, // Location of the store (city/state)
        required: true
    },
    sales_per_sq_foot: {
        type: Number, // Sales per square foot
        required: true
    },
    year: {
        type: Number, // Year for sales data
        required: true
    },
    total_store_size: {
        type: Number, // Total store size in square feet
    },
    currency: {
        type: String, // Currency (e.g., 'INR', 'USD')
    }
});

module.exports = mongoose.model('sales_per_sq_foot', salesPerSqFootSchema);
