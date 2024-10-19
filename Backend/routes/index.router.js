const router = require('express').Router({ mergeParams: true });

//Importing middlewares
// const middleware = require('../middlewares/middleware');

//Importing routers
const eventsRouter = require('./events.router');
const stockRouter = require('./stock_data.router');


//Setting up routers
router.use('/events', eventsRouter);
router.use('/stockTrend', stockRouter);


module.exports = router;