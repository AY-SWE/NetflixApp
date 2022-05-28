import Navbar from "../../components/navbar/Navbar";
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
            <img 
            width = "100%"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
            
        </div>
    );
}

export default Home;


/* <Featured type = {type}/>
                {lists.map((list) => (
            <List list = {list} />
        ))} */