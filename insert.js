const { MongoClient } = require("mongodb");

// Connection URL
const URL = "mongodb://127.0.0.1:27017";

// 1. Create the client instance!
const client = new MongoClient(URL);

async function main() {
  try {
    // Connect to the database
    await client.connect();
    console.log("Connected to MongoDB successfully.\n");

    // 2. Fixed syntax for selecting DB and Collection
    const students = client.db("school").collection("students");

    // 3. Moved all operations inside the async function
    await students.deleteMany({});
    console.log("Cleared the collection.\n");

    // Insert One
    const one = await students.insertOne({
      name: "Anananananananananananyaaaaa cutieeeee",
      roll: "21cs40",
      email: "cutieee@1234loveme.com",
      course: "bakchodi",
      marks: 1000000,
      year: 0.55,
    });

    console.log("insertOne returned:");
    console.log("acknowledged:", one.acknowledged);
    console.log("Inserted ID:", one.insertedId, "\n");

    // 4. Added insertMany entries
    const multiple = await students.insertMany([
      {
        name: "Rahul Sharma",
        roll: "21cs41",
        email: "rahul@example.com",
        course: "web-development",
        marks: 85,
        year: 2,
      },
      {
        name: "Priya Singh",
        roll: "21cs42",
        email: "priya@example.com",
        course: "data-science",
        marks: 92,
        year: 3,
      },
      {
        name: "Aman Gupta",
        roll: "21cs43",
        email: "aman@example.com",
        course: "machine-learning",
        marks: 78,
        year: 4,
      },
    ]);

    console.log("insertMany returned:");
    console.log("acknowledged:", multiple.acknowledged);
    console.log("Inserted IDs:", multiple.insertedIds);

    await students.insertOne({
      name: "odd one",
      roll: "21210cs",
      favoriteColour: "blue",
      marks: "not a number",
    });
    console.log("Inserted a document with completely different field");
    console.log("MY sql qould hae regussed this");
    console.log("");
    console.log("total documents:", await students.countDocuments());
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // 5. Ensure connection closes when done
    await client.close();
    console.log("\nConnection closed.");
  }
}
main();
