const mongoose = require('mongoose');

// Schema for recently scraped comments
const commentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    sentiment: {
        type: String,
        enum: ['Positive', 'Neutral', 'Negative'], // Sentiment can be Positive, Neutral, or Negative
        required: true
    }
});

// Main schema including heatmap data, companyName, and recent comments
const CustomerHeatmapSchema = new mongoose.Schema({
    stateName: {
        type: String,
        required: true
    },
    nps: {
        type: Number,
        required: true
    },
    overallSatisfactionRate: {
        type: Number,
    },
    recentComments: [commentSchema], // Embedding the comments array
    companyName: { // New field to store company name
        type: String,
        required: true
    }
});

module.exports = mongoose.model('CustomerHeatmap', CustomerHeatmapSchema);
