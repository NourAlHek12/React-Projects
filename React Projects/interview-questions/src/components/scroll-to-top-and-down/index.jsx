import { useRef } from "react";
import useFetch from "../use-fetch";


export default function ScrollToTopAndButtom(){

    const {data, error, pending} = useFetch("https://dummyjson.com/products?limit=100",{});

    const bottomRef = useRef(null);

    function handleSrollToTop(){
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth",
        });
    }
    function handleSrollToBottom(){
        bottomRef.current.scrollIntoView({ behavior: "smooth"});
    }

    

    if(error){
        return <h1>Error Occured ! Please try again</h1>
    }

    if(pending){
        return <h1>Loading ! Please Wait</h1>
    }
    return <div>
        <h1>Scroll To Top ANd Buttom Feature</h1>
        <h3>This is the top section</h3>
        <button onClick={handleSrollToBottom}>Scroll To Bottom</button>
        <ul style={{listStyle: 'none'}}>
            {
                data && data.products && data.products.length ?
                data.products.map((item) => <li>{item.title}</li>)
                :null
            }
        </ul>
        <button onClick={handleSrollToTop}>Scroll To Top</button>
        <div ref={bottomRef}></div>
        <h3>This the bottom of the page</h3>
    </div>
}