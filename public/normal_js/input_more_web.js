let my_button = document.querySelector("#my_button");

function create_website_document(url, descript, input_img, title)
{
    let big_whole_div = document.querySelector(".main-container");

    // big div
    let big_div = document.createElement("div");
    big_div.setAttribute("class", "card");


    // img in div
    let created_img = document.createElement("img");
    created_img.setAttribute("src", input_img); // set the src == img_url
    created_img.setAttribute("class", "card-img-top"); 
    created_img.setAttribute("alt", "alternate");
    big_div.appendChild(created_img); // put the img into the big
    

    // small_div
    let small_div = document.createElement("div");
    small_div.setAttribute("class", "card-body");


    // h5
    let small_h5 = document.createElement("h5");
    small_h5.setAttribute("class", "card-title"); 
    small_h5.textContent = title;  // set the title into h5's content
    small_div.appendChild(small_h5); 


    // p
    let small_p = document.createElement("p");
    small_p.setAttribute("class", "card-text");
    small_p.textContent = descript;  // make the descript apply to the p content
    small_div.appendChild(small_p); // append the small_p into small_div
    

    // a
    let small_a = document.createElement("a");
    small_a.setAttribute("class", "btn btn-primary");
    // small_a.setAttribute("href", url);
    small_a.textContent = "Go To the Website";
    small_a.href = "https://" + url;
    small_div.appendChild(small_a);


    // apend small div into big div
    big_div.appendChild(small_div);


    big_whole_div.appendChild(big_div); // after all set, append big_div into big_body
}

function input_web()
{
    let url = prompt("Please tell me a website's url that you want to add.");
    let descript = prompt("Please tell me the description of the website you want to add.");
    let input_img = prompt("Please give an image url");
    let title = prompt("Please tell me the title of website.");
    let category = prompt("Please tell me the category of this website.");
    
    
    let my_object = {   // create an object to store the data 
        url: url,
        des: descript,
        img: input_img,
        title: title,
        category: category
    };

    fetch_new_web(my_object); // call this already updated my category and store the input into db

    create_website_document(url, descript, input_img, title); // because this is for dom, I will not write this in back-end
}


async function loadWebsiteFromServer() {
  
    const myWebInforsFromDB = await fetch("/getWebInforsFromDB");  // get the webInfors from server, default is fetch

    for (let i = 0; i < myWebInforsFromDB.length; i++)
    {
         // pass that data as parameters into createWebsiteElement(...)
        create_website_document(myWebInforsFromDB[i].url, myWebInforsFromDB[i].des, myWebInforsFromDB[i].img, myWebInforsFromDB[i].title); // take the data from local storage and create the website again
    }
       
}

async function fetch_new_web(my_object)  // for 总的
{
    //console.log("hELLO: ", my_object);
    try
    {
        const response = await fetch('/addingWebsite', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(my_object),
        });

        if (!response.ok)
        {
            alert((await response.json()).message); // get back the error message from the server
        }
    }
    catch
    {
        alert("");
    }
    
}


// async function fetch_store_webInfor(my_object) // FOR 将增加的网页信息存储到server里
// {
//     const response = await fetch('/storeWebInformation', {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify(my_object),
//       });
// }


my_button.addEventListener("click", input_web);

document.addEventListener("DOMContentLoaded", (event) => {  // When we reloaded the page we just call the event and get the website from local storage. S
    loadWebsiteFromServer(); // 每当刷新的时候都会调用这个异步函数来从server里调数据
});


