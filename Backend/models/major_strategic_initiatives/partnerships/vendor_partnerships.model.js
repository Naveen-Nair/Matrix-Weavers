const mongoose = require('mongoose');

const vendorPartnershipsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    vendor_name: {
        type: String, // Name of the vendor partner
        required: true
    },
    partnership_details: {
        type: String, // Details of the partnership
    },
    contract_value: {
        type: Number, // Value of the contract or deal with the vendor
    },
    start_date: {
        type: String, // Date the vendor partnership started
    }
});

module.exports = mongoose.model('vendor_partnerships', vendorPartnershipsSchema);
