const mongoose = require('mongoose');

const customerFeedbackSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    totalReviews: {
        type: Number,
        required: true
    },
    averageReviewScore: {
        type: String,
        required: true
    },
    netPromoterScore: {
        type: Number,
        required: true
    },
    customerSatisfaction: {
        type: String,
        required: true
    },
    positiveSentimentPercentage: {
        type: Number, // Stored as a percentage (e.g., 85 for 85%)
        required: true
    },
    customerServiceRating: {
        type: String,
        required: true
    },
    feedbackHighlights: {
        type: String,
        required: true
    },
    improvementAreas: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('CustomerFeedback', customerFeedbackSchema);
