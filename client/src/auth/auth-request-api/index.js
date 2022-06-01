import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../authActions";

axios.defaults.withCredentials = false;
const api = axios.create({
    baseURL: 'http://localhost:8800/auth',
})

export const loginUser = (user, dispatch) => {
    dispatch(loginStart());
    try{
        const res = api.post(`/login`, user)
        console.log("SUCCESS logged in");
    }
    catch(err){
        dispatch(loginFailure)
    }
};