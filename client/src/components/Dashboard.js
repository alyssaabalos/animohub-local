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
              <div className="searchContainer">
                <input type="text" placeholder="Search" className="searchInput" />
                <a href="/search" className="searchButton">Search</a>
              </div>
              <h1 className='page-title'>ALTDSI AnimoHub</h1>
              <img src={logo} alt="Descriptive Alt Text" className="titleImage" />
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                  <a href="URL2" className="box-link link">Audio, Video, and Image Datasets</a>
                </div>
                <div className="box">
                  <img src={software} alt="Image of a software" className="box-image" />
                  <a href="URL3" className="box-link special-link">Software Programs, Installers</a>
                </div>
                <div className="box">
                  <img src={excel} alt="Image of MS Excel" className="box-image" />
                  <a href="URL4" className="box-link special-link">CSV/XLSX Files</a>
                </div>
              </div>
              
              {/* Section 3 */}
              <div className='main-content'>
                <div className='left-column'>
                  <h3 className='glance-title'>At a Glance</h3>
                  <div className="glance-boxes">
                    <div className="glance-box">
                      <a href="URL5" className="glance-box-text">Top 10 Most Accessed</a>
                      <p>All Time</p>
                    </div>
                    <div className="glance-box">
                    <a href="URL6" className="glance-box-text">Recent Additions</a>
                      <p>Top 10 most recent additions [Month]</p>
                    </div>
                    <div className="glance-box">
                      <a href="URL7" className="glance-box-text">Popular</a>
                      <p>Emerging Topics as of Today</p>
                    </div>
                  </div>
                </div>
                <div className='right-column'>
                  <h3 className='paper-title'>Paper of the Day</h3>
                  <div className="paper-boxes">
                    <div className="paper-box">
                      <a href="URL5" className="paper-box-text">Philippine Institute of Volcanology and Seismology Project Management System</a>
                      <p>Author/s: Bonifacio, P., Reyes, G., Tianzon, G., Yung, J.</p>
                    </div>
                  </div>
                  <h3 className='dataset-title'>Dataset of the Day</h3>
                  <div className="dataset-boxes">
                    <div className="dataset-box">
                      <a href="URL5" className="dataset-box-text">Names of Titanic Passengers</a>
                      <p>Published by: Dela Cruz, J.</p>
                      <p>Type: CSV/XLSX</p>
                      <br></br>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Dashboard;
