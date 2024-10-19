const mongoose = require('mongoose');

const revenueTrendSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    price:  {
        type: [[String, Number]], // Array of arrays containing [date, value]
        required: true
    },
    Open:  {
        type: [[String, Number]], // Array of arrays containing [date, value]
        required: true
    },
    High:  {
        type: [[String, Number]], // Array of arrays containing [date, value]
        required: true
    },
    Low:  {
        type: [[String, Number]], // Array of arrays containing [date, value]
        required: true
    },
    Volume:  {
        type: [[String, Number]], // Array of arrays containing [date, value]
        required: true
    }
});

// Export the model
module.exports = mongoose.model('financials', revenueTrendSchema);
