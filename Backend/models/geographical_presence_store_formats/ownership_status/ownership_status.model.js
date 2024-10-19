const mongoose = require('mongoose');

const ownershipStatusSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    owned_stores: {
        type: Number, // Number of stores owned
        default: 0
    },
    leased_stores: {
        type: Number, // Number of stores leased
        default: 0
    },
    total_stores: {
        type: Number, // Total number of stores
    },
    owned_vs_leased_ratio: {
        type: String, // Ratio or percentage of owned vs leased stores (e.g., '60% owned, 40% leased')
    }
});

module.exports = mongoose.model('ownership_status', ownershipStatusSchema);
