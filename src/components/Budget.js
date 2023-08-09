import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    const setBudget = (amount) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: amount,
        });
    };


    

    return (
        <div className={`alert alert-secondary`}>
        <span>Budget: {currency}
        
        <input
        required='required'
        type='number'
        id='budget'
        value={budget}
        style={{ marginLeft: '2rem' , size: 10}}
        onChange={(event) => setBudget(event.target.value)}>
        </input>
        </span>
        </div>
    );
};

export default Budget;