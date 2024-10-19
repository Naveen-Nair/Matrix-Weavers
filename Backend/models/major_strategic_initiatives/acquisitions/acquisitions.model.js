const mongoose = require('mongoose');

const acquisitionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    acquired_company: {
        type: String, // Name of the acquired company
        required: true
    },
    acquisition_date: {
        type: String, // Date of the acquisition
        required: true
    },
    acquisition_value: {
        type: Number, // Amount paid for the acquisition
        required: true
    },
    description: {
        type: String // Detailed description of the acquisition and its significance
    }
});

module.exports = mongoose.model('acquisitions', acquisitionsSchema);
