// getting-started.js
const mongoose = require("mongoose");
const secretConstants = require("./secret");
const scData = secretConstants;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(scData.url);
}
