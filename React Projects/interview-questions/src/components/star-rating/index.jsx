import { useState } from "react";
import {FaStar} from 'react-icons/fa';
import './styles.css';

function StartRating({noOfStarts = 5}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleCLick(getCurrentIndex){
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }
    function handleMouseLeave(){
        setHover(rating);
    }

    return( <div className="star-rating">
                {
                    [...Array(noOfStarts)].map((_,index) =>{
                        index += 1;
                        return (
                            <FaStar id="icon" 
                                key={index}
                                className={index <= (hover || rating) ? 'active' : 'inactive'}
                                onClick={() => handleCLick(index)}
                                onMouseMove={() => handleMouseEnter(index)}
                                onMouseLeave={() =>handleMouseLeave()}
                                size={40}/>
                        );
                    })
                }
            </div>);
}
export default StartRating