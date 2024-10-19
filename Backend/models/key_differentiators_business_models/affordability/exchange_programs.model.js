const mongoose = require('mongoose');

const exchangeProgramsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    eligible_products: {
        type: [String], // List of products eligible for exchange
    },
    discount_on_exchange: {
        type: Number, // Discount offered in exchange program
    },
    participating_brands: {
        type: [String], // Brands offering exchange programs
    },
    exchange_duration: {
        type: String, // Validity of the exchange program
    },
    additional_benefits: {
        type: String, // E.g., 'Free installation', 'Free delivery'
    }
});

module.exports = mongoose.model('exchange_programs', exchangeProgramsSchema);
