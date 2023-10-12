import { useState, useEffect, useLayoutEffect } from 'react';

const Layout = () => {
    
    const [count, setCount] = useState(0);
    
    const consoleStyle = (content, color) => {
        console.log(`%c ${content}`, `color: ${color}; font-weight: 900; font-size: 14px`)
    }

    useEffect(() => {
        consoleStyle('useEffect1', 'black');
    }, [count]);

    useLayoutEffect(() => {
        consoleStyle('useLayoutEffect', 'blue');
    }, [count]);

    consoleStyle('Render', 'black');
    

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Layout;