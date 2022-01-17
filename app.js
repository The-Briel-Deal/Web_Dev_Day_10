const {
    MongoClient
} = require("mongodb");
const assert = require('assert');
// Connection URI
const uri =
    "mongodb://192.168.0.11:27017/?maxPoolSize=20&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        db = client.db("Fruits");
        collection = db.collection('documents');

        const doc = {
            name: "Neapolitan pizza",
            shape: "round"
        };
        const result = await collection.insertOne(doc);
        console.log(
            `A document was inserted with the _id: ${result.insertedId}`,
        );
        
        await db.command({
            ping: 1
        });
        console.log("Connected successfully to server");
    } finally {

        await client.close();
    }
}
run().catch(console.dir);