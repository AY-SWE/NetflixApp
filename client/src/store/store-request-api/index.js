// /*
//     This is our http api, which we use to send requests to
//     our back-end API. Note we`re using the Axios library
//     for doing this, which is an easy to use AJAX-based
//     library. We could (and maybe should) use Fetch, which
//     is a native (to browsers) standard, but Axios is easier
//     to use when sending JSON back and forth and it`s a Promise-
//     based API which helps a lot with asynchronous communication.
    
//     @author Andy Yang
// */

// import axios from 'axios'
// axios.defaults.withCredentials = true;
// const apiUser = axios.create({
//     baseURL: 'http://localhost:8800/api/users',
// })
// const apiMovie = axios.create({
//     baseURL: 'http://localhost:8800/api/movies',
// })
// const apiList = axios.create({
//     baseURL: 'http://localhost:8800/api/lists',
// })

// // THESE ARE ALL THE REQUESTS WE`LL BE MAKING, ALL REQUESTS HAVE A
// // REQUEST METHOD (like get) AND PATH . 
// export const getRandomList = () => apiList.get("/")


// const apis = {
//     getRandomList
// }

// export default apis