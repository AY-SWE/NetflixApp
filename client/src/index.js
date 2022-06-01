import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Router} from 'react-router-dom'
import App from './App';
import {createMemoryHistory} from 'history';

//import { AuthContextProvider } from './auth';
/*
  This is the entry-point for our application. Notice that we
  inject our store into all the components in our application.
  
  @author Andy Yang
*/

const history = createMemoryHistory();

ReactDOM.render(
  <React.StrictMode>  
      <BrowserRouter location={history.location} navigator={history}>
        
        <App />
      </BrowserRouter>    

  </React.StrictMode>,
  document.getElementById('root')
);
//BrowserRouter is what solved the problem react is not rendering to /movies, /series when suppose to 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals