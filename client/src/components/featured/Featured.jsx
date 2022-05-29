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
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>

        <div className='info'>
            <img 
            width = "100%"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""
            />
            <span className='descrip'>
                Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description
            </span>
 
            <div className='buttons'>
                <button className="play">
                    <PlayArrowIcon/>
                    <span>
                        Play
                    </span>
                </button>  
                <button className="more">
                    <InfoOutlinedIcon/>
                    <span>Info</span>
                </button>  
            </div>
        </div>    
    </div>
  );
}
