var express = require("express");
var router = express.Router();

const financialMPController = require("../controller/FinancialMPController");
const myFinancialMPController = new financialMPController();

/* GET stocks listing. */
router.get("/", function (req, res, next) {
  //const output = myFinancialMPController.financialStatementSymbolsList();

  myFinancialMPController.request(
    "GET",
    "financial-statement-symbol-lists",
    function (err, data) {
      if (err) return res.send(err);
      res.send(data);
    }
  );
  //res.send("respond with a resource: " + output);
});

module.exports = router;
