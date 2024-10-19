const mongoose = require('mongoose');

const StrategicInitiativeTableSchema = new mongoose.Schema({
    company:{
        type: String, 
        required: true
    },
    investment_area: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    amount_invested: {
        type: String,
        required: true
    },
    expected_impact: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('InitiativeTables', StrategicInitiativeTableSchema);