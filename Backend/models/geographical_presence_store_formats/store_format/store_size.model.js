const mongoose = require('mongoose');

const storeSizeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    small_format_stores: {
        type: Number, // Number of small format stores
        default: 0
    },
    flagship_stores: {
        type: Number, // Number of flagship stores
        default: 0
    },
    hyperstores: {
        type: Number, // Number of hyperstores
        default: 0
    },
    average_store_size: {
        type: String, // E.g., '5000 sqft', '10000 sqft'
    }
});

module.exports = mongoose.model('store_size', storeSizeSchema);
