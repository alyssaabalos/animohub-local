import React from 'react';
import NavBar from './navbar';
import { useNavigate } from 'react-router-dom';
import '../styles/css/Submission.css';

const Submission = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/submit');
  };

  const getAccessClass = (access) => {
    return access === 'PUBLIC' ? 'upload-access public' : 'upload-access';
  };

  return (
    <div>
      <NavBar />
      <div className="submission-container">
        <div className="submission-box">
          <span>Submissions</span>
          <button className="submit-button" onClick={handleButtonClick}>+ Add a document/dataset</button>
          <a href="#thesis-dissertations">Thesis Dissertations (1)</a>
          <a href="#articles">Articles (0)</a>
          <a href="#research-papers">Research Papers (0)</a>
          <a href="#video-datasets">Video Datasets (1)</a>
          <a href="#audio-datasets">Audio Datasets (1)</a>
          <a href="#software-programs">Software Programs (1)</a>
        </div>
        <div className="submission-content">
          <div className="submission-header-container">
            <div className="submission-header">My Uploads</div>
            <button className="filter-button">Filter</button>
          </div>
          <div className="upload-item">
            <div className="upload-details">
              <div className="upload-title">All Ariana Grande Songs Dataset (MP3)</div>
              <div className="upload-meta">Published by: Abalos, Alessandra<br />Date: 04-16-2024</div>
              <div className="upload-keywords">
                <span>KEYWORDS</span>
                <div className="upload-keyword">SONGS</div>
                <div className="upload-keyword">POP</div>
              </div>
            </div>
            <div className="upload-actions">
              <div className="upload-access">INTERNAL ACCESS</div>
              <div className="upload-download">&#x2B07;</div>
            </div>
          </div>
          <div className="upload-item">
            <div className="upload-details">
              <div className="upload-title">Sudoku Game Simulator (py)</div>
              <div className="upload-meta">Published by: Abalos, Alessandra<br />Date: 04-16-2024</div>
              <div className="upload-keywords">
                <span>KEYWORDS</span>
                <div className="upload-keyword">GAMES</div>
                <div className="upload-keyword">PYTHON</div>
              </div>
            </div>
            <div className="upload-actions">
            <div className={getAccessClass('PUBLIC')}>PUBLIC</div>              
            <div className="upload-download">&#x2B07;</div>
            </div>
          </div>
          <div className="upload-item">
            <div className="upload-details">
              <div className="upload-title">Exploring the Impact of Virtual Reality Technology on Learning Outcomes and Engagement in STEM Education: A Mixed-Methods Study (pdf)</div>
              <div className="upload-meta">Published by: Abalos, Alessandra<br />Date: 04-16-2024</div>
              <div className="upload-keywords">
                <span>KEYWORDS</span>
                <div className="upload-keyword">SONGS</div>
                <div className="upload-keyword">POP</div>
              </div>
            </div>
            <div className="upload-actions">
            <div className={getAccessClass('PUBLIC')}>PUBLIC</div>
            <div className="upload-download">&#x2B07;</div>
            </div>
          </div>
          <div className="upload-item">
            <div className="upload-details">
              <div className="upload-title">Trending YouTube videos</div>
              <div className="upload-meta">Published by: Abalos, Alessandra<br />Date: 04-16-2024</div>
              <div className="upload-keywords">
                <span>KEYWORDS</span>
                <div className="upload-keyword">SONGS</div>
                <div className="upload-keyword">POP</div>
              </div>
            </div>
            <div className="upload-actions">
            <div className={getAccessClass('PUBLIC')}>PUBLIC</div>
            <div className="upload-download">&#x2B07;</div>
            </div>
          </div>
        </div>
        {/* Main content can go here */}
      </div>
    </div>
  );
}

export default Submission;
