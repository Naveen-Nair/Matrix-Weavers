const mongoose = require('mongoose');

const b2bPlatformSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String, // URL to B2B platform
    },
    client_base: {
        type: [String], // List of key B2B clients or sectors served
    },
    volume_discounts: {
        type: Boolean, // true if volume discounts are offered
        default: false
    },
    product_categories: {
        type: [String], // List of product categories offered
    },
    order_fulfillment_time: {
        type: String, // e.g., '1-2 business days'
    },
    payment_terms: {
        type: String, // e.g., 'Net 30', 'Net 60'
    },
    customer_support: {
        type: String, // Description of B2B support service
    },
    minimum_order_quantity: {
        type: Number, // Minimum order quantity required
    }
});

module.exports = mongoose.model('b2bPlatforms', b2bPlatformSchema);
