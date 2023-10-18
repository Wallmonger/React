import { useState, useEffect } from 'react';
import useUpdateDocTitle from './hooks/useUpdateDocTitle';
import useFetch from './hooks/useFetch';

import Search from "./Search";
import TableUsers from './TableUsers';

const MyContacts = () => {

    const [search, setSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    
    // CustomHook
    useUpdateDocTitle(search);
    const {data, isLoading} = useFetch('https://jsonplaceholder.typicode.com/users')

    
    const filteredUsers = () => {
        const foundUsers = data.filter((user) => {
            return Object.values(user)
                .join(' ')
                .toLowerCase()
                .includes(search.toLowerCase());
            });
            
        setResultSearch(foundUsers);
    }

    useEffect(() => {
        if (search !== '') 
            filteredUsers();
        else 
            setResultSearch([]);
        
    }, [search]);
    




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
                search === '' ? msgDisplay('Nothing to search', 'green')
                :
                <TableUsers 
                    dataArray={resultSearch}
                />
            }
           
        
        </>
    )
}

export default MyContacts