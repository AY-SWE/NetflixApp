import "./Watch.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        <video className="video" autoPlay muted progress controls 
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"/>
    </div>
  )
}

export default Watch