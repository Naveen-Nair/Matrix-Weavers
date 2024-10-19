const CompanyFeedback = require('../models/customer_feedback/companyFeedback.model');

exports.getCompanyFeedback = async (req, res) => {
    try {
        const { companyName } = req.body;
        const feedbackData = await CompanyFeedback.findOne({ companyName });
        
        if (!feedbackData) {
            return res.status(404).json({ error: "Company not found" });
        }

        return res.status(200).json(feedbackData);
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
