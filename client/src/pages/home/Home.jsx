import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import Featured from "../../components/featured/Featured";
import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios"

axios.defaults.withCredentials = false;

const apiList = axios.create({
    baseURL: 'http://localhost:8800/api/lists',
})

// THESE ARE ALL THE REQUESTS WE`LL BE MAKING, ALL REQUESTS HAVE A
// REQUEST METHOD (like get) AND PATH . 


const Home = ({type}) => {
    const[lists, setLists] = useState([]);
    const[genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try{
                const res = await apiList.get(
                    `/findRandom${type? "?type=" + type: ""} ${genre? "genre=" + genre: ""}`,
                    {
                        headers:{
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mjk2NGJiMzI2MDQ1NzI5OTRiNDQ1ODciLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTQxMTgxMTZ9.TflgRZtzj5FPMdgp-3eTFURjlv8CTCEJ1lQWrq2nR0M"
                        },
                    }
                ); 
                setLists(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);
    return(
        <div className = "home">
            <Navbar/>
            <Featured type = {type}/>
                {lists.map((list) => (
            <List list = {list } />
        ))} 

            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    );
}

export default Home;
