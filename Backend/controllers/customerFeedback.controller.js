const customerFeedback = require("../models/customer_feedback/customerFeedback.model");

exports.findAll = async (req, res) => {
  try {
    const customerFeedbackdata = await customerFeedback.find();
    return res.status(200).json(customerFeedbackdata);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
