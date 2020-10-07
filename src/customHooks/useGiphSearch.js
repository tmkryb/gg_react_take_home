import {useState, useEffect} from 'react';
import {useGiphyFetch} from './useGiphyFetch';

export function useGiphSearch(url, body){
    const [fetchLimit, setFetchLimit] = useState(body.limit);
    const [offset, setOffset] = useState(0);
    const [downloadedGifs, setDownloadedGifs] = useState([]);
    const [gifsPart, isLoadingGifsPart, gifsPartError, fetchGifsPart] = useGiphyFetch(url, "get", {data: []});
    const [newGifs, isLoadingNewGifs, newGifsError, fetchNewGifs] = useGiphyFetch(url, "get", {data: []});
    
    function onBottomScrollEnd(){
        fetchGifsPart({...body, offset: offset});
        setOffset(offset + fetchLimit);
    };

    function fetchNew(body){
        fetchNewGifs(body);
    }

    useEffect(() => {
        setDownloadedGifs(newGifs.data);
    }, [newGifs])
    
    useEffect(() => {
        fetchGifsPart({...body, offset: offset});
        setOffset(fetchLimit);
    }, [fetchLimit])

    useEffect(() => {
        let newGifs = gifsPart.data;
        setDownloadedGifs([...downloadedGifs, ...newGifs])
    }, [gifsPart])

    return [
        downloadedGifs,
        isLoadingGifsPart || isLoadingNewGifs,
        gifsPartError || newGifsError,
        onBottomScrollEnd,
        fetchNew
    ];
}