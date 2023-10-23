import { useId } from 'react';

const Newsletter = () => {

    const id = useId();

    const container = {
        background: "PaleGoldenrod",
        padding: '19px',
        width : '60%',
        margin: "9px auto",
        border: "1px orange dashed"


    }

    return (
        <div style={container}>
            <label htmlFor={id}>Register</label>
            <div>
                <input 
                    id={id}
                    type="email" 
                    name="email" 
                    placeholder="Your email"
                />
            </div>
        </div>
    )
}

export default Newsletter;