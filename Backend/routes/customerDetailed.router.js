const router = require('express').Router();
const customerDetailedController = require('../controllers/customerDetailed.controller');

router.post('/', customerDetailedController.findAll);

module.exports = router;
