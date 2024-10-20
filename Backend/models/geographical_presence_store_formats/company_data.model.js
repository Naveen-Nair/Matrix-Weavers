// models/Company.js
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  performanceTrendsSummary: [
    {
      type: String,
    },
  ],
  suggestions: [
    {
      type: String,
    },
  ],
  data: {
    type: Map,
    of: {
      value: {
        type: Number,
        required: true,
      },
    },
  },
});

const Company = mongoose.model("CompanyGeography", companySchema);
module.exports = Company;
