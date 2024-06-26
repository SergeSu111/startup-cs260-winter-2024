let my_button = document.querySelector("#my_button");


async function log_in()
{
        let username = document.querySelector("#name").value; 
        let password = document.querySelector("#password").value; // 把密码拿过来

        const response = await fetch('/login/:username', {  // fetch request to backend 
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({"username": username, "password":password}) // 因为body request 需要是一个object
        });
        if (response.ok)
        {
            localStorage.setItem("username", username);  // Store username in localStorage
            window.location.href = "home_page.html";
        }
        else
        {
        
            alert("You do not have the information.");
            alert((await response.json()).message); // 否则的话返回后端返回的消息

        }
}


async function register()
{
    let username = document.querySelector("#name").value; 
    let password = document.querySelector("#password").value; // 把密码拿过来

    const response = await fetch("/register/:username", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({"username": username, "password": password})
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