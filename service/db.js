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

// for register
async function createUser(userName, password)
{
    const passwordHash = await bcrypt.hash(password, 10); // 将passwordhash 加密

    const user = 
    {
        username: userName,
        password: passwordHash,
        token: uuid.v4(), // randomly get a token if user registers
    };
    await userCollection.insertOne(user); // add the user into db's userCollection
}

// for login
async function loginGetUser(username)
{
    
    return await userCollection.findOne({"username": username}); // return the users
}


// for input web information
async function addingWebsite(webInformation, the_username)
{
    let wholeWebinformation = {"username": the_username, "webinformation":webInformation};
    await webCollection.insertOne(wholeWebinformation); 
    // insert this webInformation into db.
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }

// for submit suggestion form
async function submitForm(formData, my_username)
{
    const wholeSubmitForm = {"username":my_username, "form": formData};
    await formCollection.insertOne(wholeSubmitForm); 
    // insert this formData into DB.

}

async function getWebInformation(username)
{  
    const query = {"username": username};
    const projection = {projection: {"webinformation":1, _id: 0}}; // what this means?
    const result = webCollection.find(query, projection);
    return result.toArray();
}



module.exports = 
{
    createUser,
    loginGetUser,
    addingWebsite,
    submitForm,
    getWebInformation,
    getUserByToken,
    
}













