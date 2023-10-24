import { useState, useEffect, lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import useUpdateDocTitle from './hooks/useUpdateDocTitle';
import useFetch from './hooks/useFetch';
import ErrorFallback from './ErrorFallback';

import Search from "./Search";
// import TableUsers from './TableUsers';
const TableUsers = lazy(() => import('./TableUsers')); // Dynamic import, will be imported with bundle only if needed

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
                
                // fallback will display something if the component is loading (<TableUsers />)
                // If there is an error inside ErrorBoundary
                <ErrorBoundary FallbackComponent={ErrorFallback}>  
                    <Suspense fallback={<div>Table Component Loading ...</div>}>
                        <TableUsers 
                            dataArray={resultSearch}
                        />
                    </Suspense>

                </ErrorBoundary>
            }
           
        
        </>
    )
}

export default MyContacts