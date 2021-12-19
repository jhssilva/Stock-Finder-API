// Store the sctucts for the Data that comes from the API. (Only the structs)
module.exports = class FinancialMPData {
  constructor() {
    this.stock = new Stock();
  }
};

class Stock {
  constructor() {
    this.symbol;
  }
}
