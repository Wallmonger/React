import {useState} from 'react';
import ClassDisplayKey from "./ClassDisplayKey";

function Container() {

    const [show, setShow] = useState(true);

    const btnDisplay = show ? 'Hide' : 'Show';
    const ComponentDisplay = show && <ClassDisplayKey /> 

    return (
        <div className="text-center">
            <button className="btn btn-primary m-3" onClick={() => setShow(!show)}>{btnDisplay}</button>
            {ComponentDisplay}
        </div>
    
    )
}

export default Container