import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { Routing } from '../routes';
import { BrowserRouter, Link } from 'react-router-dom';
import { FiTrendingUp, FiStar } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa'
export function MainPage() {
    return (
        <>
            <BrowserRouter>
                <Navbar>
                    <NavbarBrand href="/">giphy_search!</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavItem>
                            <NavLink><Link to="/trending/"><FiTrendingUp></FiTrendingUp> Trending</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/search/"><FaSearch></FaSearch> Search</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/favorites/"><FiStar></FiStar> Favorites</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Routing></Routing>
            </BrowserRouter>
        </>
    )
}