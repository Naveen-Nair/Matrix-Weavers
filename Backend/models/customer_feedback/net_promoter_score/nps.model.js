const mongoose = require('mongoose');

const npsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number, // Year for NPS data
        required: true
    },
    nps_score: {
        type: Number, // NPS score (e.g., from -100 to 100)
        required: true
    },
    total_responses: {
        type: Number, // Total number of respondents
    },
    promoters_percentage: {
        type: Number, // Percentage of promoters
    },
    detractors_percentage: {
        type: Number, // Percentage of detractors
    },
    passives_percentage: {
        type: Number, // Percentage of passives
    }
});

module.exports = mongoose.model('nps', npsSchema);
