const mongoose = require("mongoose");
const Stock = require("./Stock");

module.exports = class Crude {
  constructor() {}
  async create() {
    const stock = {
      ticket: "Teste",
    };
    // * res is from MongoDB database server
    const res = await Stock.create(stock);
    return res;
    //return callback(res, false);
  }

  async read() {
    const records = await Stock.find({ ticket: "Teste" });
    // const records = await Stock.findOne({ ticket: "Teste" });
  }

  async update() {
    const update = await Stock.updateOne(
      {
        ticket: "Teste",
      },
      {
        // $push if you want to add an item to the array
        $set: {
          // If you want update just a few fields and mantain the rest
          //What I want to change next
        },
      }
    );
  }

  async delete() {
    const delet = Stock.deleteOne({ ticket: "Teste" });
  }
};
