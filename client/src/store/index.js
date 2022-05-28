// import { createContext, useContext, useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import api from './store-request-api'
// import AuthContext from '../auth'

// /*
//     This is our global data store. Note that it uses the Flux design pattern,
//     which makes use of things like actions and reducers. 
    
//     @author Andy Yang
// */

// // THIS IS THE CONTEXT WE'LL USE TO SHARE OUR STORE
// export const GlobalStoreContext = createContext({});
// console.log("create GlobalStoreContext");

// // THESE ARE ALL THE TYPES OF UPDATES TO OUR GLOBAL
// // DATA STORE STATE THAT CAN BE PROCESSED
// export const GlobalStoreActionType = {
//     CHANGE_LIST_NAME: "CHANGE_LIST_NAME",
// }

// // WITH THIS WE'RE MAKING OUR GLOBAL DATA STORE
// // AVAILABLE TO THE REST OF THE APPLICATION
// function GlobalStoreContextProvider(props) {
//     // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
//     const [store, setStore] = useState({
//     });
//     const history = useHistory();

//     console.log("inside useGlobalStore");

//     // SINCE WE'VE WRAPPED THE STORE IN THE AUTH CONTEXT WE CAN ACCESS THE USER HERE
//     const { auth } = useContext(AuthContext);
//     console.log("auth: " + auth);

//     // HERE'S THE DATA STORE'S REDUCER, IT MUST
//     // HANDLE EVERY TYPE OF STATE CHANGE
//     const storeReducer = (action) => {
//         const { type, payload } = action;
//         switch (type) {

//         }
//     }
// }