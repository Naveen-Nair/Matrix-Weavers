// routes/companyRoutes.js
const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyInsights.controller");

// Route to get company data by company name
router.get("/", companyController.getCompanyData);

module.exports = router;
