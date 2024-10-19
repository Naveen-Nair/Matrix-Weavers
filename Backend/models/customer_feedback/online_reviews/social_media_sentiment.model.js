const mongoose = require('mongoose');

const socialMediaSentimentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    platform: {
        type: String, // Social media platform (e.g., Twitter, Facebook)
        required: true
    },
    sentiment_score: {
        type: Number, // Overall sentiment score (positive, neutral, negative)
        required: true
    },
    positive_mentions: {
        type: Number, // Number of positive mentions
    },
    negative_mentions: {
        type: Number, // Number of negative mentions
    },
    neutral_mentions: {
        type: Number, // Number of neutral mentions
    },
    year: {
        type: Number, // Year of analysis
    }
});

module.exports = mongoose.model('social_media_sentiment', socialMediaSentimentSchema);
