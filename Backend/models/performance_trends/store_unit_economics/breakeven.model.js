const mongoose = require('mongoose');

const breakevenSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    store_location: {
        type: String, // Location of the store (city/state)
        required: true
    },
    year: {
        type: Number, // Year for break-even analysis
        required: true
    },
    break_even_sales: {
        type: Number, // Break-even point in terms of sales
        required: true
    },
    time_to_break_even: {
        type: String, // Time taken to reach break-even point (e.g., '6 months', '1 year')
    },
    currency: {
        type: String, // Currency (e.g., 'INR', 'USD')
    }
});

module.exports = mongoose.model('breakeven', breakevenSchema);
