const mongoose = require('mongoose');

const ecommerceExpansionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    platform_name: {
        type: String, // Name of the e-commerce platform or website
    },
    expansion_strategy: {
        type: String, // Strategy for e-commerce growth (e.g., new features, wider market reach)
    },
    launch_date: {
        type: String, // Expected launch date of new e-commerce expansions
    },
    description: {
        type: String // Additional details of the expansion plan
    }
});

module.exports = mongoose.model('ecommerce_expansion', ecommerceExpansionSchema);
