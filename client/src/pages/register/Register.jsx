import "./Register.scss";

function Register() {
  return (
    <div className="register">
        <div className="top">
            <img src="" alt="" className="logo" />
            <button className="loginButton">Sign in</button>
        </div>

        <div className="container">
            <h1>Unlimited films, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <div className="input">
                <input type="email" className="type" placeholder="Email address"/>
                <button className="registerButton">TRY IT NOW</button>
            </div>
            <p>Ready to watch? Enter your email to create or start paid membership</p>
        </div>
    </div>
    
  )
}

export default Register