import {ArrowDropDown, Notifications, Search} from "material-ui/icons";
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg">
                    </img>
                </div>
                <span>Homepage</span>
                <span>Movies</span>
                <span>TV Shows</span>
                <span>New and Popular</span>
                <span>My list</span>
                
            </div>

            <div className="right">
                <SearchIcon className = "icons"/>
                <NotificationsIcon className = "icons"/>
                <img src="https://www.google.com/search?q=anime+anya+smirk&tbm=isch&ved=2ahUKEwi7kdrbmYH4AhWto3IEHYC4BYQQ2-cCegQIABAA&oq=anime+anya+smirk&gs_lcp=CgNpbWcQAzoGCAAQHhAIOgYIABAKEBhQhQNYixZglhloAXAAeACAAT-IAc8IkgECMjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=_4-RYvuVB63HytMPgPGWoAg&bih=746&biw=1536&rlz=1C1UEAD_enUS1006US1006#imgrc=IC5ZiN1d4dNEKM">
                    </img>
                <ArrowDropDownIcon className = "icons"/>
            </div>
        </div>
    )

}