import express from "express";
import cors from "cors";
import "./loadenviroment.mjs";
import https from "https";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();


const cert = process.env.cert;
const  key  = process.env.keys;
console.log(cert + " CERT AND KEY  " + key)


const options = {
  key: fs.readFileSync(key),                  //Change Private Key Path here
  cert: fs.readFileSync(cert),            //Change Main Certificate Path here
  }


import records from "./routes/record.mjs";
import users from "./routes/user.mjs";


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());


app.use("/record", records);
app.use("/user", users);


let server = https.createServer(options,app)

  app.get('/record',(req,res)=>{
    console.log(res)
    //res.send('HTTPS in ExpressJS YASSSSSS')
  })

//start the Express server
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});