import { useState, useEffect } from 'react';
import useUpdateDocTitle from './hooks/useUpdateDocTitle';

import Search from "./Search";
import TableUsers from './TableUsers';

const MyContacts = () => {

    
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    
    // CustomHook
    useUpdateDocTitle(search);
    
    console.log(users);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => {
                setUsers(json);
                setIsLoading(false);
            })
            .catch(err => console.log(err.message));
    }, []);
    
    const handleChange = e => {
        setSearch(e.target.value);
    }

    const msgDisplay = (msg, color) => {
        return (
            <p style={{textAlign: 'center', color: color}}>{msg}</p>
        )
    }
    

    return (
        <>
            {
                isLoading ? msgDisplay('Please wait ...', 'red') : 
                <Search
                    searchStr={search} 
                    searchHandler={handleChange}
                /> 
            }

            {
                <TableUsers 
                    dataArray={users}
                />
            }
           
        
        </>
    )
}

export default MyContacts