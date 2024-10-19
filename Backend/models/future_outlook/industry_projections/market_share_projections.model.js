const mongoose = require('mongoose');

const marketShareProjectionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    market_share: {
        type: Number, // Projected market share percentage
        required: true
    },
    year: {
        type: Number, // Year of the market share projection
        required: true
    },
    description: {
        type: String // Additional details on the market share projections
    }
});

module.exports = mongoose.model('market_share_projections', marketShareProjectionsSchema);
