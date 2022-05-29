import {useRef, useState} from "react"
import ListItem from "../listItem/ListItem";
import "./List.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function List({lists}) {
    const [isMoved, setIsMoved] = useState(false);
    const[slideNumber, setSlideNumber] = useState(0);       //to know whether we can click left or right 

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let dist = listRef.current.getBoundingClientRect().x - 50;
        if(direction == "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + dist}px)`;
        }
        if(direction == "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + dist}px)`;
        }
    };

    return(
        <div className = "list">
            <span className = "listTitle"> Continue to Watch
            <div className = "wrapper">
                <ArrowBackIosIcon
                className = "sliderArrow left"
                onClick = {() => handleClick("left")}
                style = {{display: !isMoved && "none"}}     //for left arrow, if not moved initially, it does not appear yet
                />
    
                <div className="container" ref={listRef}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>
                <ArrowForwardIosIcon
                className = "sliderArrow right"
                onClick = {() => handleClick("right")}
                />
            </div>
            </span>
        </div>
    )
}
export default List;