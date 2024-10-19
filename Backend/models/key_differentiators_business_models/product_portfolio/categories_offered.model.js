const mongoose = require('mongoose');

const categoriesOfferedSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category_name: {
        type: String, // e.g., 'Electronics', 'Home Appliances', 'Gadgets'
        required: true
    },
    subcategories: {
        type: [String], // e.g., 'TVs', 'Refrigerators', 'Smartphones'
    },
    top_brands: {
        type: [String], // e.g., 'Samsung', 'LG', 'Apple'
    },
    availability_status: {
        type: String, // e.g., 'In Stock', 'Out of Stock'
    },
    seasonal_items: {
        type: Boolean, // true if there are seasonal items in the category
        default: false
    },
    category_description: {
        type: String, // brief description of the product category
    }
});

module.exports = mongoose.model('categories_offered', categoriesOfferedSchema);
