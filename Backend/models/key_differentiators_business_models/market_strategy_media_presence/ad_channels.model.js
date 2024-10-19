const mongoose = require('mongoose');

const adChannelsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tv_channels: {
        type: [String], // e.g., ['Star TV', 'Sony TV']
    },
    digital_platforms: {
        type: [String], // e.g., ['Google Ads', 'Facebook Ads']
    },
    print_media: {
        type: [String], // e.g., ['Times of India', 'Hindustan Times']
    },
    campaign_budget: {
        type: Number, // Amount spent on advertisements
    },
    campaign_duration: {
        type: String, // e.g., '3 months'
    }
});

module.exports = mongoose.model('ad_channels', adChannelsSchema);
