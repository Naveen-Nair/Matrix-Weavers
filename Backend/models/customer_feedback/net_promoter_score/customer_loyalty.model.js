const mongoose = require('mongoose');

const customerLoyaltySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number, // Year for customer loyalty data
        required: true
    },
    return_customers_percentage: {
        type: Number, // Percentage of customers who made repeat purchases
        required: true
    },
    membership_programs: {
        type: [String], // List of membership programs offered
    },
    total_members: {
        type: Number, // Total number of customers enrolled in membership programs
    }
});

module.exports = mongoose.model('customer_loyalty', customerLoyaltySchema);
