const CustomerDetailed = require('../models/customer_feedback/customerHeatmap.model');

exports.findAll = async (req, res) => {
    try {
        const { companyName } = req.body; // Extract company name from request body
        
        // Find data for the specific company
        const customerDetailedData = await CustomerDetailed.find({ companyName });
        
        if (!customerDetailedData.length) {
            return res.status(404).json({ error: "No data found for the specified company" });
        }
        
        // Transform data to the required format
        const transformedData = {};
        
        customerDetailedData.forEach(state => {
            transformedData[state.stateName] = {
                value: state.nps, // Assuming 'nps' is equivalent to 'value'
                overallSatisfactionRate: state.overallSatisfactionRate,
                reviews: state.recentComments // Embedding comments for each state
            };
        });

        return res.status(200).json(transformedData);
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
