const express = require("express");
const router = express.Router();
const businessDataController = require("../controllers/businessData.controller");

// Define the route for getting all business data
router.get("/", businessDataController.findAll);

module.exports = router;
