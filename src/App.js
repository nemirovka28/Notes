import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePages from './component/pages/HomePages';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LoginPages from './component/pages/LoginPages';
import RegisterPages from './component/pages/RegisterPages';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePages/>} />
          <Route path="/login" element={<LoginPages/>} />
          <Route path="/register" element={<RegisterPages/>} />
      </Routes>
    </Router>
  )
}

export default App;
