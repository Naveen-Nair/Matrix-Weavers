const router = require('express').Router();

const eventsController = require('../controllers/events.controller');

router.get('/',eventsController.findAll);

router.get('/:title',eventsController.findByName);

module.exports = router;