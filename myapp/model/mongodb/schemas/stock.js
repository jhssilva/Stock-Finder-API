const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const incomeStatementSchema = new Schema({
  date: { type: Date },
  reportedCurrency: { type: String },
  cik: { type: String },
  fillingDate: { type: Date },
  calendarYear: { type: String },
  period: { type: String },
  revenue: { type: Number },
  costOfRevenue: { type: Number },
  grossProfit: { type: Number },
  grossProfitRatio: { type: Number },
  researchAndDevelopmentExpenses: { type: Number },
  generalAndAdministrativeExpenses: { type: Number },
  sellingAndMarketingExpenses: { type: Number },
  sellingGeneralAndAdministrativeExpenses: { type: Number },
  otherExpenses: { type: Number },
  operatingExpenses: { type: Number },
  costAndExpenses: { type: Number },
  interestIncome: { type: Number },
  interestExpense: { type: Number },
  depreciationAndAmortization: { type: Number },
  ebitda: { type: Number },
  ebitdaratio: { type: Number },
  operatingIncome: { type: Number },
  operatingIncomeRatio: { type: Number },
  totalOtherIncomeExpensesNet: { type: Number },
  incomeBeforeTa: { type: Number },
  incomeBeforeTaxRatio: { type: Number },
  incomeTaxExpense: { type: Number },
  netIncome: { type: Number },
  netIncomeRatio: { type: Number },
  eps: { type: Number },
  epsdiluted: { type: Number },
  weightedAverageShsOut: { type: Number },
  weightedAverageShsOutDil: { type: Number },
  link: { type: Number },
  finalLink: { type: Number },
});

const balanceSheetStatementSchema = new Schema({});

const cashFlowStatementSchema = new Schema({});

const stockSchema = new Schema(
  {
    author: ObjectId,
    ticket: { type: String, required: true, unique: true },
    balanceSheet: balanceSheetStatementSchema,
    eps: Number,
    pe: Number,
    price: Number,
    sharesOutstanding: Number,
    exchange: String,
    marketCap: Number,
  },
  { collection: "stocks" }
);

const modelStock = mongoose.model("Stock", stockSchema);

module.exports.stock = modelStock;
