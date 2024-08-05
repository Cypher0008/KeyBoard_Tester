import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import KeyboardTester from './components/KeyboardTester';
import WelcomePage from './components/WelcomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Mac" element={<KeyboardTester layout="Mac" />} />
          <Route path="/Windows" element={<KeyboardTester layout="Windows" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
