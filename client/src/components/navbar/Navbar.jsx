import {useState} from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0? false: true);
        return () => (window.onscroll = null);
    };

    return(
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt=""/>
                    
                    <span>Homepage</span>
                    <span>Movies</span>
                    <span>TV Shows</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
            

                <div className="right">
                    <SearchIcon className = "icons"/>
                    <NotificationsIcon className = "icons"/>
                    <img src="https://www.w3schools.com/images/lamp.jpg" alt=""/>
                    <ArrowDropDownIcon className = "icons"/>
                </div>
            </div>
        </div>
    )

}

export default Navbar;