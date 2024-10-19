const mongoose = require('mongoose');

const externalAdvertisingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    billboard_advertising: {
        type: Boolean, // Whether billboard advertising is used
        default: false
    },
    regional_ads: {
        type: Boolean, // Whether regional ads are placed
        default: false
    },
    regions_advertised: {
        type: [String], // List of regions where ads are placed
    },
    ad_budget: {
        type: Number, // Budget allocated for external advertising
    }
});

module.exports = mongoose.model('external_advertising', externalAdvertisingSchema);
