import React from 'react'
import "./Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Featured({type}) {
    const[content, setContent] = useState({});
    useEffect(()=>{
        const getRandomContent = async ()=>{
            try{
                const res = await axios.get(`/api/movies/findRandom?type=${type}`,
                {
                    headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mjk2NGJiMzI2MDQ1NzI5OTRiNDQ1ODciLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTQxMjI2MDl9.870fT95GBAf9umEsxzDWvXZB4apC8I3TejTcp8Cb9Ag"
                    },
                }
                )
                setContent(res.data)
           }catch(err){
               console.log(err);
           }
        }
        getRandomContent();
    },[type])
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>
                    {type === "movies"? "Movies": "Series"}
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
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/ddcgeqp-295da996-f10c-4419-b0f8-1f3c64b1d6ab.png/v1/fill/w_800,h_375,strp/doctor_strange_in_the_multiverse_of_madness_png_by_mintmovi3_ddcgeqp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc1IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZGNnZXFwLTI5NWRhOTk2LWYxMGMtNDQxOS1iMGY4LTFmM2M2NGIxZDZhYi5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KC-md65NLPPyhr7wOGE8ibz0VA3NCURE7sCD1HbJXss" alt="" 
            />
            <span className='descrip'>
            Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.</span>
 
            <div className='buttons'>
                <button className="play">
                    <span>
                        PLAY NOW
                    </span>
                </button>  
                <button className="more">
                    <span>MORE INFO</span>
                </button>  
            </div>
        </div>    
    </div>
  );
}
