import "./ListItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useState } from "react";
import { Link } from "react-router-dom";


function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
  return (
    <div 
    className="listItem"
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        <img src="https://images6.alphacoders.com/684/684831.jpg" alt=""/>
        {isHovered && (
        <>
        <video src={trailer} autoPlay muted loop />

      <div className="itemInfo">
        <div className="icons">
            <PlayArrowIcon className="icon"/>
            <AddIcon className="icon"/>
            <ThumbUpOutlinedIcon className="icon"/>
            <ThumbDownOutlinedIcon className="icon"/>
        </div>

        <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">16+</span>
            <span>2001</span>
        </div>
        <div className="descrip">
          Description Description Description Description Description Description Description Description Description
        </div>
        <div className="genre">Action</div>
      </div>  
      </> //react fragments
        )}
    </div>
    
  )
}

export default ListItem