const companyOverview = require('../models/geographical_presence_store_formats/company_overview.model');

exports.findAll = async (req, res) => {
    try{
        const companyOverviewdata = await companyOverview.find();
        return res.status(200).json(companyOverviewdata);
    } catch (err) {
        return res.status(500).json({ error : "Internal Server Error" });
    }
}