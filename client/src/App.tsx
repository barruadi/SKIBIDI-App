import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import {Auth} from './pages/auth'
import Profile from './pages/Profile';
import Home from './pages/Home';
import FinancialRecordForm from './pages/Transaction';

function App() {

  return (
    <Router>
      <div className = "app-container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transaction" element={<FinancialRecordForm />} />
        </Routes>
      </div>
    </Router>
    )
}

export default App

