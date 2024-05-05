import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Description from './components/Description';
import Register from './components/Register';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/description" element={<Description />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
