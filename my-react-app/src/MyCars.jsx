import React, {useState} from "react";

function MyCars(){

    const [cars, setCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState("");
    const [carMake, setCarMake] = useState("");

    function handleAddCar(){

        const newCar = {year : carYear, make: carMake, model: carModel};
        setCar( car => [...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setCar(cars => cars.filter((_,i) => i !== index));

    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }
    return( <div>
                <h2>List Of Car Objects</h2>
                <ul>
                    {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.model} {car.make}
                    </li>)} 
                    
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange}/><br/>
                <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br/>
                <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car make"/><br/>
                <button onClick={handleAddCar}>Add Car</button>
            </div>);
}
export default MyCars