import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const Currency = () => {
    const{dispatch} = useContext(AppContext);
    const setCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div className= "alert alert-secondary" style={{ marginLeft: '2rem', backgroundColor:"#93E499"}}>
             <label for="Currency" style={{color: "white"}}>Currency</label>
             <select name="Currency" id="Currency" className="custom-select" style={{backgroundColor:"#93E499"}} onChange={(event) => setCurrency(event.target.value)}>
                <option value="£">£ Pound</option>
                <option value="$"> $ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>

        </div>

        
    );
}

export default Currency;
