const express = require("express");
const router = express.Router();
const businessModelController = require("..//controllers/businessModel.controller.js");

// Define the route for getting all business models
router.get("/", businessModelController.findAll);

module.exports = router;
