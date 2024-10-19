const mongoose = require('mongoose');

const strategicPartnershipsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    partner: {
        type: String, // Name of the strategic partner
        required: true
    },
    partnership_type: {
        type: String, // Type of partnership (e.g., payment provider, co-branding)
        required: true
    },
    description: {
        type: String, // Description of the strategic alliance
    },
    start_date: {
        type: String, // Date the partnership started
    },
    projected_benefit: {
        type: Number // Expected financial or market benefit from the partnership
    }
});

module.exports = mongoose.model('strategic_partnerships', strategicPartnershipsSchema);
