import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Description from './components/Description';
import Register from './components/Register';
import Request from './components/requestForm';
import Upload from './components/Upload';
import Search from './components/search';
import Submit from './components/Submit';
import MyRequests from './components/myRequests';
import RequestResult from './components/requestResult';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/description" element={<Description />} />
      <Route path="/register" element={<Register />} />
      <Route path="/uploadform" element={<Upload />} />
      <Route path="/" element={<Login />} />
      <Route path="/requestform" element={<Request />} />
      <Route path="/myrequests" element={<MyRequests />} />
      <Route path="/requestresult" element={<RequestResult />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
