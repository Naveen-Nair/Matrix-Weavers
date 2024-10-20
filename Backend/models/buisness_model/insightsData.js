const mongoose = require("mongoose");

const insightSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const segmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const summarySchema = new mongoose.Schema({
  description: { type: String, required: true },
  strengths: { type: [String], required: true },
  excellence: { type: [String], required: true },
});

const insightsDataSchema = new mongoose.Schema({
  companyName: { type: String, required: true },

  insights: [insightSchema],
  summary: summarySchema,
  segments: [segmentSchema],
});

module.exports = mongoose.model("InsightsData", insightsDataSchema);
