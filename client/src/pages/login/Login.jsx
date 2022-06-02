import "./Login.scss";
import {useState, useRef, useContext} from "react";
import { AuthContext } from "../../auth/authContext";
import {loginUser} from "../../auth/auth-request-api"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault(); //dont wannt refresh page
    loginUser({email,password}, dispatch);
  }
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
              <img  className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
              
            </div>
        </div>

        <div className="container">
            <form>
              <h1>Sign In</h1>
              <input type="email" placeholder="Email or phone number" onChange={(e)=>setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
              <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Sign In</button>
              <span>New to Netflix? <b>Sign up now.</b></span>
              <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b></small>
            </form>
        </div>
    </div>
    
  )
}

export default Login