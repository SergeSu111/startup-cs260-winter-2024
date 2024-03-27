const express = require(express); // get the express 
const app = express(); // construct the express to app

// get the serivce port 4000, 
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// use express to use json() to make the response and required body as json
app.use(express.json());

// static the front end conent
app.use(express.static("public"));

// Router for service endpoints 
var apiRouter = express.Router();
app.use("/api", apiRouter);

// Specific endpoints
app.post("/addingWebsite", (req, res) =>
{
    new
}
)
