import { useState, useEffect } from 'react';
import useUpdateDocTitle from './useUpdateDocTitle';

const ClickSayHello = () => {

    const [text, setText] = useState(''); 

    useUpdateDocTitle(text);

    return (
        <button onClick={() => setText("Hello world")}>Click</button>
    )
}

export default ClickSayHello;