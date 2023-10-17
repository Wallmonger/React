import { useState, useEffect } from 'react';
import useUpdateDocTitle from './hooks/useUpdateDocTitle';

import Search from "./Search";
import TableUsers from './TableUsers';

const MyContacts = () => {

    
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    
    // CustomHook
    useUpdateDocTitle(search);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => {
                setUsers(json);
                setIsLoading(false);
            })
            .catch(err => console.log(err.message));
    }, []);

    
    const filteredUsers = () => {
        const foundUsers = users.filter((user) => {
            return Object.values(user)
                .join(' ')
                .toLowerCase()
                .includes(search.toLowerCase());
            });
            
        setResultSearch(foundUsers);
    }
    
    useEffect(() => {
        if (search !== '') {
            filteredUsers();
        } else {
            setResultSearch([]);
        }
    }, [search])
    




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
                resultSearch.length === 0 && search !== '' ? msgDisplay('User not found', 'red') 
                :
                search === '' ? null
                :
                <TableUsers 
                    dataArray={resultSearch}
                />
            }
           
        
        </>
    )
}

export default MyContacts