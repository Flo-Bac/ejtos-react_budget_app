import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';



const Budget = () => {
    //const { budget } = useContext(AppContext);
    const [budget, setBudget]  = useState(2000);

    if(budget > 20000) {
        alert("The value cannot exceed 20'000");
        setBudget(20000)
        return;
    }

    return (
        <div className={`alert alert-secondary`}>
        <span>Budget:
        
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