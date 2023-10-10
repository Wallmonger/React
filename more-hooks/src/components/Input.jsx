import { useRef, useState, useEffect } from 'react';

const Input = () => {

    const [count, setCount] = useState(0);
    
    const setIntervalRef = useRef();
    

    useEffect(() => {
        // Making setInterval available via ref (outside useEffect)
        setIntervalRef.current = setInterval(() => {
            setCount(prevCount => {
                return prevCount + 1;
            })
        }, 1000);

        // Clearing
        return () => {
           clearInterval(setIntervalRef.current); 
        }

    }, []);

    const stopIncrement = () => {
        clearInterval(setIntervalRef.current);
    }

    return (
        <div>   
            <h1>{count}</h1>
            <button onClick={stopIncrement} className='btn btn-outline-dark'>Stop plz</button>
        </div>
    )
}

export default Input;