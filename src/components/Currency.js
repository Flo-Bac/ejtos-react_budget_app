import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';



const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const setCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    return (
        <div className= "alert alert-secondary" style={{ marginLeft: '2rem' }, {backgroundColor:"#93E499"}}>
             <label for="Currency" style={{color: "white"}}>Currency</label>
             <select name="Currency" className="custom-select" style={{backgroundColor:"#93E499"}, {fontcolor:"white"}} id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                <option defaultValue>Choose...</option>
                <option value="$ Dollar" name="$ Dollar"> $ Dollar</option>
                <option value="£ Pound" name="£ Pound">£ Pound</option>
                <option value="€ Euro" name="€ Euro">€ Euro</option>
                <option value="₹ Ruppee" name="₹ Ruppee">₹ Ruppee</option>
            </select>

        </div>

        
    );
}

export default Currency;
