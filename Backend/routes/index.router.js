const router = require('express').Router({ mergeParams: true });

//Importing middlewares
// const middleware = require('../middlewares/middleware');

//Importing routers
const eventsRouter = require('./events.router');


//Setting up routers
router.use('/events', eventsRouter);


module.exports = router;