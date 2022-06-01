
import './App.scss';
import { React } from 'react';
import { Navigate ,Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Watch from "./pages/watch/Watch"

/*
    This is our application's top-level component.
    
    @author Andy Yang
*/
/*
  This is the entry-point for our application. Many different home pages
  
  @author Andy Yang
*/


const App = () => {
    const user = true;
    return(
        <Routes>
                    <Route exact path="/" element={user? <Home/>: <Navigate to="/register"/>}/>
                    <Route path="/register" element={!user? <Register/>: <Navigate to="/"/>} />
                    <Route path="/login" element={!user? <Login/>: <Navigate to="/"/>} />
                    {user && ( <>
                        <Route path="/series" element={<Home type="series"/>} />
                        <Route path="/movies" element={<Home type="movies"/>} />
                        <Route path="/watch" element={<Watch/>} />  </>
                    )}
                    
            
                </Routes>        
    )
}

export default App;
