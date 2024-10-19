const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category_name: {
        type: String, // e.g., 'Electronics', 'Home Appliances'
        required: true
    },
    product_type: {
        type: String, // e.g., 'Premium', 'Budget', 'Mid-range'
        required: true
    },
    price_range: {
        type: String, // e.g., '$1000-$2000', 'Below $500'
    },
    customer_segments: {
        type: [String], // e.g., 'Luxury Buyers', 'Budget-conscious'
    },
    top_products: {
        type: [String], // List of top products in this type
    },
    product_warranty: {
        type: Boolean, // true if warranty is offered
        default: true
    }
});

module.exports = mongoose.model('product_type', productTypeSchema);
