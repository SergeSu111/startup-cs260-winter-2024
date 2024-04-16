import React, {useState} from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";


// Login component

function Login()
{
    const [username, setUsername] = useState("");
    const [password, setPssword] = useState("");

    async function logIn()
    {
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

    async function regitser()
    {
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

    return (
        <div class = "form">
            <label for="name">Username</label>
            <input type="text" id = "name" placeholder="Your name here" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
            <br />
            <label htmlFor="passowrd">Pssword</label>
            <input type="text" id = "password" placeholder = "Your password here" value = {password} onChange = {(e) => setPssword(e.target.value)}/>
            <div>
                <button onClick = {logIn} id = "login">Login</button>
                <button onClick = {regitser} id = "my_register">Resgiter</button>
            </div>
        </div>
    );
}

export default Login;