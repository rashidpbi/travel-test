// // pages/api/getAllData.js

// import { MongoClient } from "mongodb";

// export default async function handler(req, res) {
//     if (req.method === "GET") {
//         const client = new MongoClient(process.env.MONGO_URI_TEST);

//         try {
//             await client.connect();

//             // Choose a name for your database
//             const database = client.db("trxvl");

//             // Choose a name for your collection
//             const collection = database.collection("destinations");
//             const allData = await collection.find({}).toArray();

//             res.status(200).json(allData);
//         } catch (error) {
//             res.status(500).json({ message: "Something went wrong!" });
//         } finally {
//             await client.close();
//         }
//     } else {
//         res.status(405).json({ message: "Method not allowed!" });
//     }
// }

