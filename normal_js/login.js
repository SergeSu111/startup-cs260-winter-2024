let my_button = document.querySelector("#my_button");

function log_in()
{
    let username = document.querySelector("#name").value;
    localStorage.setItem("Username", username);
    window.location.href = "home_page.html";
}

my_button.addEventListener("click", function(event){
    event.preventDefault();
    log_in();
});