import "./ListItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

function ListItem() {
  return (
    <div className="listItem">
        <img src="https://images6.alphacoders.com/684/684831.jpg" alt=""/>
    

      <div className="itemInfo">
        <div className="icons">
            <PlayArrowIcon/>
            <AddIcon/>
            <ThumbUpOutlinedIcon/>
            <ThumbDownOutlinedIcon/>
        </div>
      </div>

    </div>
  )
}

export default ListItem