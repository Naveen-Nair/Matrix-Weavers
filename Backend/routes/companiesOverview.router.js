const router = require('express').Router();
const companiesOverviewController = require('../controllers/companiesOverview.controller');

router.get('/', companiesOverviewController.findAll);

module.exports = router;
