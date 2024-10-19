const mongoose = require('mongoose');

const manpowerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    average_employees_per_store: {
        type: Number, // Average number of employees per store
    },
    total_employees: {
        type: Number, // Total number of employees across all stores
    },
    training_provided: {
        type: String, // Details about training programs for employees
    }
});

module.exports = mongoose.model('manpower', manpowerSchema);
