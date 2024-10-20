// controllers/companyController.js
const Company = require("../models/geographical_presence_store_formats/company_data.model.js");

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies", error });
  }
};

module.exports = {
  getAllCompanies,
};
