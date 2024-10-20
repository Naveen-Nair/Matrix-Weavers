const express = require("express");
const router = express.Router();
const insightsDataController = require("../controllers/insightsData.controller");

// Define the route for getting insights data
router.post("/", insightsDataController.getInsightsData);

module.exports = router;
