module.exports = class RequestModel {
  constructor() {
    this.financialModelingPrep = financialModelingPrep;
    this.typeOfRequest = typeOfRequest;
  }
};

const endPoints = {
  financialStatementSymbolsList: "financial-statement-symbol-lists",
  incomeStatement: "income-statement",
  incomeStatementAsReported: "income-statement-as-reported",
  balanceSheetStatement: "balance-sheet-statement",
  balanceSheetStatementAsReported: "balance-sheet-statement-as-reported",
  cashFlowStatement: "cash-flow-statement",
  cashFlowStatementAsReported: "cash-flow-statement-as-reported",
  financialStatementAsReported: "financial-statement-full-as-reported",
  annualReportOnForm10K: "financial-reports-json",
  companyProfile: "profile",
  mostLosers: "losers",
  mostActives: "actives",
  tresuaryRates: "treasury",
};

const financialModelingPrep = {
  apiKey: "219bf3529861f3dc5899ec824c801709",
  hostname: "financialmodelingprep.com",
  port: 443,
  maxCalls: 250,
  version: "v3",
  endPoints: endPoints,
};

const typeOfRequest = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};
