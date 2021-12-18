// Data Handler -> Perform requests
const https = require("https");

const RequestModel = require("./RequestModel");
const requestModel = new RequestModel();

module.exports = class FinancialMPManager {
  constructor() {
    this.requestData = requestModel.financialModelingPrep;
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
      hostname: this.requestData.hostname,
      port: this.requestData.port,
      path:
        "/api/" +
        this.requestData.version +
        "/" +
        endpoint +
        "?apikey=" +
        this.requestData.apiKey,
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
