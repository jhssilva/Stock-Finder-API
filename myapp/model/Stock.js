const mongoose = require("mongoose");
const { Schema } = mongoose;

const incomeStatementSchema = new Schema({});

const balanceSheetStatementSchema = new Schema({});

const cashFlowStatementSchema = new Schema({});

const financialStatementsSchema = new Schema({
  date: { type: Date, required: true },
  incomeStatement: { incomeStatementSchema },
  balanceSheetStatement: { balanceSheetStatementSchema },
  cashFlowStatement: { cashFlowStatementSchema },
});

const infoOperationSchema = new Schema({
  createdBy: { type: String, default: "admin" },
  createdDate: { type: Date, default: Date.now },
  updatedBy: { type: String, default: "admin" },
  lastUpdate: { type: Date, default: Date.now },
});

const stockSchema = new Schema({
  ticket: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
  DBInfo: { infoOperationSchema },
  financialStatements: { financialStatementsSchema },
});

const model = mongoose.model("StockModel", stockSchema);

module.exports = model;

// const exemple = new Schema({
//  ticket: { type: String, required: true }, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number,
//   },
//   updated: { updatedSchema },
//   financialStatements: { financialStatementsSchema },
// })
