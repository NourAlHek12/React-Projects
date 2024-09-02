import React, {useState} from "react";

function Car(){

    const [car, setCar] = useState({year: 2025, 
                                    model:"Mustang",
                                    make:"Ford"});

    function handleYearChange(event){
        setCar(c => ({...c, year : event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model : event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make : event.target.value}));
    }

    return( <div>
                <p>Your favorite car is : {car.year} {car.make} {car.model}</p>
                <input value={car.year} type="number" onChange={handleYearChange}></input>
                <input value={car.make} type="text" onChange={handleMakeChange}></input>
                <input value={car.model} type="text" onChange={handleModelChange}></input>
            </div>);
}
export default Car