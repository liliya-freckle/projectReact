import React, { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    return <button onClick={handleClick}>{count}</button>;
}

export default Counter