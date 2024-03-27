const express = require(express); // get the express 
const app = express(); // construct the express to app

// get the serivce port 4000, 
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// use express to use json() to make the response and required body as json
app.use(express.json());

// static the front end conent
app.use(express.static("public"));

// Router for service endpoints 
// var apiRouter = express.Router();
// app.use("/api", apiRouter);

// Specific endpoints
let my_web_Infors = [];

const defaultCategories = {  // PUT INTO BACK END  不用localstorage 了
    "Programming Tools": 2,
    "BYU": 4,
    "College information": 1,
    "Shopping": 1,
    "Delivery": 1
};


app.post("/addingWebsite", (req, res) =>
{
    let reqObj = JSON.parse(req.body); // 将req 转换为js object
    let webSpot = updateWeb(reqObj); // 将转换后的reqObj 放入updateWeb来得到response which is a webSpot
    res.send(webSpot);
}
);

function updateWeb(webInfor)
{
    my_web_Infors.push(webInfor); // 将用户input的webInfor放入array中 暂时当作db用.

    // update category 
    // if the webInfor.category in defaltCategries. 
    if (webInfor.category in defaultCategories)
    {
        // make the number ++
        defaultCategories[webInfor.category]++;
    }
    else
    {
        // create a new category in defaultCategories and give the value 1
        defaultCategories[webInfor.category] = 1;
    }
        
    
    // 
}





app.listen(port, () => 
{
    console.log(`Listening on port ${port}`);
});
