import React from 'react';
import NavBar from './navbar';
import Footer from './Footer';
import '../styles/css/Dashboard.css'; // Import the styles
import logo from '../styles/images/dlsu-henry.png';
import paper from '../styles/images/paper.png';
import software from '../styles/images/software.png';
import excel from '../styles/images/excel.png';
import sound from '../styles/images/sound.png';
import video from '../styles/images/video.png';
import gallery from '../styles/images/gallery.png';

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <div className="dashboardContainer">
                {/* Search Box Section */}
                <div className="search-Container">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="search-Input"
                    />
                    <button 
                        type="button" 
                        className="searchButton"
                    >
                        Search
                    </button>
                </div>
                <h1 className='page-title'>ALTDSI AnimoHub</h1>
                <img src={logo} alt="Descriptive Alt Text" className="titleImage" />
                <span className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                <h1 className='section-two'>Browse Papers and Datasets</h1>
                <div className="boxes">
                    <div className="box">
                        <img src={paper} alt="Image of a paper" className="box-image" />
                        <a href="URL1" className="box-link">Thesis Dissertations, Articles, Research Papers</a>
                    </div>
                    <div className="box">
                        <div className="image-row">
                            <img src={sound} alt="Image of a sound wave" className="box-image box-2" />
                            <img src={gallery} alt="Image of a gallery" className="box-image box-2" />
                            <img src={video} alt="Image of a video camera" className="box-image box-2" />
                        </div>
                        <a href="URL2" className="box-link">Audio, Video, and Image Datasets</a>
                    </div>
                    <div className="box">
                        <img src={software} alt="Image of a software" className="box-image" />
                        <a href="URL3" className="box-link">Software Programs, Installers</a>
                    </div>
                    <div className="box">
                        <img src={excel} alt="Image of MS Excel" className="box-image" />
                        <a href="URL4" className="box-link">CSV/XLSX Files</a>
                    </div>
                </div>
                
                {/* Section 3 */}
                <div className='main-content'>
                    <div className='left-column'>
                        <span className='title'>At a Glance</span>
                        <div className="glance-boxes">
                            <div className="glance-box">
                                <a href="URL5" className="glance-box-text">Top 10 Most Accessed</a>
                                <span>All Time</span>
                            </div>
                            <div className="glance-box">
                                <a href="URL6" className="glance-box-text">Recent Additions</a>
                                <span>Top 10 most recent additions [Month]</span>
                            </div>
                            <div className="glance-box">
                                <a href="URL7" className="glance-box-text">Popular</a>
                                <span>Emerging Topics as of Today</span>
                            </div>
                        </div>
                    </div>
                    <div className='right-column'>
                        <span className='title'>Paper of the Day</span>
                        <div className="paper-boxes">
                            <div className="paper-box">
                                <a href="URL5" className="paper-box-text">Philippine Institute of Volcanology and Seismology Project Management System</a>
                                <span>Author/s: Bonifacio, P., Reyes, G., Tianzon, G., Yung, J.</span>
                            </div>
                        </div>
                        <span className='title'>Dataset of the Day</span>
                        <div className="dataset-boxes">
                            <div className="dataset-box">
                                <a href="URL5" className="dataset-box-text">Names of Titanic Passengers</a>
                                <span>Published by: Dela Cruz, J.</span>
                                <span>Type: CSV/XLSX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
