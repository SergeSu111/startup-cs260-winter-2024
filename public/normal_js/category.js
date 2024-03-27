// get the category element
// programming
/*
let programming = document.querySelector(".context_span").textContent;
let programming_number = document.querySelector(".programming_number").textContent;

// BYU
let byu = document.querySelector(".level-start").textContent;
let byu_number = document.querySelector(".level-end-byu").textContent;

// college
let college = document.querySelector(".level-start-college").textContent;
let college_number = document.querySelector(".level-end-college").textContent;

// shopping
let shopping = document.querySelector(".level-start-shopping").textContent;
let shopping_number = document.querySelector(".level-end-shopping").textContent;

// delivery
let delivery = document.querySelector(".level-start-delivery").textContent;
let delivery_number = document.querySelector(".level-end-delivery").textContent;
*/

function createCategoryListItem(title, count) {
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

// make all the category and their value into a object
//let category_object = {programming: programming_number, byu: byu_number, college: college_number, shopping: shopping_number, delivery: delivery_number};
/*
function category_matching()
{
    let my_array = JSON.parse(localStorage.getItem("Web_list")); // grab the web_List from local storage
    for (let i = 0; i < my_array.length; i++)
    {
        // Check if category already exists.
        // If it exists, then increase the count
        if (my_array[i].category === key) // TODO
        {
            category_object[key] += 1;
        }
        else
        {
            // create a new li
            createCategoryListItem();
        }
    }

}

category_matching();
*/

function loadCategoriesFromLocalStorage() {
    const defaultCategories = {
        "Programming Tools": 2,
        "BYU": 4,
        "College information": 1,
        "Shopping": 1,
        "Delivery": 1
    };

    // Check localstorage for categories.
    let categories = JSON.parse(localStorage.getItem("categories"));
    // If nothing in localstorage, then initilize with default 4 categories
    if (categories === null) {
        localStorage.setItem("categories", JSON.stringify(defaultCategories));
        categories = defaultCategories;
    }

    // Display categories in localStorage
    for (const key in categories) {
        const title = key;
        const count = categories[key];
        createCategoryListItem(title, count);
    }

}

document.addEventListener("DOMContentLoaded", (event) => {  // When we reloaded the page we just call the event and get the website from local storage. S
    loadCategoriesFromLocalStorage();
});