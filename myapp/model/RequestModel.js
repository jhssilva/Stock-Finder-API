module.exports = class RequestModel {
  constructor() {
    this.financialModelingPrep = new FinancialModelingPrep();
    this.typeOfRequest = new TypeOfRequest();
  }
};

class FinancialModelingPrep {
  constructor() {
    this.apiKey = "219bf3529861f3dc5899ec824c801709";
    this.hostname = "financialmodelingprep.com";
    this.port = 443;
    this.maxCalls = 250;
    this.version = "v3";

    this.endPoints = new (class endPoints {
      constructor() {
        this.financialStatementSymbolsList = "financial-statement-symbol-lists";
        this.incomeStatement = "income-statement";
        this.incomeStatementAsReported = "income-statement-as-reported";
        this.balanceSheetStatement = "balance-sheet-statement";
        this.balanceSheetStatementAsReported =
          "balance-sheet-statement-as-reported";
        this.cashFlowStatement = "cash-flow-statement";
        this.cashFlowStatementAsReported = "cash-flow-statement-as-reported";
        this.financialStatementAsReported =
          "financial-statement-full-as-reported";
        this.annualReportOnForm10K = "financial-reports-json";
        this.companyProfile = "profile";
        this.mostLosers = "losers";
        this.mostActives = "actives";
        this.tresuaryRates = "treasury";
      }
    })();
  }
}

class TypeOfRequest {
  constructor() {
    this.get = "GET";
    this.post = "POST";
    this.put = "PUT";
    this.delete = "DELETE";
  }
}
