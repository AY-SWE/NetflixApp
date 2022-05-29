import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import Featured from "../../components/featured/Featured";
import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios"

const Home = ({type}) => {
    const[lists, setLists] = useState([]);
    const[genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try{
                const res = await axios.get(
                    `lists${type? "?type=" + type: ""} ${genre? "genre=" + genre: ""}`,
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
            <Featured type="movie"/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    );
}

export default Home;


/* <Featured type = {type}/>
                {lists.map((list) => (
            <List list = {list} />
        ))} */