let my_button = document.querySelector("#my_button");
let my_array = [];  


function input_web()
{
    let big_whole_div = document.querySelector(".main-container");
    let url = prompt("Please tell me a website's url that you want to add.");
    let descript = prompt("Please tell me the description of the website you want to add.");
    let input_img = prompt("Please give an image url");
    let title = prompt("Please tell me the title of website.");
    store_local(url, descript, input_img); // already stored it


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
    small_a.setAttribute("href", url);
    small_a.textContent = "Go To the Website";
    small_div.appendChild(small_a);


    big_whole_div.appendChild(big_div); // after all set, append big_div into big_body
    return big_whole_div;

}




function store_local(url, des, img)
{
    let my_object = {
        "URL": url,
        "DESCRIPTION": des,
        "IMAGES": img
    };
    my_array.push(my_object);
    localStorage.setItem("Web_information", JSON.stringify(my_array));  // take array and change to string with json formate.
    
}


my_button.addEventListener("click", input_web);
