import React from 'react';
import '../styles/Description.css';
import logo from '../styles/logo-nobg.png';


function Description() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className='description-navbar'>
      <div className="logo-container">
        <img src={logo} alt="AnimoHub Logo" className="login-logo" />
      </div>
      <nav>
        <a href="#home">HOME</a>
        <a href="#submissions">SUBMISSIONS</a>
        <a href="#account">MY ACCOUNT</a>
        <a href="#contact">CONTACT US</a>
      </nav>
    </header>
  );
}


function Sidebar() {
  return (
    <aside>
      <h3>Disciplines</h3>
      <button>Data Science</button>
      <button>Computer Technology</button>
      <button>Engineering</button>
      <br>
      </br>
      <h3>Publication Type</h3>
      <button>Thesis Dissertations</button>
      <button>Articles</button>
      <button>Research Papers</button>
      <button>Video Datasets</button>
      <button>Audio Datasets</button>
      <button>Software Programs</button>
      <br>
      </br>
      <h3>Publication Type</h3>
      <button>Year</button>
      <button>2023</button>
      <button>2022</button>
      <button>2021</button>
      <button>2020</button>
      <button>2019</button>
    </aside>
    
  );
}

function MainContent() {
  return (
    <main>
      <h2>Asian Face Dataset (IMG)</h2>
      <p>Sean Folkard, De La Salle University, Manila</p>
      <p><strong>Date of Publication:</strong> 2023-07-30</p>
      <p><strong>Document Type:</strong> IMG</p>
      <p><strong>Tags</strong>
      <br></br>
      <button>Asian</button><button>Face</button></p>
      <p><strong>Abstract/Summary:</strong> 
      <br>
      </br>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <button>Download</button>
    </main>
  );
}




export default Description;
