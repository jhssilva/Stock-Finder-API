const { mainModule } = require("process");
const Stock = require("../schemas/stock");
const requests = require("../../financialmp/api/requests");
const mongoose = require("mongoose");

module.exports = function setStocksDataBase() {
  console.log("Start Thread Stocks into the DataBase");
  // Set stock with financial statements
  setStocksSymbols();
  // setFinancialStatementsAllStocks();
};

const setStocksSymbols = () => {
  requests.stocksListWithFinancialStatements(function (data, err) {
    var tickets = JSON.parse(data);

    const stocks = [];

    for (var i = 0; i < tickets.length; i++) {
      const ticket = tickets[i].toString();

      stocks.push(new Stock.stock({ ticket: ticket }));
    }

    Stock.stock.insertMany(stocks, (err) => {
      console.log("Error inserting stocks into the DB. Error ->  " + err);
    });
  });
};

const setFinancialStatementsAllStocks = async () => {
  const stocks = await stockSchema.find();
  for (let i = 0; i < stocks.length; i++) {
    const current = stocks[i].ticket;
    const stockSchema = Schema;

    stockSchema.ticket = current;
    console.log(stockSchema.ticket);
    // Get Income Statement
    requests.stockIncomeStatements(current, (data, err) => {
      if (err) {
        console.log(
          "Error while getting Income Statement information for  " +
            current +
            " . Error: " +
            err
        );
        return;
      }
    });
  }
};
