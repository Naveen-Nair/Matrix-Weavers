const router = require("express").Router({ mergeParams: true });

//Importing middlewares
// const middleware = require('../middlewares/middleware');

//Importing routers
const stockRouter = require("./stock_data.router");
const companiesOverviewRouter = require("./companiesOverview.router");
const customerFeedbackRouter = require("./customerFeedback.router");
const customerDetailedRouter = require("./customerDetailed.router");
const CompanyFeedbackRouter = require("./CompanyFeedback.router");
const businessModel = require("./businessModel.router");
const businessData = require("./businessData.router");
const insightsRouter = require("./insightsData.router");
const companyInsights = require("./companyInsights.router");

//Setting up routers
router.use("/stockTrend", stockRouter);
router.use("/companiesOverview", companiesOverviewRouter);
router.use("/customerFeedback", customerFeedbackRouter);
router.use("/CustomerDetailed", customerDetailedRouter);
router.use("/CompanyFeedback", CompanyFeedbackRouter);
router.use("/businessModel", businessModel);
router.use("/businessData", businessData);
router.use("/insights", insightsRouter);
router.use("/companyInsights", companyInsights);

module.exports = router;
