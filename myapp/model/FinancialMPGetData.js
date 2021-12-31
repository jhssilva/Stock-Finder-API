const { mainModule } = require("process");
const { workerData, parentPort } = require("worker_threads");
const RequestModel = require("../model/RequestModel");
const RequestManager = require("../model/FinancialMPManager");
const requestModel = new RequestModel();
const requestManager = new RequestManager();
const Stock = require("./mongodb/Stock");

function setStocksDataBase() {
  getStocksWithFinancialStatements(function (data, err) {
    if (err) {
      parentPort.postMessage("Error - " + err); // Send error to parent (Not sure how to do it yet)
      parentPort.close();
      return;
    }
    var tickets = JSON.parse(data);
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    for (var i = 0; i < tickets.length; i++) {
      const update = {
        $set: {
          ticket: tickets[i].toString(),
        },
      };
      const query = { ticket: tickets[i].toString() };
      Stock.findOneAndUpdate(query, update, options, function (err, result) {
        if (err) {
          console.log("Error while creating stock - " + err);
          return;
        }
      });
    }
  });
}
function main() {
  setStocksDataBase();
}

main();

//parentPort.postMessage(MessageEvent(error));

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"
//parentPort.postMessage({ hello: workerData });
async function getStocksWithFinancialStatements(callback) {
  requestManager.request(
    requestModel.typeOfRequest.get,
    requestModel.financialModelingPrep.endPoints.financialStatementSymbolsList,
    function (data, err) {
      if (err) return callback(null, err);
      return callback(data, false);
    }
  );
}
