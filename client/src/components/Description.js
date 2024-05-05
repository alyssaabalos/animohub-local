import React from 'react';
import '../styles/Description.css';


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
      <h1>My Dataset Page</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#submissions">Submissions</a>
        <a href="#account">My Account</a>
        <a href="#contact">Contact Us</a>
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
