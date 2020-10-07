import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { TrendingComponent } from './pages/trending/trending';
import { SearchComponent } from './pages/search/search';
import { FavoritesComponent } from './pages/favorites/favorites';

export function Routing() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <TrendingComponent></TrendingComponent>
                </Route>
                <Route path="/trending" exact>
                    <TrendingComponent></TrendingComponent>
                </Route>
                <Route path="/search" exact>
                    <SearchComponent></SearchComponent>
                </Route>
                <Route path="/favorites" exact>
                    <FavoritesComponent></FavoritesComponent>
                </Route>
            </Switch>
        </>
    )
}