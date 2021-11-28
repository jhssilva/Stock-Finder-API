const FinancialMPModel = require("../model/FinancialMPModel");
const myFinancialMPModel = new FinancialMPModel();
const RequestModel = require("../model/RequestModel");
const myRequest = new RequestModel();

const https = require("https");

module.exports = class FinancialMPController {
  constructor() {}

  financialStatementSymbolsList() {
    this.request(
      myRequest.get,
      myFinancialMPModel.financialStatementSymbolsList
    );
  }

  request(typeOfRequest, endpoint, callback) {
    let body = [];

    const options = {
      hostname: myFinancialMPModel.hostname,
      port: myFinancialMPModel.port,
      path:
        "/api/" +
        myFinancialMPModel.version +
        "/" +
        endpoint +
        "?apikey=" +
        myFinancialMPModel.apiKey,
      method: typeOfRequest,
    };

    const req = https.request(options, (res) => {
      res
        .on("data", (d) => {
          // process.stdout.write(d); // Print
          body.push(d);
        })
        .on("end", () => {
          body = Buffer.concat(body).toString();
          return callback(body, false);
        });
    });

    req.on("error", (error) => {
      console.error(error);
      return callback(null, error);
    });

    // req.on("finish", () => {
    //   console.log("AQUI");
    // });

    req.end();
  }
};
