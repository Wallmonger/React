import { memo } from 'react';

const Button = ({handleClick, btnColor, increment, children}) => {

    console.log(`Button ${children} loaded`);

    return <button onClick={() => handleClick(increment)} className={`btn btn-${btnColor} mt-3 me-2`}>+ {increment} %</button>
}

export default memo(Button);