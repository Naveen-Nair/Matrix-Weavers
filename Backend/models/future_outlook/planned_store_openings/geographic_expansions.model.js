const mongoose = require('mongoose');

const geographicExpansionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    region: {
        type: String, // New region or country for store openings
        required: true
    },
    number_of_stores: {
        type: Number, // Number of stores planned in the region
        required: true
    },
    expected_opening_date: {
        type: String, // Expected opening date for the new stores
        required: true
    },
    description: {
        type: String // Additional details or reasoning for the expansion
    }
});

module.exports = mongoose.model('geographic_expansions', geographicExpansionsSchema);
