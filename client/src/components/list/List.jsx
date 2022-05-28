import {useRef, useState} from "react"
import ListItem from "../listItem/ListItem";
import "./List.css"
import {ArrowBackIosOutlined, ArrowForwardTosOutlined} from "@material-ui/icons";

function List({lists}) {
    const [isMoved, setIsMoved] = useState(false);
    const[slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let dist = listRef.current.getBoundingClientRect().x - 50;
        if(direction == "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction == "right" && slideNumber < 5{
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return(
        <div className = "list">
            <span className = "listTitle"> {listRef.title}
            <div className = "wrapper">
                <ArrowBackIosOutlined
                className = "sliderArrow left"
                onClick = {() => handleClick("left")}
                style = {{display: !isMoved && "none"}}
                />

                <div className="container" ref={listRef}>

                </div>
            </div>
            </span>
        </div>
    )
}
export default List;