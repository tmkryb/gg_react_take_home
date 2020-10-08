import { useState, useEffect } from "react";

export function useGiphyFetch(url, method, defaultResult) {
    const [giphyBaseUrl] = useState("https://api.giphy.com/v1");
    const [gihpyApiKey] = useState(process.env.REACT_APP_API_KEY);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(defaultResult);
    const [error, setError] = useState(null);

    async function fetchData(body) {
        setIsLoading(true);
        let query = "";
        let requestInit = {
            method            
        }
        if(method === 'get'){
            query = new URLSearchParams(body).toString();
        }else{
            requestInit = {...requestInit, body: JSON.stringify(body)};
        }

        try {
            let response = await fetch(`${giphyBaseUrl}/${url}?api_key=${gihpyApiKey}&${query}`, requestInit);
            if (response.status === 200) {
                setResult(await response.json());
            } else {
                setError(await response.json());
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }
    return [result, isLoading, error, fetchData];
}
