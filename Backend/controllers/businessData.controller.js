const BusinessData = require("../models/buisness_model/businessData.js");

// Controller method to find all business data
exports.findAll = async (req, res) => {
  try {
    const data = await BusinessData.findOne();
    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching business data:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching data." });
  }
};
