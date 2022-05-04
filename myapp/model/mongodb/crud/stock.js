const mongoose = require("mongoose");

module.exports = {
  create: async (stockSchema) => {
    // * res is from MongoDB database server
    const res = await Stock.create(stockSchema);
    return res;
  },
  read: async () => {},
  update: async () => {
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
  },
  delete: async (Ticker) => {
    const del = Stock.deleteOne({ ticket: Ticker });
  },
};
