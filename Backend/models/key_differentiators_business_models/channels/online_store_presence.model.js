const mongoose = require('mongoose');

const onlineStoreSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    platform_used: {
        type: String, // e.g., Shopify, WooCommerce, custom platform
    },
    mobile_app: {
        type: Boolean, // true if mobile app exists
        default: false
    },
    traffic_volume: {
        type: Number, // average monthly visitors
    },
    customer_reviews: {
        type: Number, // average rating out of 5
    },
    payment_options: {
        type: [String], // e.g., 'Credit Card', 'PayPal', 'UPI'
    },
    delivery_options: {
        type: [String], // e.g., 'Standard', 'Express', 'Same-Day'
    },
    return_policy: {
        type: String, // brief description of return/refund policy
    },
    loyalty_program: {
        type: Boolean, // true if loyalty/rewards program is offered
        default: false
    }
});

module.exports = mongoose.model('onlineStores', onlineStoreSchema);
