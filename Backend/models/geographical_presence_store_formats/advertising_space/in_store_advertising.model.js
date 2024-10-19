const mongoose = require('mongoose');

const inStoreAdvertisingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    digital_signage: {
        type: Boolean, // Whether digital signage is used in-store
        default: false
    },
    promotional_displays: {
        type: Boolean, // Whether promotional displays are present
        default: false
    },
    ad_space_per_store: {
        type: String, // Description or size of in-store ad space (e.g., '200 sqft', 'Digital screens')
    },
    active_promotions: {
        type: String, // Description of any active promotions in stores
    }
});

module.exports = mongoose.model('in_store_advertising', inStoreAdvertisingSchema);
