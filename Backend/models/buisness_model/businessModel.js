const mongoose = require("mongoose");

const businessModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  geographicalPresence: {
    states: { type: Number, required: true },
    stores: { type: Number, required: true },
  },
  storeOwnership: {
    rented: { type: Number, required: true },
    owned: { type: Number, required: true },
  },
  storeFormats: {
    type: String,
    required: true,
  },
  onlineSales: {
    type: String,
    required: true,
  },
  b2bChannel: {
    type: String,
    required: true,
  },
  productPortfolio: {
    type: String,
    required: true,
  },
  privateLabels: {
    type: String,
    required: true,
  },
  customerSegments: {
    type: String,
    required: true,
  },
  affordabilityOfferings: {
    type: String,
    required: true,
  },
  afterSalesServices: {
    type: String,
    required: true,
  },
  supplyChainStrength: {
    type: String,
    required: true,
  },
  technologyUse: {
    type: String,
    required: true,
  },
  marketingStrategy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BusinessModel", businessModelSchema);
