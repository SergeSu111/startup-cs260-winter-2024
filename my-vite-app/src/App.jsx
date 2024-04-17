import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './login/login'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');



  return (
    <BrowserRouter>
    <div>
    <header className = "header">
    <div>
        {/* <!-- navigate part --> */}
        <nav>
            <div className = "title">
                <div className = "small_title"><NavLink className="light" to = "/">Web<img src="images\light.png"
                            alt="light" /> Killer</NavLink>
                </div>
            </div>
            <div>
                <menu>
                    <li className = "li"><NavLink to = "homePage">HOME PAGE</NavLink></li>
                    <li className = "li"><a href="category.html">CATEGORY</a></li>
                    <li className = "li"><a href="suggestion.html">SUGGESTIONS</a></li>
                </menu>
                <hr />
           </div>
        </nav>
    </div>
</header> 
    </div>
    
    <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                onAuthChange={(userName) => {
                  setUserName(userName);
                }}
              />
            }
            exact
          />
  </Routes>
  </BrowserRouter>


  )
}

export default App
