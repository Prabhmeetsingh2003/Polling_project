import React,{useState} from 'react';
import './register.css';

function Register() {
  const [user,setUser]=useState({
    name:"",email:"",password:""
  })
  let name,value;
  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({... user,[name]:value})
  }
  return (
    <>
    
      <div className='bg'>
        <h1 className="heading">Bon Voyage</h1>
        <i className="fa-solid fa-plate-wheat fa-2xl" style={{ color: '#ffffff' }}></i>

        <nav className="navbar">
          <ul>
            <li className="list"><a className="atag1" href="" >Home</a></li>
            <li className="list"><a className="atag1" href="">About us</a></li>
            <li className="list"><a className="atag1" href="">Our products</a></li>
            <li className="list"><a className="atag1" href="#">Store locator</a></li>
            <li className="list"><a className="atag1" href="#">Contact us</a></li>
          </ul>
        </nav>
        <br />

        <div className="login-box">
          <h2 className="login-heading">Register</h2>
          <div></div>
          <input type="text" name="name" value={user.name} onChange={handleInputs} placeholder="Username" className="input1" />
          <input type="text" name="email"  value={user.email} onChange={handleInputs} placeholder="Email" className="input1" />
          <input type="password" name="password"  value={user.password} onChange={handleInputs} placeholder="Password" className="input1" />
          <input type="password" name="password"  value={user.password} onChange={handleInputs} placeholder="Confirm Password" className="input1" />
          <input type="submit" value="Register" className="submit" />
        
          <br />
        </div>
      </div>
    </>
  );
}

export default Register;
