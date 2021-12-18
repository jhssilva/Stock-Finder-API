const FinancialMPModel = require("../model/FinancialMPModel");
const RequestModel = require("../model/RequestModel");
const RequestManager = require("../model/FinancialMPManager");
const myFinancialMPModel = new FinancialMPModel();
const requestModel = new RequestModel();
const requestManager = new RequestManager();

module.exports = class FinancialMPController {
  constructor() {}

  /**
   *  List of symbols that have financial statements
   * @param {*} callback
   */
  stocksListWithFinancialStatements(callback) {
    requestManager.request(
      requestModel.typeOfRequest.get,
      requestModel.financialModelingPrep.endPoints
        .financialStatementSymbolsList,
      function (err, data) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  }

  incomeStatementStock(stock, callback) {}
};
