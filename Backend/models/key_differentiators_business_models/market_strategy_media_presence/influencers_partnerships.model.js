const mongoose = require('mongoose');

const influencersSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    influencers: {
        type: [String], // e.g., ['John Doe', 'Jane Doe']
    },
    partnerships: {
        type: [String], // e.g., 'Collaborations with brands, companies'
    },
    campaign_success: {
        type: String, // e.g., 'Highly successful', 'Moderate success'
    },
    follower_reach: {
        type: Number, // Number of followers reached via influencer
    }
});

module.exports = mongoose.model('influencers_partnerships', influencersSchema);
