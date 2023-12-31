import React from 'react';
import logoImage from '../img/logo 1.png';
import '../css/Homepage.css';
import { useHistory } from 'react-router-dom';

const Homepage = ({ onChatStart, onGetStarted }) => {
  const history = useHistory();

  const handleGetStarted = () => {
    console.log('Get Started clicked');
    // Perform any necessary actions before navigating

    // Navigate to the second page
    history.push('/secondPage');
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">AnecoBot</h1>
      <style> @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;800&display=swap');</style>
      <img src={logoImage} alt="AnecoBot Logo" className="homepage-image" />
      <div className="rounded-box">
        <p className="talk-to-me">Talk to me!</p>
      </div>
      <button className="homepage-button" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default Homepage;