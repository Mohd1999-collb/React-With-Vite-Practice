import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <br />
            <br />
            <button onClick={() => count > 0 ? setCount(count - 1) : ''}>Decrease</button>
            <br />
            <br />
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Counter