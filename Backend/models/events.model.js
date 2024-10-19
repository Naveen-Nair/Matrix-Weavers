const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    long_desc: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    prelims_date: {
        type: String
    },
    time: {
        type: String,
        required: true
    },
    prize: {
        type: Number
    },
    img: {
        type: String
    },
    poster: {
        type: String
    },
    reg_link: {
        type: String
    },
    rule_link: {
        type: String
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('events', eventsSchema);