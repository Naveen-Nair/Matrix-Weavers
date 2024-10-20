const BusinessModel = require("../models/buisness_model/businessModel.js");

// Controller method to find all business models
exports.findAll = async (req, res) => {
  try {
    const data = await BusinessModel.find();
    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching business models:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching data." });
  }
};
