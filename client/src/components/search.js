import React from 'react';
import NavBar from './navbar';
import '../styles/css/search-result.css';
import Sidebar from './Sidebar'
import Footer from './Footer';



const Search = () => {
    return (
        <div>
            <NavBar />
            <div style={{ display: 'flex', flexDirection: 'column' }}> {/* Flex container with column direction */}
                <div className="searchContainer">
                    <input type="text" placeholder="Search" className="searchInput" />
                    <a href="/search" className="searchButton">Search</a>
                    <a href="/search" className="advancedBtn">Advanced</a>
                </div>
            <Sidebar/>
            </div>
            <Footer/>
        </div>
    );
}

export default Search;
