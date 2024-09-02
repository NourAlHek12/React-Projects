import { useEffect, useState } from "react";

function Effect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count ${count} ${color}`;
    },[count, color])

    function addCount(){
        setCount(count => count+1);
    }
    function subtractCount(){
        setCount(count => count -1);
    }
    function changeColor(){
        setColor(color => color ==="green" ? "red" : "green");
    }
    return( <>
                <h3 style={{color}}>Count: {count}</h3>
                <button onClick={addCount}>Add</button>
                <button onClick={subtractCount}>Sub</button>
                <button onClick={changeColor}>Change Color</button>
            </>)
}
export default Effect