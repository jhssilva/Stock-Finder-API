const {
  handlerCreateListStocksWithFinancialStatements,
} = require("../model/handlers/stocks");

module.exports = {
  createListStocksWithFinancialStatements: (callback) => {
    handlerCreateListStocksWithFinancialStatements((err, data) => {
      if (err) return callback(null, err);
      return callback(data, false);
    });
  },
};
