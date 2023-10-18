import { useState, useEffect, useDebugValue } from 'react';

const useFetch = (fetchUrl) => {

    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // The formatting function is called in dev mode when inspecting with React DevTools.
    useDebugValue(data, val => {
        alert('useDebugVal')
        return JSON.stringify(val);
    })
        

    useEffect(() => {
        fetch(fetchUrl)
            .then(response => response.json())
            .then(json => {
                setData(json);
                setIsLoading(false);
            })
            .catch(err => console.log(err.message));
    }, [fetchUrl]);


    return {data, isLoading}
}

export default useFetch