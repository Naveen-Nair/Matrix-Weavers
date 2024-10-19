const mongoose = require('mongoose');

const capexSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number, // Year of capital expenditure
        required: true
    },
    capex_amount: {
        type: Number, // Capital expenditure amount
        required: true
    },
    capex_per_store: {
        type: Number, // Capex per store
    },
    maintenance_costs: {
        type: Number, // Maintenance cost for existing stores
    },
    currency: {
        type: String, // Currency (e.g., 'INR', 'USD')
    }
});

module.exports = mongoose.model('capex', capexSchema);
