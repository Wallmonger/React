import {useState, useEffect} from 'react';

function FunctionCount() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // The second parameter of useEffect is the states[] on which useEffect should be triggered
    // Empty array => ComponentDidMount()
    useEffect(() => {
        console.log("Update via useEffect");
        document.title = `You clicked ${count} times`;
    }, [])



    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}className='btn btn-primary w-25'>Set (F) count</button>

            <div className="input-group my-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Change State Name</span>
                <input type="text" value={name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={e => {
                    setName(e.target.value);
                }}/>
            </div>

            <p>State name : <span className='text-secondary'>{name}</span></p>
        </div>
    )
}

export default FunctionCount;