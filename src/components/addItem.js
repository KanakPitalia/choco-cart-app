import React, { useState } from 'react';
function AddItem(props) {
    // let [chocolist, setChocolist] = useState(props.chocolist);
    let [name, setName] = useState("");
    let [price, setPrice] = useState(0);
    const onChangeText = (event) => {
        setName(String(event.target.value));
    }
    const onChangeNum = (event) => {
        setPrice(Number(event.target.value));
    }
    

    return (
        <>
            
            <form className="container my-3">

                <div className="form-group m-2">
                    <label htmlFor="Name">Chocolate Name</label>
                    <input type="text" className="form-control" id="Name" placeholder="Enter Chocolate Name" name="chocoName" onChange={onChangeText} />
                </div>
                <div className="form-group m-2">
                    <label htmlFor="price">Chocolate Price</label>
                    <input type="number" className="form-control" id="price" placeholder="Enter the price of the chocolate" name="chocoPrice" onChange={onChangeNum} />
                </div>

                <button type="submit" className="btn btn-primary m-2" onClick={() => { props.add(name,price) }}>Add</button>
            </form>
        </>
    );
}

export default AddItem;