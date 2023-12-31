// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Homepage from './components/Homepage';
import SecondPage from './components/SecondPage';
import LoginPage from './components/LoginPage'; // Import the LoginPage component
import SignupPage from './components/SignupPage';
import SignupPage2 from './components/SignupPage2'; // Import the SignupPage component
import Chatbot from './components/Chatbot';
import success from './components/success';
import forgotpass from './components/forgotpass';
import './App.css';

function App() {
  const [setShowChat] = useState(false);
  const history = useHistory();

  const handleChatStart = () => {
    setShowChat(true);
    history.push('/secondPage');
  };

  const handleGetStarted = () => {
    history.push('/secondPage');
  };

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Homepage onGetStarted={handleGetStarted} onChatStart={handleChatStart} />
          </Route>
          <Route path="/chatbot" component={Chatbot} />
          <Route path="/secondPage" component={SecondPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} /> 
          <Route path="/signup2" component={SignupPage2} />
          <Route path="/success" component={success} />
          <Route path="/forgotpass" component={forgotpass} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;