const router = require('express').Router({ mergeParams: true });

//Importing middlewares
// const middleware = require('../middlewares/middleware');

//Importing routers
const stockRouter = require('./stock_data.router');
const companiesOverviewRouter = require('./companiesOverview.router');
const customerFeedbackRouter = require('./customerFeedback.router');
const customerDetailedRouter = require('./customerDetailed.router');
const CompanyFeedbackRouter = require('./CompanyFeedback.router');

const strategyInitiatives = require("./strategyInitiatives.router");

//Setting up routers
router.use('/stockTrend', stockRouter);
router.use('/companiesOverview', companiesOverviewRouter);
router.use('/CustomerFeedback', customerFeedbackRouter);
router.use('/CustomerDetailed', customerDetailedRouter);
router.use('/CompanyFeedback', CompanyFeedbackRouter);router.use('/initiatives', strategyInitiatives)


module.exports = router;