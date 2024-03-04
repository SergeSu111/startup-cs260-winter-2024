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
    

    create_website_document(url, descript, input_img, title);
    store_local(url, descript, input_img, title, category); // already stored it
}


function store_local(url, des, img, title, category)   // make the data that adding website put into local storage
{
    let my_array = JSON.parse(localStorage.getItem("Web_list"));  // if the web_List local storage is never declared
    if (my_array == null) {  // the array is null 
        my_array = [];  // so create an array 
    }

    let my_object = {   // create an object to store the data 
        url: url,
        des: des,
        img: img,
        title: title,
        category: category
    };

    my_array.push(my_object); // push the object into array
    localStorage.setItem("Web_list", JSON.stringify(my_array));  
    // take array and change to string with json formate.
    // make the array set into local storage
    
}

function loadWebsiteFromLocalStorage() {
    // get the data from localstorage
    // loop through each website
    let my_array = JSON.parse(localStorage.getItem("Web_list")); // get the local storage 因为数据是以object的形式放在local storgae的。 array里的每一个元素都是一个object
    for (let i = 0; i < my_array.length; i++)
    {
         // pass that data as parameters into createWebsiteElement(...)
        create_website_document(my_array[i].url, my_array[i].des, my_array[i].img, my_array[i].title); // take the data from local storage and create the website again
    }
       
}

my_button.addEventListener("click", input_web);

document.addEventListener("DOMContentLoaded", (event) => {  // When we reloaded the page we just call the event and get the website from local storage. S
    loadWebsiteFromLocalStorage();
});


