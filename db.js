const config = require("./dbConfig.json"); // call the config
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`; //get the mongo db url,automatically generate infor for me
const { MongoClient } = require('mongodb');// grab the MongoClient property in mongodb object 
const client = new MongoClient(url); // get myown mongo db

const db = client.db("startup-CS260"); //create a db name called rental
const userCollection = db.collection("user"); // 创造了叫user的collection
const formCollection = db.collection("suggestion"); 
const webCollection = db.collection("webInput"); 

const uuid = require("uuid");
const bcrypt = require("bcrypt");


(async function testConnection()
{
    await client.connect(); // wait for the db is connected
    await db.command({ping:1});
})().catch((ex) => {console.log(`Unable to connect to database with ${url} because ${ex.message}`);
process.exit(1);
});




