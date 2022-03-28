const {
  stocksListWithFinancialStatements,
} = require("../financialmp/api/requests");

module.exports = {
  /**
   *  Create a List of symbols that have financial statements on DataBase
   * @param {*} callback
   */
  handlerCreateListStocksWithFinancialStatements: (callback) => {
    stocksListWithFinancialStatements(function (err, data) {
      if (err) return callback(null, err);
      //   return callback(data, false);
      console.log(data);
      return callback("testee", false);
    });
  },
};
