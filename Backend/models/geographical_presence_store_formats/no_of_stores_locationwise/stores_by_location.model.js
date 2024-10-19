const mongoose = require('mongoose');

const storesByLocationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cities: {
        type: [String], // List of cities where stores are located
    },
    states: {
        type: [String], // List of states where stores are located
    },
    total_stores: {
        type: Number, // Total number of stores
    },
    distribution_by_region: {
        type: String, // E.g., '80% in metro, 20% in non-metro'
    },
    metro_vs_non_metro: {
        type: Object, // Stores split between metro and non-metro regions
        metro: { type: Number, default: 0 }, 
        non_metro: { type: Number, default: 0 }
    }
});

module.exports = mongoose.model('stores_by_location', storesByLocationSchema);
