import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useGiphSearch } from '../../customHooks/useGiphSearch';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import ReactLoading from 'react-loading';
import { GiphTile } from '../../components/giphTile/giphTile';
import { ImageGrid } from '../../components/imageGrid/imageGrid';

export function TrendingComponent({ }) {

    const [downloadedGifs, isLoadingGifs, error, onBottomScroll] = useGiphSearch("gifs/trending", { limit: 30, rating: "g" });

    useBottomScrollListener(() => {
        onBottomScroll();
    });

    return (<>
        <h5>Trending</h5>
        <ImageGrid giphs={downloadedGifs} isLoadingGifs={isLoadingGifs}></ImageGrid>
    </>);
}