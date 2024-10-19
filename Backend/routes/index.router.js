const router = require('express').Router({ mergeParams: true });

//Importing middlewares
// const middleware = require('../middlewares/middleware');

//Importing routers
const stockRouter = require('./stock_data.router');
const companiesOverviewRouter = require('./companiesOverview.router');

//Setting up routers
router.use('/stockTrend', stockRouter);
router.use('/companiesOverview', companiesOverviewRouter);


module.exports = router;