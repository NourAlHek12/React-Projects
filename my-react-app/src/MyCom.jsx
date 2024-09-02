import React, {useState} from "react";

function MyCom(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }


    return( <div>
                <input value={name} onChange={handleNameChange}></input>
                <p>Name : {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type="number"></input>
                <p>Name : {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder="Leave a comment"></textarea>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="MaterCard">MaterCard</option>
                    <option value="Visa">Visa</option>
                    <option value="CreditCard">Credit Card</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick Up" 
                            checked={shipping === "Pick Up"}
                            onChange={handleShippingChange}/>
                    Pick Up
                </label><br></br>
                <label>
                    <input type="radio" value="Delivery" 
                            checked={shipping === "Delivery"}
                            onChange={handleShippingChange}/>
                    Delivery
                </label>
                <p>Shipping : {shipping}</p>
            </div>);
}
export default MyCom