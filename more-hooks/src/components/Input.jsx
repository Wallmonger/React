import { useRef, useState } from 'react';

const Input = () => {

    const [name, setName] = useState(null);

    const usernameRef = useRef(null);
    console.log(usernameRef);

    const handleSubmit = () => {
        setName(usernameRef.current.value);
    }

    return(
        <div>
            <h1>Name : {name}</h1>
            <div className="input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">Sacré input</span>
                <input ref={usernameRef} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                <button onClick={handleSubmit} type="button" className="btn btn-outline-dark">Submit</button>
            </div>
        </div>
    )
}

export default Input;