import { useEffect, useState } from "react";

export function useFetch (fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState (false);
    const [fetchedData, setFetchedData] = useState(initialValue);
    const [error, setError] = useState();

    useEffect(() => {
        async function  fetchData (){
            setIsFetching(true);
            try{
            const data = await fetchFn ()
            setFetchedData(data);
            } catch (error) {
            setError({message : error.message || 'failed to fetch data...' })
            }
            setIsFetching(false);
        }

        fetchData (); 
    }, [fetchFn]);

    return{
        isFetching,
        error,
        fetchedData,
        setFetchedData
    }
}