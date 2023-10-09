import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config


const variable = process.env.MongoConnection
console.log(variable);


const client = new MongoClient(variable);

let conn;
try {
  conn = await client.connect();
  console.log("Successfully connected to Db")
} catch(e) {
  console.error(e);
}


let db = conn.db("apds");

export default db;