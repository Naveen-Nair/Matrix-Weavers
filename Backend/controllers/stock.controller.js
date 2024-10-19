const RevenueTrend = require('../models/performance_trends/financial_performance/stock_growth.model'); // Adjust the path as needed

// Controller method to find all documents for a given company
exports.findAll = async (req, res) => {
    try {
        const { company } = req.body;

        if (!company) {
            return res.status(400).json({ message: "Company name is required." });
        }

        const data = await RevenueTrend.find({ company : company });

        if (!data) {
            return res.status(404).json({ message: `No data found for ${company}.` });
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching company data:", error);
        return res.status(500).json({ message: "An error occurred while fetching data." });
    }
};
