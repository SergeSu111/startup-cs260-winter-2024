let my_button = document.querySelector("#my_button");

async function log_in()
{
        let username = document.querySelector("#name").value; 
        let password = document.querySelector("#password").value; // 把密码拿过来
        const response = await fetch('/login/:username', {  // fetch request to backend 
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({"username": username, "password":password})
        });
        if (response.ok)
        {
            window.location.href = "home_page.html";
        }
        else
        {
        
            alert((await response.json()).message); // 否则的话返回后端返回的消息
        }
    }



// my_button.addEventListener("click", function(event){
//     event.preventDefault();
//     log_in();
// });

async function register()
{
    
}