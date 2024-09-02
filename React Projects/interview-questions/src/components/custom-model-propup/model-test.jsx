import { useState } from "react";
import Model from "./model";

export default function ModelTest(){

    const [showModelPopup, setShowModelPopup] = useState();

    function handleToggleModalPropup(){
        setShowModelPopup(!showModelPopup);
    }

    function onClose(){
        setShowModelPopup(false);
    }

    return <div>
        <button onClick={handleToggleModalPropup}>Open Model Popup</button>
        {
            showModelPopup && <Model 
            header={<h1>Customized Header</h1>}
            footer={<h1>Customized Footer</h1>}
            onClose={onClose}
            body={<div>Customized body</div>}/>
        }
    </div>
}