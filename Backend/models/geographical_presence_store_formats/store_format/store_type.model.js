const mongoose = require('mongoose');

const storeTypeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    electronics_stores: {
        type: Number, // Number of electronics-specific stores
        default: 0
    },
    multi_brand_stores: {
        type: Number, // Number of multi-brand stores
        default: 0
    },
    niche_stores: {
        type: Number, // Number of niche stores (specialized stores)
        default: 0
    },
    store_category: {
        type: String, // General category of the stores (e.g., 'electronics', 'appliances')
    }
});

module.exports = mongoose.model('store_type', storeTypeSchema);
