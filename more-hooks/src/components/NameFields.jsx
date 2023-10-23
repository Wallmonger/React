import { useId } from 'react';

const NameFields = () => {

    const id = useId();

    return (
        <>
            <label htmlFor={`firstName-${id}`}>firstname</label>
            <div><input id={`firstName-${id}`} type="text" /></div>

            <label htmlFor={`lastName-${id}`}>lastname</label>
            <div><input id={`lastName-${id}`} type="text" /></div>

            <label htmlFor={`age-${id}`}>age</label>
            <div><input id={`age-${id}`} type="number" /></div>
        </>
    )
}

export default NameFields;