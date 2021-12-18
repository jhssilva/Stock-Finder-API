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
    this.financialStatementSymbolsList = "financial-statement-symbol-lists";
    this.endPoints = new (class endPoints {
      constructor() {
        this.financialStatementSymbolsList = "financial-statement-symbol-lists";
        this.incomeStatement = "income-statement";
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
