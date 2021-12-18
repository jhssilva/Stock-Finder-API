module.exports = class FinancialMPModel {
  constructor() {
    this.apiKey = "219bf3529861f3dc5899ec824c801709";
    this.hostname = "financialmodelingprep.com";
    this.port = 443;
    this.maxCalls = 250;
    this.version = "v3";

    this.financialStatementSymbolsList = "financial-statement-symbol-lists";
  }
};


// MODEL Values that will return to the controller