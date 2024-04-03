const express = require("express"); // get the express 
const app = express(); // construct the express to app
const db = require("./db.js"); // call db file
const multer = require("multer"); // just pasing the formData type requests. 

const upload = multer({});
// get the serivce port 4000, 
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// use express to use json() to make the response and required body as json
app.use(express.json());

// static the front end conent
app.use(express.static("public"));

app.use(cookieParser()); // to process cookie 

app.set("trust proxy", true); // for websokect

// const { cookie } = require("express/lib/response.js");

const authCookieName = "token"; // set the cookieheader as token? 


const defaultCategories = {  // PUT INTO BACK END  不用localstorage 了
    "Programming Tools": 2,
    "BYU": 4,
    "College information": 1,
    "Shopping": 1,
    "Delivery": 1
};


app.post("/register/:username", async (req, res) =>
{
    try
    {
        const username = req.body["username"]; // get the request username
        const password = req.body["password"]; // get request password
    
        // if the user already in db
        if (await db.loginGetUser(username,password))
        {
            res.status(409).send({msg: "Existing user."});
        }
        else
        {
            // put the username into the db function
            await db.createUser(username, password); // stored in db
            res.sendStatus(200); // send back 200
        }
    }
    catch (error)
    {
        res.status(400).send(error.message);
    }
})


// because the req and res get from db. it is promise, so need to write await and async
app.post ("/login/:username", async (req, res) =>
{
        const username = req.body["username"];
        const password = req.body["password"];
        const user = await db.loginGetUser(username); // call db to see if user is here by username
        if (user)
        {   if (await bcrypt.compare(password, user.password))
            {
                setAuthCookie(res, user.token); // 那么设置用户的cookie
                res.sendStatus(200); // 返回200回去
            }
            else{res.status(404).send("I cannot find your password.")};
        }
        else
        {
            res.status(400).send("We do not find your registed information.");
        }
})


app.post("/addingWebsite", (req, res) =>
{
    console.log("Hello: ", req.body);
    let reqObj = req.body; // 将req 转换为js object
    try
    {
        updateWeb(reqObj); // 将转换后的reqObj 放入updateWeb来得到response which is a webSpot
        res.sendStatus(200);
    }
    catch
    {
        res.status(400).send({"message": "You input a wrong information."});
    }
   
}
);

// uploard.none() menas just submitting text.
app.post("/submit_form", upload.none(), (req, res) =>
{
    try{
        const formData = req.body;
        my_submit.push(formData);
        res.sendStatus(200);
    }
    catch (error)
    {
        res.status(400).send(error.message);
    }
});

// 从server里得到用户输入数据 
app.get("/info/:username", (_req,res) =>
{
    const username = req.params.username;
    res.send(my_web_Infors); // 将这个array as db 传回给用户
})


app.get("/categories/:username", (_req, res) =>
{
    res.send(defaultCategories);
})



function updateWeb(webInfor)
{
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
    // update web spot 

    my_web_Infors.push(webInfor); 
    // 将用户input的webInfor放入array中 暂时当作db用. 
    // 只需要做这一步 因为 不管用户输入的input是否在数据库里 都需要加到数据库里
}

// 每当用户login的时候 都会 带着返回一个AuthCookie 来证明用户当前的用户状态
function setAuthCookie(res, authToken)
{
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: "strict", 
    });
}



app.listen(port, () => 
{
    console.log(`Listening on port ${port}`);
});

