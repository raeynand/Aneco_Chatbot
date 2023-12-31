import React from 'react';
import welcomeImage from '../img/image 1.png';
import '../css/SecondPage.css';
import { useHistory } from 'react-router-dom';

const SecondPage = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login'); // Update the path to the login page
    console.log('Navigating to Login Page');
  };

  const handleCreateAccountClick = () => {
    history.push('/signup'); // Update the path to the signup page
    console.log('Navigating to Signup Page');
  };

  return (
    <div className="second-page-container">
      {/* Image */}
      <img src={welcomeImage} alt="Welcome Image" className="welcome-image" />
      {/* Welcome text */}
      <div className="welcome-text-container">
        <h2>Welcome to MyANECO</h2>
        <p>Your personal online portal that provides access to important details about your billing account. View your ANECO electricity bill/statement of account online anytime and anywhere at your own convenience. Sign up to get started.</p>
      </div>

      {/* Buttons */}
     <div className="button-container">
       <button className="login-button2" onClick={handleLoginClick}>Log in</button>
       <button className="create-account-button" onClick={handleCreateAccountClick}>Create Account</button>
     </div>

      {/* Additional content or features for the SecondPage */}
    </div>
  );
};

export default SecondPage;