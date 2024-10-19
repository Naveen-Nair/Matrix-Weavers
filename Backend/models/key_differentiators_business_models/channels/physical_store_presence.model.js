const mongoose = require('mongoose');

const physicalStoreSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    locations: {
        type: [String], // List of store locations (cities, states)
    },
    total_stores: {
        type: Number, // total number of stores
    },
    flagship_stores: {
        type: Number, // number of large/flagship stores
    },
    store_format: {
        type: String, // e.g., 'mall store', 'stand-alone store'
    },
    opening_hours: {
        type: String, // e.g., '9 AM to 9 PM'
    },
    in_store_services: {
        type: [String], // e.g., 'Demo stations', 'Customer support'
    },
    footfall: {
        type: Number, // Average monthly footfall
    },
    payment_methods: {
        type: [String], // 'Cash', 'Card', 'UPI'
    },
    parking_availability: {
        type: Boolean, // true if parking is available
        default: true
    }
});

module.exports = mongoose.model('physicalStores', physicalStoreSchema);
