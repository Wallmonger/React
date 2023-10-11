import { useState, forwardRef, useImperativeHandle, useRef } from 'react';

const NewInput = forwardRef((props, ref) => {

    const inputRef = useRef();

    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => (
        {
            focus: (val) => {
                // If prevCount == 4
                if (count === 4) {
                    const colors = ['red', 'blue', 'orange', 'green', 'pink','purple', 'yellow'];

                    const style = `4px solid ${colors[val]}`;

                    inputRef.current.style.border = style;
                }
            },

            countMax: () => {
                if(count < 5)
                    setCount(count + 1);
            }
        }
    ));


    return (
        <div>
            <h1>{count}</h1>
            <input type="text" ref={inputRef}/>
        </div>
    )
});


export default NewInput;