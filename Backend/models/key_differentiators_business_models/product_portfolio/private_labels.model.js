const mongoose = require('mongoose');

const privateLabelsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    label_name: {
        type: String, // e.g., 'Reliance Brand', 'Croma Private Label'
        required: true
    },
    product_categories: {
        type: [String], // e.g., 'Home Appliances', 'Gadgets'
    },
    product_quality: {
        type: String, // e.g., 'Premium', 'Budget', 'Mid-range'
    },
    pricing_strategy: {
        type: String, // e.g., 'Low-cost', 'High-end'
    },
    customer_reviews: {
        type: Number, // Average customer rating
    },
    exclusive_products: {
        type: Boolean, // true if only available through the retailer
        default: true
    },
    warranty_offered: {
        type: Boolean, // true if warranty is offered
        default: true
    }
});

module.exports = mongoose.model('private_labels', privateLabelsSchema);
