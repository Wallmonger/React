import { useState } from 'react';
import useUpdateDocTitle from './hooks/useUpdateDocTitle';

import Search from "./Search";

const MyContacts = () => {

    const [search, setSearch] = useState('');
    useUpdateDocTitle(search);

    const handleChange = e => {
        setSearch(e.target.value);
    }


    return (
        <Search
            searchStr={search} 
            searchHandler={handleChange}
        />
    )
}

export default MyContacts