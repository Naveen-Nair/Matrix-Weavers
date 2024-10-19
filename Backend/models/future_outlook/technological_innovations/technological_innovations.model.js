const mongoose = require('mongoose');

const technologicalInnovationsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    innovation_type: {
        type: String, // Type of innovation (e.g., AI, automation, digital strategy)
        required: true
    },
    description: {
        type: String, // Description of the technological innovation
    },
    expected_implementation_date: {
        type: String, // When the technology is expected to be implemented
    },
    projected_impact: {
        type: String // Expected impact of the innovation (e.g., increased sales, improved customer experience)
    }
});

module.exports = mongoose.model('technological_innovations', technologicalInnovationsSchema);
