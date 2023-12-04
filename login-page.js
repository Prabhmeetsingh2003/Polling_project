import React from 'react'
import './login-page.css';
function login() {
    const handleLogin = (event) => {
        event.preventDefault();
        const usernameInput = document.getElementById("input1").value;
        const passwordInput = document.getElementById("input2").value;
    
        if (usernameInput === passwordInput) {
          window.location.href = "https://learn.thecodehelp.in/s/courses/64b15d8de4b01a19aa722124/take"; // Redirect to another page on successful login
        } else {
          alert("Username and password must be the same.");
        }
      };
    
      return (
        <>
    
    
    
        <div className='bg'>
          <h1 id="heading">Bon Voyage</h1>
          <i className="fa-solid fa-plate-wheat fa-2xl" style={{ color: '#ffffff' }}></i>
    
          <nav id="navbar">
            <ul>
              <li id="list"><a id="atag1" href="" >Home</a></li>
              <li id="list"><a id="atag1" href="">About us</a></li>
              <li id="list"><a id="atag1" href="">Our products</a></li>
              <li id="list"><a id="atag1" href="#">Store locator</a></li>
              <li id="list"><a id="atag1" href="#">Contact us</a></li>
            </ul>
          </nav>
          <br />
          <br />
          <div id="login-box">
            <h2 id="login-heading">Login</h2>
            <input type="text" placeholder="Username" id="input1" />
            <input type="password" placeholder="Password" id="input2" />
            <input id="checkbox1" type="checkbox" />
            <p id="p1">Remember me</p>
            <p id="p2">Forgot password?</p>
            <br />
            <input type="submit" value="Submit" id="submit"  onClick={handleLogin} />
            <br />
            <p id="register">Don't have an account? <b id="bold1" >
              
              {/* <a href='./Register'> Register</a> */}
            <a href='/Register'> Register</a>  
              
              </b></p>
          </div>
        </div>
        </>
      );
      }
export default login;