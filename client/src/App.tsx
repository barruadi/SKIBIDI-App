import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import {Auth} from './pages/auth'
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className = "app-container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

