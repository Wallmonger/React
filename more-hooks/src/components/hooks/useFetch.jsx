import { useState, useEffect } from 'react';

const useFetch = (fetchUrl) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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