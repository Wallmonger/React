import { useState, useRef, useLayoutEffect } from 'react';
import Content from './Content';

const Box = () => {

    const [height, setHeight] = useState(100);
    const boxRef = useRef(null);
    const timeRef = useRef(0);

    // useEffect is trigger after render, causing screen issues
    // useLayoutEffect is trigger before
    useLayoutEffect(() => {
        if (boxRef.current.offsetHeight < 150) {
            setHeight(height + 100);
            console.log(`Waiting : ${performance.now() - timeRef.current}`);
        }
    }, [height]);

    // Performance test
    timeRef.current = performance.now();


    const boxStyle = {
        width: '400px',
        height: `${height}px`,
        margin: '0 auto',
        backgroundColor: height > 100 ? 'red' : 'blue',
        borderRadius: '5px'
    }

    return (
        <div style={boxStyle} ref={boxRef}>
            {`Actual height : ${height}`}
            <hr />
            <Content />
        </div>
    )
}

export default Box;