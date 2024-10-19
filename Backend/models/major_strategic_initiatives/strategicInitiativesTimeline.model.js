const mongoose = require('mongoose');

const StrategicInitiativesTimelineSchema = new mongoose.Schema({
    company:{
        type: String, 
        required: true
    },
    title:{
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    indetail: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('SnitiativeTimeline', StrategicInitiativesTimelineSchema);