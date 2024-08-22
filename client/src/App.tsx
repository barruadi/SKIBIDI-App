import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Profile from './pages/Profile';
import Home from './pages/Home';
import {Auth} from './pages/auth'
import { Dashboard } from './pages/dashboard'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/" element={<Dashboard/>} /> */}
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
    )
}

export default App
