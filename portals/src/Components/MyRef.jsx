import { forwardRef } from 'react';

const MyRef = forwardRef((props, ref) => {

    console.log(props);
    console.log(ref);

    return (
        <div>
            <input ref={ref} type="text"/>
        </div>
    )
})


export default MyRef;