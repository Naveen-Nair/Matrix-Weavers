const mongoose = require('mongoose');

const warrantyServicesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    warranty_duration: {
        type: String, // e.g., '1 year', '2 years', '5 years'
    },
    extended_warranty_available: {
        type: Boolean,
        default: false
    },
    extended_warranty_duration: {
        type: String, // Duration for extended warranty if available
    },
    brands_covered: {
        type: [String], // Brands offering warranty services
    },
    warranty_claim_process: {
        type: String, // Description of claim process
    }
});

module.exports = mongoose.model('warranty_services', warrantyServicesSchema);
