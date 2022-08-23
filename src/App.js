import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePages from './component/pages/HomePage/HomePages';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LoginPage from './component/pages/LoginPage/LoginPage';
import RegisterPage from './component/pages/RegistrPage/RegisterPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePages/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
