const mongoose = require("mongoose");

const segmentSchema = new mongoose.Schema({
  x: { type: String, required: true },
  y: { type: Number, required: true },
});

const channelDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  store: { type: Number, required: true },
  online: { type: Number, required: true },
  b2b: { type: Number, required: true },
});

const customerSegmentDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  segments: [segmentSchema],
});

const marketingDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  marketing: { type: Number, required: true },
});

const productDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  electronics: { type: Number, required: true },
  appliances: { type: Number, required: true },
  privateLabels: { type: Number, required: true },
});

const businessDataSchema = new mongoose.Schema({
  channelData: [channelDataSchema],
  customerSegmentData: [customerSegmentDataSchema],
  marketingData: [marketingDataSchema],
  productData: [productDataSchema],
});

module.exports = mongoose.model("BusinessData", businessDataSchema);
