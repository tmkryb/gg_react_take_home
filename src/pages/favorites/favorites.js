import React, { useEffect, useState } from 'react';
import { ImageGrid } from '../../components/imageGrid/imageGrid';
import { useLocalStorage } from '@rehooks/local-storage';

export function FavoritesComponent({ }) {
    const [favorites] = useLocalStorage("favorite_giphs", []);
    
    return (<>
        <h5>Your favorite giphs</h5>
        <ImageGrid giphs={favorites}></ImageGrid>
    </>);
}