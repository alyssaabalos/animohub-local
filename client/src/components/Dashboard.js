import React from 'react';
import NavBar from './navbar';
import styles from '../styles/Dashboard.css'; // Import the styles
import logo from '../styles/dlsu-henry.png';

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
              <div className="searchContainer">
                <input type="text" placeholder="Datasets" className="searchInput" />
                <button className="searchButton">Search</button>
              </div>
              <h1 className='page-title'>ALTDSI AnimoHub</h1>
              <img src={logo} alt="Descriptive Alt Text" className="titleImage" />
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <h1 className='section-two'>Browse Papers and Datasets</h1>
            </div>
        </div>
    );
};

export default Dashboard;
