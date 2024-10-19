const router = require('express').Router();
const stockController = require('../controllers/stock.controller');

router.post('/', stockController.findAll);

module.exports = router;
