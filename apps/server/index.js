import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
const app = express();

const port = 3000;
const mongoURI =
  "mongodb+srv://rashidpbi111:4iXGXnHeFCA0Z1M5@travelcluster.5ky7e.mongodb.net/?retryWrites=true&w=majority&appName=travelCluster";
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});

const client = new MongoClient(mongoURI)

async function run() {
    try {
        await client.connect()

        await client.db("admin").command({ping:1})
        console.log("pinged your deployment. succefuly connected to mongodb")
    } finally {
        await client.close();
    }
}
run().catch(console.dir)


app.listen(port, () => {
  console.log("listenting to port", port);
});
