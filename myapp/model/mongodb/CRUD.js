const mongoose = require("mongoose");
const Stock = require("../Stock");

module.exports = class CRUDE {
  constructor() {}
  async create() {
    const stock = {
      ticket: "Teste",
    };
    // * res is from MongoDB database server
    const res = await Stock.create(stock);
    console.log(res);
    //return callback(res, false);
  }
};
