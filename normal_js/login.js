
function log_in ()
{
    let username = document.querySelector("#name").value;
    localStorage.setItem("Username", username);
    window.location.href = "home_page.html";
}
my_form.addEventListener("click", log_in);