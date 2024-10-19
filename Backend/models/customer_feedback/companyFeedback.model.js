const mongoose = require('mongoose');

// Schema for storing company feedback
const CompanyFeedbackSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    feedbackHighlights: [{
        type: String
    }],
    improvementAreas: [{
        type: String
    }]
});

module.exports = mongoose.model('CompanyFeedback', CompanyFeedbackSchema);
