// getting-started.js
const mongoose = require("mongoose");
const secretConstants = require("./secret");
const scData = secretConstants;
const setData = require("../crud/getData");

main().catch((err) => console.log(err));

async function main() {
  console.log("Connecting to Database...");
  await mongoose.connect(scData.urlComplete);
  console.log("Connected Successfuly!");
  run().catch((err) => console.error(err));
}

async function run() {
  const result = await setData();
  console.log(result);
}
