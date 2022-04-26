import React from "react";

function Footer(props) {
    console.log(props)
    return (
        <div className="row fixed-bottom" >

            <button className="btn btn-danger col-2" onClick={()=>{props.reset()} }>Reset</button>

            <div className="col-8 btn btn-secondary">
            <p className="m-auto">₹{props.totalamount}</p>
            </div>

            <button className="btn btn-primary col-2">Pay Now</button>

        </div>
    );
}

export default Footer;