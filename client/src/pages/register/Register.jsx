import "./Register.scss";
import {useState, useRef} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

axios.defaults.withCredentials = false;

const api = axios.create({
    baseURL: 'http://localhost:8800/auth',
})

function Register() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[username, setUsername] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const usernameRef = useRef();
  const navigate = useNavigate();
  
  const handleStart = () =>{
    setEmail(emailRef.current.value);
  }
  const handleFinish = async (e) =>{
    e.preventDefault();
    setPassword(passRef.current.value);
    setUsername(usernameRef.current.value);
    try{
      await api.post("/register", {email, username,password});
      navigate("/login")
    }
    catch(err){

    }
  }

  
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
              <img  className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
              <button className="loginButton">Sign in</button>
            </div>
        </div>

        <div className="container">
            <h1>Unlimited films, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <p>Ready to watch? Enter your email to create orart paid membership</p>
            
            {!email ? (
            <div className="input"> 
                <input type="email" placeholder="Email address" ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
            ) : (
            <form className="input"> 
            <input type="username" placeholder="Username" ref={usernameRef}/>
              <input type="password" placeholder="Password" ref={passRef}/>
              <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
        )}
        </div>
    </div>
    
  )
}

export default Register