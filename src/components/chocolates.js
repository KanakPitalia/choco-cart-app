import React from "react";

function Chocolates(props) {
    console.log(props)
    
    return (
        // <div className="container">
        <div className="col-md-2 justify-content-center m-2">
            <div className="border border-dark rounded " style={{ width: "fit-content", padding: "20px", margin: "auto" }}>
                <h3 style={{ alignItems: "center" }}>{props.chocolate.name} <span className="badge bg-secondary">₹{props.chocolate.price}</span> </h3>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger" onClick={()=>{props.decrement(props.index)}}>-</button>
                    <button type="button" className="btn btn-warning">{props.chocolate.quantity}</button>
                    <button type="button" className="btn btn-success" onClick={() => {
                        props.increment(props.index);
                    }}>+</button>
                </div>
                <h3>₹{props.chocolate.quantity * props.chocolate.price} </h3>
                <button className="btn btn-danger" onClick={() => {props.remove(props.index) }}>Remove</button>
            </div>
        </div>
        // </div>
    );
}
export default Chocolates;