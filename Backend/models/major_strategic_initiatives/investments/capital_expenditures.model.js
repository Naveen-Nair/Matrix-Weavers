const mongoose = require('mongoose');

const capitalExpendituresSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    investment_type: {
        type: String, // Type of investment (e.g., New Store, Tech Upgrade)
        required: true
    },
    description: {
        type: String // Detailed description of the investment
    },
    amount: {
        type: Number, // Amount spent on the investment
        required: true
    },
    year: {
        type: Number, // Year the investment took place
        required: true
    },
    location: {
        type: String // Location of the new stores or upgrades (if applicable)
    }
});

module.exports = mongoose.model('capital_expenditures', capitalExpendituresSchema);
