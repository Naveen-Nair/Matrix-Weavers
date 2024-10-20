const Company = require("../models/performance_trends/Company");

// Get company data by company name
const getCompanyData = async (req, res) => {
  try {
    const company = await Company.find({});
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving company data", error });
  }
};

module.exports = {
  getCompanyData,
};
