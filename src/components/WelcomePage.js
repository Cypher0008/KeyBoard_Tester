import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleSelectMac = () => {
    navigate('/Mac');
  };

  const handleSelectWindows = () => {
    navigate('/Windows');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to the Keyboard Tester</h1>
      <div className="button-group">
        <button className="select-button" onClick={handleSelectMac}>
          Test Mac Keyboard
        </button>
        <button className="select-button" onClick={handleSelectWindows}>
          Test Windows Keyboard
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
