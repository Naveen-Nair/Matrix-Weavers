const mongoose = require('mongoose');

const anticipatedTrendsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    trend_name: {
        type: String, // Name of the anticipated trend (e.g., shift to online, sustainability)
        required: true
    },
    description: {
        type: String, // Description of the anticipated trend
    },
    projected_impact: {
        type: String, // Impact the trend is expected to have on the business or market
    },
    projected_year: {
        type: Number, // Year the trend is expected to gain prominence
    }
});

module.exports = mongoose.model('anticipated_trends', anticipatedTrendsSchema);
