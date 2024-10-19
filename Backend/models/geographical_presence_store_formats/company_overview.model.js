const mongoose = require('mongoose');

const companyOverviewSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    numberOfStates: {
        type: Number,
    },
    storeCount: {
        type: Number,
    },
    storesRented: {
        type: Number,
    },
    storesOwned: {
        type: Number,
    },
    storeFormats: {
        type: [String],
    }
});

module.exports = mongoose.model('companyOverview', companyOverviewSchema);
