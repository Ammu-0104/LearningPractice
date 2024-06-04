import React, { useState } from 'react';

const Ex1 = () => {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
    };

    const handleMinus = () => {
       
            setCount(count - 1);
        
    };
    const handleReset=()=>{
        setCount(count);

    }

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={handlePlus}>Plus</button>
            <button onClick={handleMinus}>Minus</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Ex1;
