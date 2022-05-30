// import './App.scss';
// import { React } from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import Home from "./pages/home/Home"
// import Register from "./pages/register/Register"
// import Login from "./pages/login/Login"
// import Watch from "./pages/watch/Watch"

// /*
//     This is our application's top-level component.
    
//     @author Andy Yang
// */
// /*
//   This is the entry-point for our application. Many different home pages
  
//   @author Andy Yang
// */


// const App = () => {
//     const user = true;
//     return(
//         <BrowserRouter>
//             <Switch>
//             <Route exact path="/"/>
//                 {user? <Home/>: <Redirect to="/register"/>}
//              <Route/>
             
//             <Route path="/register"/>
//                 {!user? <Register/>: <Redirect to="/"/>}
//              <Route/>

//              <Route path="/login"/>
//                  {!user? <Login/>: <Redirect to="/"/>}
//              <Route/>

//              <Route path="/movies"/>
//                 <Home type = "movies"/>
//              <Route/>

//              <Route path="/series"/>
//                 <Home type = "series"/>
//              <Route/>

//              <Route path="/watch"/>
//                 <Watch/>
//              <Route/>
           
                                   
//             </Switch>
//         </BrowserRouter>
        
//     )
// }

// export default App;


import './App.scss';
import { React } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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
        <Login/>
        
    )
}

export default App;
