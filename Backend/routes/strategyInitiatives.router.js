const router = require('express').Router();
const initiativesTable = require("../controllers/strategyInitiativesTable.controller");
const initiativesTimeline = require("../controllers/strategyInitiativeTimeline.controller");

router.get('/tables', initiativesTable.getAllInitiatives)
router.get('/timeline', initiativesTimeline.getTimeline);

module.exports = router;