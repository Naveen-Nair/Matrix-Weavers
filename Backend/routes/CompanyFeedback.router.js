const router = require('express').Router();
const companyFeedbackController = require('../controllers/companyFeedback.controller');

router.post('/', companyFeedbackController.getCompanyFeedback);

module.exports = router;
