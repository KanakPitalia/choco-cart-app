import React from "react";
import Chocolates from "./chocolates";

function ChocoList(props) {
    console.log(props)
    return (
        <>
            
            
            <div className="container" >
            <div className="row align-items-center">
                    {props.chocolist.length > 0 ?
                        
                            props.chocolist.map((chocolates, i) => {
                                return <Chocolates chocolate={chocolates} key={i} increment={props.increment} index={i} decrement={props.decrement} remove={props.remove} />
                            })
                        :
                
                        <h2 className="m-5 text-danger">Your ChocoCart is Empty!</h2>
                    }
                    
                        
                </div>
            </div>
        </>
    );

}
export default ChocoList;