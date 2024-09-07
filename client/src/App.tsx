import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import {Auth} from './pages/auth'
import Profile from './pages/Profile';
import Home from './pages/Home';
import {FinancialRecordForm} from './pages/Transaction';
import { FinancialRecordsProvider } from './contexts/financial-record-context';

function App() {

  return (
    <Router>
      <div className = "app-container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transaction" element={
              <FinancialRecordsProvider>
                <FinancialRecordForm />
              </FinancialRecordsProvider>
          } />
        </Routes>
      </div>
    </Router>
    )
}

export default App

