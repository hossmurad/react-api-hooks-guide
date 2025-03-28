import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(`Hello Bangladesh ${counter}`);
    }, [counter]);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>UseEffect Example (Check Console)</button>
        </div>
    );
};

export default UseEffect;
