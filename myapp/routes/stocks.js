var express = require("express");
var router = express.Router();

const RequestModel = require("../model/RequestModel");

const financialMPController = require("../controller/FinancialMPController");
const myFinancialMPController = new financialMPController();

/* GET stocks listing. */
router.get("/", function (req, res, next) {
  myFinancialMPController.stocksList(function (err, data) {
    if (err) return res.send(err);
    res.send(data);
  });
});
/* GET stocks listing. */

/**
 * GET Stock Test
 */

router.get("/test", function (req, res, next) {});

/**
 * GET Stock Test
 */

module.exports = router;
