import { useCallback, useEffect, useState } from "react";

async function sendHtppRequest(url, config) {
    const response = await fetch(url, config);

    const resData = await response.json();
    
    if(!response.ok){
        throw new Error(
            resData.message || "Something went wrong."
        );
    }

    return resData;
}

export default function useHttp (url, config, initialData){
    const [data, setData] = useState(initialData);
    const [isLloading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    function clearData () {
        setData(initialData);
    }
    const sendRequest = useCallback( async function sendRequest(data) {
        setIsLoading(true)
        try {
            const resData = await sendHtppRequest(url, {...config, body : data});
            setData(resData);
        }   catch (error){
            setError(error.message || 'Something went wrong!')
        }
        setIsLoading(false)
    }, [url, config]);

    useEffect ( () =>{
        if((config &&  (config.method === 'GET' || !config.method)) || !config) {
            sendRequest();
        }
    },[sendRequest, config]);

    return{
        data,
        isLloading,
        error,
        sendRequest,
        clearData
    }
}