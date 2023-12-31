import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// Create a new instance of MutationObserver
const observer = new MutationObserver(() => {
  // When mutations occur, call the renderApp function
  renderApp();
});

// Start observing changes in the root element
observer.observe(document.getElementById('root'), {
  childList: true,
});

// Initial rendering of the app
renderApp();