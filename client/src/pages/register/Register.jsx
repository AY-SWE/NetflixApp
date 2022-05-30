import "./Register.scss";

function Register() {
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