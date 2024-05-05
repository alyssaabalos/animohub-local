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
    <header>
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
    </aside>
  );
}

function MainContent() {
  return (
    <main>
      <h2>Asian Face Dataset (PNG)</h2>
      <p>By: <strong>Sean Folkard</strong>, De La Salle University, Manila</p>
      <p><strong>Date of Publication:</strong> 2023-07-30</p>
      <button>Download</button>
    </main>
  );
}




export default Description;
