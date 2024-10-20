// routes/companyRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllCompanies,
} = require("../controllers/companyGeography.controller.js");

// Get all companies
router.get("/", getAllCompanies);

module.exports = router;
