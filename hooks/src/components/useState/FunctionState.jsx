import { useState } from 'react';

const FunctionState = () => {

    // [varName, setStateFunc]
    const [counter, setCounter] = useState(0);

    
    return (
        <div>
            <p>Function State: {counter}</p>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)} className='btn btn-secondary'>Increment function state</button>
        </div>
    )
}

export default FunctionState;