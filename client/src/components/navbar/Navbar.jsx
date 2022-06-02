import {useState, useContext} from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AuthContext } from "../../auth/authContext";
import { logoutUser } from "../../auth/auth-request-api";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {isFetching, dispatch} = useContext(AuthContext);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0? false: true);
        return () => (window.onscroll = null);
    };

    const handleLogout = (e) => {
        e.preventDefault(); //dont wannt refresh page
        logoutUser(dispatch);
      }

    return(
        <div className={isScrolled? "navbar scrolled": "navbar"}>     
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt=""/>
                    <Link to = "/" className="link">
                        
                    <span>Homepage</span>
                    </Link>
                   
                    <Link to = "/movies" className="link">
                        
                        <span>Movies</span>
                    </Link>
                    <Link to = "/series" className="link">
                        <span>TV Shows</span>
                    </Link>
                    
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
            

                <div className="right">
                    <SearchIcon className = "icons"/>
                    <span className = "icons">AY</span>
                    <NotificationsIcon className = "icons"/>
                    <img src="https://fangirlish.com/wp-content/uploads/2022/05/Anya-Smirk-e1652547175479.jpg" alt=""/>
                    <div className="profile">
                        <ArrowDropDownIcon className = "icons"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={handleLogout} disabled={isFetching}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar;