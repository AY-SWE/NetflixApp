import "./Watch.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        <video className="video" autoPlay progress controls 
        src="https://vod-progressive.akamaized.net/exp=1653874161~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1252%2F19%2F481264773%2F2152867616.mp4~hmac=1e7bcd9673aa9d90db53cea7e1e40cabaf9ef18e4978b679429ade467ba842a6/vimeo-prod-skyfire-std-us/01/1252/19/481264773/2152867616.mp4?filename=RHDHV+Digital+Brand+Element.mp4"/>
    </div>
  )
}

export default Watch