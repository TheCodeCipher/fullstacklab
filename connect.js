const { MongoClient } = require("mongodb");
const URL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(URL);

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db("school");
  console.log("Using database:", db.databaseName);

  const students = db.collection("students");
  console.log("Using collection:", students.collectionName);

  const count = await students.countDocuments();
  console.log("Documents in students:", count);

  const list = await client.db().admin().listDatabases();
  console.log("");
  console.log("Databases on this server:");
  list.databases.forEach(function (d) {
    console.log(" ", d.name);
  });
}
main()
  .catch(function (err) {
    console.log("");
    console.log("Could not connect.");
    console.log(err.message);
  })
  .finally(async function () {
    await client.close();
    console.log("");
    console.log("Connection closed.");
  });
