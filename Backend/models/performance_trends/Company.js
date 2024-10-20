// models/Company.js
const mongoose = require("mongoose");

const strategicInitiativesSchema = new mongoose.Schema({
  investments: [
    {
      year: String,
      amount: String,
      focus: String,
    },
  ],
  acquisitions: [
    {
      year: String,
      company: String,
      value: String,
      sector: String,
    },
  ],
  partnerships: [
    {
      year: String,
      partner: String,
      focus: String,
    },
  ],
});

const futureOutlookSchema = new mongoose.Schema({
  growthProjections: [
    {
      year: String,
      revenue: String,
      growthRate: String,
    },
  ],
  challenges: [String],
  customerSentiment: {
    positive: String,
    negative: String,
    keyFeedback: String,
  },
  sustainability: {
    greenEnergyTransition: String,
    majorInitiatives: [String],
  },
});

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  performanceTrendsSummary: [String],
  strategicInitiatives: strategicInitiativesSchema,
  futureOutlook: futureOutlookSchema,
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
