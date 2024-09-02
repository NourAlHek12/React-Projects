import React, {useState} from "react";

function Food(){

    const [foods, setFoods] = useState(["orange","banana","apple"]);

    function handleAddFood(){

        const newFood = document.getElementById("inputFood").value;
        document.getElementById("inputFood").value = "";
        setFoods(foods => [...foods, newFood]);
        
    }
    function handleRemoveFood(index){

        setFoods(foods.filter((_,i) => i !== index));
    }

    return( <div>
                <h2>Food List</h2>
                <ul>
                    {foods.map((food,index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" placeholder="Enter food name" id="inputFood"></input>
                <button onClick={handleAddFood}>Add Food</button>
            </div>);
}
export default Food