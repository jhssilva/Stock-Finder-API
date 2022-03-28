var express = require("express");
var router = express.Router();

const {
  listWithFinancialStatements,
  createListStocksWithFinancialStatements,
} = require("../controller/stocks");

const CRUD = require("../model/mongodb/crud/base");
const CRUDFunctions = new CRUD();

/* GET stocks listing. */
router.get("/list", function (req, res, next) {
  listWithFinancialStatements(function (err, data) {
    if (err) return res.send(err);
    res.send(data);
  });
});

/* POST stocks listing. */
router.post("/list", function (req, res, next) {
  createListStocksWithFinancialStatements(function (err, data) {
    if (err) return res.send(err);
    res.send(data);
  });
});

/**
 * GET Income Statement
 */
router.get("/income-statement", function (req, res, next) {
  //Check security?! Or should I do this in the controller?
  // let stock = req.query.stock;
  // financialMP_Request.stockIncomeStatements(stock, function (err, data) {
  //   if (err) return res.send(err);
  //   res.send(data);
  // });
});

/**
 * POST Stock Test
 */

router.post("/test", async function (req, res, next) {
  //JSON.stringify(obj, null, 4);
  //console.log(req);
  // console.log("URL: " + req.url);
  // console.log("Method: " + req.method);
  // console.log("ParsedURL: " + JSON.stringify(req._parsedUrl, null, 4));
  // console.log("Query: " + JSON.stringify(req.query, null, 4));
  // console.log(
  //   "ParsedOriginalURL: " + JSON.stringify(req._parsedOriginalUrl, null, 4)
  // );
  const response = await CRUDFunctions.create();

  res.send(response);
});

/**
 * POST Stock Test
 */

module.exports = router;
