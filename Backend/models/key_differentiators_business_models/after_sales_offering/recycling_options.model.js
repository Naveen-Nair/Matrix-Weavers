const mongoose = require('mongoose');

const recyclingOptionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    recycling_available: {
        type: Boolean,
        default: false
    },
    recycling_programs: {
        type: [String], // Description of available recycling programs
    },
    brands_participating: {
        type: [String], // Brands offering recycling services
    },
    disposal_process: {
        type: String, // Description of the disposal or recycling process
    },
    environmental_initiatives: {
        type: String, // Additional details on environmental efforts
    }
});

module.exports = mongoose.model('recycling_options', recyclingOptionsSchema);
