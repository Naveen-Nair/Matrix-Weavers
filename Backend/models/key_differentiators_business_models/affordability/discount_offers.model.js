const mongoose = require('mongoose');

const discountOffersSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    discount_percentage: {
        type: Number, // e.g., 10% off
    },
    coupon_codes: {
        type: [String], // List of available coupon codes
    },
    applicable_categories: {
        type: [String], // Categories for which the discount applies
    },
    offer_duration: {
        type: String, // e.g., 'Limited time offer'
    },
    terms_and_conditions: {
        type: String, // Any additional terms for discount
    }
});

module.exports = mongoose.model('discount_offers', discountOffersSchema);
