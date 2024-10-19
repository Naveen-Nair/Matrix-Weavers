const mongoose = require('mongoose');

const reviewScoreSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    website: {
        type: String, // Website where the review score is provided (e.g., Google, Yelp)
        required: true
    },
    year: {
        type: Number, // Year when the review score was analyzed
    },
    average_score: {
        type: Number, // Average review score (out of 5)
        required: true
    },
    total_reviews: {
        type: Number, // Total number of reviews
    }
});

module.exports = mongoose.model('review_score', reviewScoreSchema);
