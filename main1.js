import React, { useRef, useState } from 'react';
import './main1.css';  
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
const App = () => {
  const aboutRef = useRef(null);
  const [title, setTitle] = useState();
  const [option1 , setOptions1]=useState();
  const [option2 , setOptions2]=useState();
  const [option3 , setOptions3]=useState();
  const [option4 , setOptions4]=useState();

  const [stage , setStage]=useState();
  const { logout } = useAuth0();
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [pollData, setPollData] = useState({
    title: '',
    numOptions: 2,
    optionNames: Array.from({ length: 2 }, () => ''),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
 
    if (name === 'numOptions') {
      const newOptionNames = Array.from({ length: parseInt(value, 10) }, () => '');
      setPollData({
        ...pollData,
        [name]: value,
        optionNames: newOptionNames,
      });
    } else {
      setPollData({
        ...pollData,
        [name]: value,
      });
    }
  };

  const handleOptionNameChange = (index, newName) => {
    const newOptionNames = [...pollData.optionNames];
    newOptionNames[index] = newName;
    setPollData({
      ...pollData,
      optionNames: newOptionNames,
    });
  };

  const handleCreatePoll = () => {
 
    console.log('Creating poll with data:', pollData);
  };
  const handleSubmit =  (e) => {
    
    e.preventDefault();
     axios.post('http://localhost:3001/register',{title,stage,option1,option2,option3,option4})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  };
  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">Poll maker</a>
        <nav className="nav-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button  className="login_button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </nav>
      </header>
      <main>
        <div className="intro">
          <h1 className="main-p">People-friendly poll maker</h1>
          <p className="main-p">You need data. Online polls make data. But polls need people. 87% get more responses (from people) after</p>
          <p className="main-p" style={{ marginTop: '0vh' }}> switching to Poll maker</p>
          <button onClick={scrollToAbout}>Get Started</button>
        </div>
        <div className="about-me" ref={aboutRef}>
          <div className="about-me-text">
            <h2 >Create a poll</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title" className='title_inputs'>Title  :</label>
              <input
                type="text"
                id="title"
                name="title"
                className='inputss'
                // value={pollData.title}
                // onChange={handleInputChange}
                onChange={(e)=>setTitle(e.target.value)}
              />

              <div>
                  <div>
                    <label>Option 1 : </label>
                    <input
                      type="text"
                      className='inputss'
                      // value={pollData.optionNames[index]}
                      // onChange={(e) => handleOptionNameChange(index, e.target.value)}
                      onChange={(e)=>setOptions1(e.target.value)}

                    />
                    
                  </div>
              </div>
            
              <div>
                  <div>
                    <label>Option 2 : </label>
                    <input
                      type="text"
                      className='inputss'
                      // value={pollData.optionNames[index]}
                      // onChange={(e) => handleOptionNameChange(index, e.target.value)}
                      onChange={(e)=>setOptions2(e.target.value)}

                    />
                    
                  </div>

              </div>
           
              <div>
                  <div>
                    <label>Option 3 : </label>
                    <input
                      type="text"
                      className='inputss'
                      // value={pollData.optionNames[index]}
                      // onChange={(e) => handleOptionNameChange(index, e.target.value)}
                      onChange={(e)=>setOptions3(e.target.value)}

                    />
                    
                  </div>
              </div>
        
               
                  <div>
                    <label>Option 4 : </label>
                    <input
                      type="text"
                      className='inputss'
                      // value={pollData.optionNames[index]}
                      // onChange={(e) => handleOptionNameChange(index, e.target.value)}
                      onChange={(e)=>setOptions4(e.target.value)}

                    />
                    
                  </div>
          
              <button type="submit" className='buttons_main1' onClick={handleCreatePoll}>
                 Create Poll  
              </button>
              <button type="button" className='buttons_main1'  onClick={handleCreatePoll}>
                {/* <Link to={main2}>  Create Poll</Link> */}
                <a href='main2' className='buttons_main1' > View Poll</a>  
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default App;
