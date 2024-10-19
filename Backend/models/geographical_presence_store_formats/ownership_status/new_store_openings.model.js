const mongoose = require('mongoose');

const newStoreOpeningsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    new_stores_opened: {
        type: Number, // Number of new stores opened in the past year
        default: 0
    },
    locations_of_new_stores: {
        type: [String], // List of locations (cities, regions) where new stores opened
    },
    total_stores_opened_last_year: {
        type: Number, // Total number of stores opened last year
    },
    expansion_plan: {
        type: String, // Details about any future expansion plans
    }
});

module.exports = mongoose.model('new_store_openings', newStoreOpeningsSchema);
