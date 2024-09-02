import React, {useState,useEffect,useRef} from "react";

function Ref(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Render");
    })

    function handlClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handlClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handlClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            <button onClick={handlClick1}>Click Me</button>
            <input ref={inputRef1}></input>
            <button onClick={handlClick2}>Click Me</button>
            <input ref={inputRef2}></input>
            <button onClick={handlClick3}>Click Me</button>
            <input ref={inputRef3}></input>
        </div>
    );
}
export default Ref