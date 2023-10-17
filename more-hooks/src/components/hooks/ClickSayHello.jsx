import { useState, useEffect } from 'react';
import useUpdateDocTitle from './useUpdateDocTitle';

const ClickSayHello = () => {

    const [text, setText] = useState(''); 
    const [isTrue, setIsTrue] = useState(true);

    // Making the custom hook working by changing boolean value instead of the same text
    useEffect(() => {
        if (isTrue)
            setText("AAAAAAAAGH")
        else
            setText("GLGLGLGLGLG")

    }, [isTrue])
    
    // Custom hook (can be called only in react function or custom hook)
    useUpdateDocTitle(text);

    return (
        <button onClick={() => setIsTrue(!isTrue)}>Click</button>
    )
}

export default ClickSayHello;