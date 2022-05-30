import React from 'react'
import "./Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>
                    {type === "movie"? "Movies": "Series"}
                </span>
                <select name='genre' id='genre'>
                    <option>Genre</option>
                    <option value="anime">Anime</option>
                    <option value="adventure">Adventure</option>
                    <option value="crime">Crime</option>
                    <option value="comedy">Comedy</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img 
            width = "100%"
            src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_62/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1651559287/Screen_Shot_2022-05-03_at_12.29.29_AM_x1qnwa" alt=""/>

        <div className='info'>
            <img 
            width = "100%"
            
            src="https://images8.alphacoders.com/103/1030996.png" alt="" 
            />
            <span className='descrip'>
                Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description
            </span>
 
            <div className='buttons'>
                <button className="play">
                    <span>
                        PLAY NOW
                    </span>
                </button>  
                <button className="more">
                    <span>INFO</span>
                </button>  
            </div>
        </div>    
    </div>
  );
}
