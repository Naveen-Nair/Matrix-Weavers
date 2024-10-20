const InsightsData = require("../models/buisness_model/insightsData");

// Controller method to get insights data
exports.getInsightsData = async (req, res) => {
  try {
    const insightsData = await InsightsData.find(); // Fetch the data
    if (!insightsData) {
      return res.status(404).json({ message: "No insights data found." });
    }
    return res.status(200).json(insightsData);
  } catch (error) {
    console.error("Error fetching insights data:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching insights data." });
  }
};
