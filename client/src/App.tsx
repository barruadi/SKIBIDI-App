import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import {FinancialRecordForm} from './pages/Transaction';
import { FinancialRecordsProvider } from './contexts/financial-record-context';

function App() {

  return (
    <Router>
      <div className = "app-container h-full">
        <Routes>
            <Route path="/" element={<Home />} />
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

