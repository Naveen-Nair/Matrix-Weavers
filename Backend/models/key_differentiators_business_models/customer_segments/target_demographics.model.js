const mongoose = require('mongoose');

const targetDemographicsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    age_groups: {
        type: [String], // e.g., '18-25', '26-35', '36-45'
        required: true
    },
    income_levels: {
        type: [String], // e.g., 'Low-income', 'Middle-income', 'High-income'
        required: true
    },
    gender_distribution: {
        type: String, // e.g., 'Male', 'Female', 'Non-binary', 'All'
    },
    purchasing_behavior: {
        type: String, // e.g., 'Frequent buyers', 'Occasional buyers'
    },
    geographic_focus: {
        type: String, // e.g., 'Urban', 'Rural', 'Suburban'
    },
    interests: {
        type: [String], // e.g., 'Tech Enthusiasts', 'Budget Shoppers'
    }
});

module.exports = mongoose.model('target_demographics', targetDemographicsSchema);
