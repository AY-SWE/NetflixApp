import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logOut } from "../authActions";

axios.defaults.withCredentials = false;
const api = axios.create({
    baseURL: 'http://localhost:8800/auth',
})

export const loginUser = async (user, dispatch) => {
    dispatch(loginStart());
    try{
        const res = await api.post(`/login`, user)
        console.log("SUCCESS logged in");
        dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure)
    }
};

export const logoutUser = async (dispatch) => {
    dispatch(logOut());
    const res = await api.get(`/logout`)
};