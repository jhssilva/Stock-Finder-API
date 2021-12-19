const { MongoClient } = require("mongodb");
const secretConstants = require("./secret");
const secretsData = secretConstants;

//https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
async function main() {
  const uri =
    "mongodb+srv://" +
    secretsData.user +
    ":" +
    secretsData.password +
    "@" +
    secretsData.host +
    "/test?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

main();
