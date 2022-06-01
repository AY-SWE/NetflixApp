import "./Watch.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";

function Watch() {
  return (
    <div className="watch">
      <Link to ="/">
      
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        </Link>
        <video className="video" autoPlay muted progress controls 
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"/>
    </div>
  )
}

export default Watch