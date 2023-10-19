import { useState, useEffect, useDebugValue } from 'react';

const useFetch = (fetchUrl) => {

    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try 
        {
            const response = await fetch(fetchUrl);

            if (!response.ok) {
                throw Error('No Data');
            }

            const fetchedData = await response.json();
            setData(fetchedData);
            setIsLoading(false);
        } 
        catch(err) 
        {
            console.log(err.message);
        }
    }

    // The formatting function is called in dev mode when inspecting with React DevTools.
    useDebugValue(data, val => {
        alert('useDebugVal')
        return JSON.stringify(val);
    })
        

    useEffect(() => {
        fetchData();
    }, [fetchUrl]);


    return {data, isLoading}
}

export default useFetch