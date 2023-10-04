import { useContext } from 'react';
import { UserContext, ColorContext } from './MyContexts';

const ContentData = () => {

    const user = useContext(UserContext);
    const color = useContext(ColorContext);

    return (
        <div style={{color: color}}>
            <ul>
                <li>name: {user.name}</li>
                <li>age: {user.age}</li>
            </ul>
        </div>
    )
}

export default ContentData;