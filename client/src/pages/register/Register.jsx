import "./Register.scss";
import {useState, useRef} from "react";

function Register() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  
  const handleStart = () =>{
    setEmail(emailRef.current.value);
  }
  const handleFinish = () =>{
    setEmail(passRef.current.value);
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
            <div className="input"> st
                <input type="email" placeholder="Email address" ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
            ) : (
            <form className="input"> st
              <input type="password" placeholder="Password" ref={passRef}/>
              <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
        )}
        </div>
    </div>
    
  )
}

export default Register