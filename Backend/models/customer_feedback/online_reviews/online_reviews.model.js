const mongoose = require('mongoose');

const onlineReviewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    website: {
        type: String, // Website where reviews were collected (e.g., Google, Yelp)
        required: true
    },
    year: {
        type: Number, // Year when reviews were analyzed
    },
    common_complaints: {
        type: [String], // List of common complaints
    },
    common_praises: {
        type: [String], // List of common praises
    }
});

module.exports = mongoose.model('online_reviews', onlineReviewsSchema);
