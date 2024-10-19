const mongoose = require('mongoose');

const workingCapitalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number, // Year for working capital data
        required: true
    },
    working_capital: {
        type: Number, // Total working capital required
        required: true
    },
    currency: {
        type: String, // Currency (e.g., 'INR', 'USD')
    }
});

module.exports = mongoose.model('working_capital', workingCapitalSchema);
