const router = require('express').Router();
const customerFeedbackController = require('../controllers/customerFeedback.controller');

router.get('/', customerFeedbackController.findAll);

module.exports = router;
