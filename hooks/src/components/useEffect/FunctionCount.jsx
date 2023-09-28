import {useState, useEffect} from 'react';

function FunctionCount() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            document.title = `You clicked ${count} times`;
        }, 5000);
    })



    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}className='btn btn-primary w-25'>Set (F) count</button>
        </div>
    )
}

export default FunctionCount;