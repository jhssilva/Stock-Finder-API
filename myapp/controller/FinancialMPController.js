const FinancialMPModel = require("../model/FinancialMPModel");
const RequestModel = require("../model/RequestModel");
const myFinancialMPModel = new FinancialMPModel();
const myRequest = new RequestModel();

const https = require("https");

module.exports = class FinancialMPController {
  constructor() {}

  stocksList(callback) {
    this.request(
      myRequest.get,
      myFinancialMPModel.financialStatementSymbolsList,
      function (err, data) {
        if (err) return callback(null, err);
        return callback(data, false);
      }
    );
  }

  /**
   *  Default Request to Financial MP
   * @param {*} typeOfRequest
   * @param {*} endpoint
   * @param {*} callback
   */
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
