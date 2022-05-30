import "./ListItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useState } from "react";


function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://vod-progressive.akamaized.net/exp=1653874161~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1252%2F19%2F481264773%2F2152867616.mp4~hmac=1e7bcd9673aa9d90db53cea7e1e40cabaf9ef18e4978b679429ade467ba842a6/vimeo-prod-skyfire-std-us/01/1252/19/481264773/2152867616.mp4?filename=RHDHV+Digital+Brand+Element.mp4";
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
        <video src={trailer} autoPlay ={true} loop />

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