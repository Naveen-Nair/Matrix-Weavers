const mongoose = require('mongoose');

const productLineExpansionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    new_product_line: {
        type: String, // Name of the new product line or category
        required: true
    },
    description: {
        type: String // Detailed description of the new product line
    },
    launch_date: {
        type: String, // Date of launch
        required: true
    },
    projected_revenue: {
        type: Number // Expected revenue from the new product line
    }
});

module.exports = mongoose.model('product_line_expansion', productLineExpansionSchema);
