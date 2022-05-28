import React from 'react'
import "./Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured() {
  return (
    <div className='featured'>
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
