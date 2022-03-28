// getting-started.js
const mongoose = require("mongoose");
const secretConstants = require("./secret");
const scData = secretConstants;
const { Worker } = require("worker_threads");
const financialGetDataPath = "./model/financialmp/getData.js";

main().catch((err) => console.log(err));

async function main() {
  console.log("Connecting to Database...");
  await mongoose.connect(scData.urlComplete);
  console.log("Connected Successfuly!");
  // console.log("Start Thread Stocks into the DataBase");
  // run().catch((err) => console.error(err));
}

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(financialGetDataPath, { workerData });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

async function run() {
  const result = await runService("message");
  console.log(result);
}
