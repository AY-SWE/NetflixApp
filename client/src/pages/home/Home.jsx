import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios"
import { AcUnit } from "@material-ui/icons";

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
            <Featured type = {type}/>
                {lists.map((list) => (
            <List list = {list} />
        ))}
        </div>
    );
}

export default Home;