import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import successImage from '../img/success.gif';
import '../css/success.css';

const Success = () => {
  const history = useHistory(); // Get the history object

  const handleStartChatting = () => {
    // Navigate to the chatbot page
    history.push('/chatbot');
  };

  return (
    <div>
      <img src={successImage} alt="Success" style={{ width: '428px', height: '340px' }} />
      <h1 style={{ color: '#000', textAlign: 'center', fontFamily: 'Syne', fontSize: '50px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
        Success!
      </h1>
      <p style={{ color: '#000', textAlign: 'center', fontFamily: 'Syne', fontSize: '30px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
        Welcome to MyAneco
      </p>
      <button className="button" onClick={handleStartChatting}>Start Chatting</button> 
    </div>
  );
};

export default Success;