import React, { useRef } from 'react';
import './main.css';  
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
 

const App = () => {
  const aboutRef = useRef(null);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  {!isAuthenticated && (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  )}
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">Poll maker</a>
        <nav className="nav-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          {!isAuthenticated && (
            <button className="login_button" onClick={() => loginWithRedirect()}>Log In</button>
          )}
          {isAuthenticated && (
            <>
 
              <button className="login_button"  onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
              <main1/>
            </>
          )}
        </nav>
      </header>
      <main>
        <div className="intro">
          <h1 className="main-p">People-friendly poll maker</h1>
          <p className="main-p">You need data. Online polls make data. But polls need people. 87% get more responses (from people) after</p>
          <p className="main-p" style={{marginTop: '0vh'}}> switching to Poll maker</p>
          <button onClick={scrollToAbout}>{isAuthenticated ?   <Link className='create-polll' to="/main1">
                Create Poll
              </Link> : "Get Started"}</button>
        </div>
        <div className="about-me" ref={aboutRef}>
          <div className="about-me-text">
            <h2>About Us</h2>
            <p>Welcome to Poll maker – the hub for hassle-free polling! At [Your Poll Maker Website Name], we're dedicated to simplifying the poll creation process. Our user-friendly interface ensures anyone can craft polls effortlessly. Enjoy unparalleled customization, real-time analytics, and responsive design on any device. We prioritize your privacy with top-notch security measures. Count on us for continuous innovation and prompt customer support. Join [Your Poll Maker Website Name] today and transform opinions into actionable insights. Your voice matters, and we're here to make it heard. Choose simplicity, choose [Your Poll Maker Website Name].</p>
          </div>
          <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="me" />
        </div>
      </main>
      <footer className="footer">
        <div className="copy">&copy; 2022 Developer</div>
        <div className="bottom-links">
          <div className="links">
            <span>More Info</span>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="links">
            <span>Social Links</span>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;