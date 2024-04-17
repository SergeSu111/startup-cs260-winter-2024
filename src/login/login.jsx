import React, {useState} from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";


// Login component

function Login({userName,onAuthChange})
{
    const [username, setUsername] = useState(userName);
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
            onAuthChange(username);
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
        <>
        <main className = "main">
            {/* <!-- greeting --> */}
            <h1 className = "h1_main">Welcome to Web Killer</h1>
            <p className = "describe">Login to navigate the journey</p>
            <div className = "form">
            <label htmlFor="name">Username</label>
            <input type="text" id = "name" placeholder="Your name here" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
            <br />
            <label htmlFor="passowrd">Pssword</label>
            <input type="text" id = "password" placeholder = "Your password here" value = {password} onChange = {(e) => setPssword(e.target.value)}/>
            <div>
                <button onClick = {logIn} id = "login">Login</button>
                <button onClick = {regitser} id = "my_register">Resgiter</button>
            </div>
        </div>
        </main>
         <hr />
         <footer className = "footer">
             <div className ="text-reset">Junhao Su</div>
             <a href="https://github.com/SergeSu111/startup-cs260-winter-2024">My github repository</a>
         </footer>
        </>
        
    );
}

export default Login;