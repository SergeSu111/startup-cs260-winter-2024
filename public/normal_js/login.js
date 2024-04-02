let my_button = document.querySelector("#my_button");

let username = document.querySelector("#name").value; 
let password = document.querySelector("#password").value; // 把密码拿过来

async function log_in()
{

        const response = await fetch('/login/:username', {  // fetch request to backend 
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({"username": username, "password":password}) // 因为body request 需要是一个object
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


async function register()
{
    const response = await fetch("/register/:username", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({"username": username, "password": passowrd})
    });

    if (response.ok)
    {
        alert("You successfully registered your account.");
    }
    else
    {
        alert((await response.json().message));  // 否则的话返回后端返回的消息
    }
}