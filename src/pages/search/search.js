import React, { useEffect, useState } from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { useGiphSearch } from '../../customHooks/useGiphSearch';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { ImageGrid } from '../../components/imageGrid/imageGrid';
import { FaSearch } from 'react-icons/fa'
import { debounce } from 'lodash';

export function SearchComponent({ }) {
    const [searchQuery, setSearchQuery] = useState({ limit: 30, rating: "g", q: "awesome" });    
    const [downloadedGifs, isLoadingGifs, error, onBottomScroll, fetchGifs] = useGiphSearch("gifs/search", searchQuery);

    useBottomScrollListener(() => {
        onBottomScroll();
    });

    useEffect(() => {
        fetchGifs(searchQuery)
    }, [searchQuery])

    const doSearch = debounce((text) => {
        setSearchQuery({...searchQuery, q: text});
    }, 300);

    

    return (<>
        <h5>Search</h5>
        <InputGroup size="lg">
            <InputGroupAddon addonType="prepend"><Button><FaSearch></FaSearch></Button></InputGroupAddon>
            <Input defaultValue={searchQuery.q} onKeyUp={(e) => {doSearch(e.target.value)}}></Input>
        </InputGroup>        
        <ImageGrid giphs={downloadedGifs} isLoadingGifs={isLoadingGifs}></ImageGrid>
    </>);
}