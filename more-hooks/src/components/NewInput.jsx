import { useState, forwardRef } from 'react';

const NewInput = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    console.log(props.name, ref);

    return (
        <div>
            <h1>{count}</h1>
            <input type="text" ref={ref}/>
        </div>
    )
});


export default NewInput;