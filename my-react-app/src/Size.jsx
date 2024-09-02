import { useEffect, useState } from "react";

function Size(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, seHeight] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener("resize",handleResize);
        console.log("Event Listener added");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    },[]);

    useEffect(()=>{
        document.title = `Size ${width} * ${height}`
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        seHeight(window.innerHeight);
    }
    return( <>
                <p>Window Width: {width}px</p>
                <p>Window Height: {height}px</p>
            </>)
}
export default Size