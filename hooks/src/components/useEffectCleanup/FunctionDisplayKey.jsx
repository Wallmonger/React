import {useState, useEffect} from 'react';

function FunctionDisplayKey() {

    const [keyCode, setKeyCode] = useState('');

    const handleKeyCode = (e) => {
        setKeyCode(e.code);
        console.log('addEventListener ON')
    }

    useEffect(() => {
        document.addEventListener('keyup', handleKeyCode);
        
        // Like componentWillUnmount
        return () => {
            console.log('addEventListener OFF');
            document.removeEventListener('keyup', handleKeyCode);
        }
    }, [])

    
    return (
        <div className='card'>
            <div className='card-body'>
                <h1 className='text-center'>{keyCode}</h1>
            </div>
        </div>
    )
}

export default FunctionDisplayKey;