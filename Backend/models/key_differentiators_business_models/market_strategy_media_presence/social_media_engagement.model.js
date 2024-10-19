const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    platforms: {
        type: [String], // e.g., ['Facebook', 'Instagram', 'Twitter']
    },
    followers_count: {
        type: Number, // Total followers across all platforms
    },
    engagement_rate: {
        type: Number, // Percentage of engagement
    },
    top_content: {
        type: String, // Description of best performing content
    },
    campaign_performance: {
        type: String, // e.g., 'Above average', 'Needs improvement'
    }
});

module.exports = mongoose.model('social_media_engagement', socialMediaSchema);
