const RequestModel = require("./requestmodel");
const RequestManager = require("./manager");
const requestModel = new RequestModel();
const requestManager = new RequestManager();
const typeOfRequest = requestModel.typeOfRequest;
const endPoints = requestModel.financialModelingPrep.endPoints;

module.exports = {
  /**
   *  List of symbols that have financial statements
   * @param {*} callback
   */
  stocksListWithFinancialStatements: (callback) => {
    requestManager.request(
      requestModel.typeOfRequest.get,
      requestModel.financialModelingPrep.endPoints
        .financialStatementSymbolsList,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },

  /**
   *  Stock Income Statements
   * @param {*} stock
   * @param {*} callback
   */
  stockIncomeStatements: (stock, callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.incomeStatement + "/" + stock,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },
  /**
   * Stock Balance Sheet Statements
   * @param {*} stock
   * @param {*} callback
   */

  stockBalanceSheetStatements: (stock, callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.stockBalanceSheetStatements + "/" + stock,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },
  /**
   * Stock Cash Flow Statements
   * @param {*} stock
   * @param {*} callback
   */
  stockCashFlowStatements: (stock, callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.stockCashFlowStatements + "/" + stock,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },

  /**
   *  Stock Income Statements as Reported
   * @param {*} stock
   * @param {*} callback
   */
  stockIncomeStatementsAsReported: (stock, callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.incomeStatementAsReported + "/" + stock,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },

  /**
   *  Stock Balance Sheet Statement as Reported
   * @param {*} stock
   * @param {*} callback
   */
  stockBalanceSheetStatementsAsReported: (stock, callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.balanceSheetStatementAsReported + "/" + stock,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },

  /**
   *  Stock Cash Flow Statements as Reported
   * @param {*} stock
   * @param {*} callback
   */
  stockCashFlowStatementsAsReported: (stock, callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.cashFlowStatementAsReported + "/" + stock,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },

  /**
   * Stock Annual Report On Form 10K
   * @param {*} stock
   * @param {*} callback
   */
  stockAnnualReportOnForm10K: (stock, callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.annualReportOnForm10K + "/" + stock,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },

  /**
   *  Company Profile
   * @param {*} stock
   * @param {*} callback
   */
  companyProfile: (stock, callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.companyProfile + "/" + stock,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },

  /**
   *  Most losers of the day
   * @param {*} callback
   */
  mostLosers: (callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.mostLosers,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },

  /**
   * Most Winners
   * @param {*} callback
   */
  mostWinners: (callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.mostWinners,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },

  /**
   * Tresuary Rates
   * @param {*} callback
   */
  tresuaryRates: (callback) => {
    requestManager.request(
      typeOfRequest.get,
      endPoints.tresuaryRates,
      function (data, err) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  },
};
