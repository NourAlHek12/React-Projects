import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(c => c+1);
        setCount(c => c+1);
        setCount(c => c+1);
    }
    const reset = () =>{
        setCount(c => c = 0);
    }
    const decrement = () =>{
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    return( <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="count-button" onClick={increment}>Increment</button>
                <button className="count-button" onClick={reset}>Reset</button>
                <button className="count-button" onClick={decrement}>Decrement</button>
            </div>);
}
export default Counter