//require("express");

function createCategoryListItem(title, count) 
{
    let new_li = document.createElement("li");
    new_li.setAttribute("class", "new_li");
    // set the category
    let new_cateogry = document.createElement("span"); 
    new_cateogry.setAttribute("class", "level");
    new_cateogry.textContent = title;
    new_li.appendChild(new_cateogry);

    //set the quantity
    let new_cateogry_number = document.createElement("span");
    new_cateogry_number.setAttribute("class", "level-end");
    new_cateogry_number.textContent = count;
    new_li.appendChild(new_cateogry_number);

    let ul_list = document.querySelector(".menu_list");
    ul_list.appendChild(new_li);
}


async function loadCategoriesFromServer() {
    // const defaultCategories = {
    //     "Programming Tools": 2,
    //     "BYU": 4,
    //     "College information": 1,
    //     "Shopping": 1,
    //     "Delivery": 1
    // };


    // get the categories from server
    const response = await fetch("/categories/:username");
    //console.log(response.json()); // make json to be object
    const categories = await response.json();
    console.log(categories); 


    // If nothing in localstorage, then initilize with default 4 categories

    // Display categories in localStorage
    for (const key in categories) {
        const title = key;
        console.log("title: " + title);
        const count = categories[key];
        console.log("value: " + categories[key]);
        createCategoryListItem(title, count);
    }

}

document.addEventListener("DOMContentLoaded", () => {  // When we reloaded the page we just call the event and get the website from local storage. S
    loadCategoriesFromServer();
});