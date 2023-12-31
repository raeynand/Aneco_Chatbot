// src/components/Chatbot.jsx

import React from "react";
import '../css/Chatbot.css';
import Chatbot from "react-simple-chatbot";
import steps from "./MAIN-steps.jsx";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";

function ChatbotComponent() {
  const stepsWithDelay = steps.map((step) => {
    if (step.hasOwnProperty("delay") || !step.hasOwnProperty("message")) {
      return step;
    } else {
      return {
        ...step,
        delay: 1000,
      };
    }
  });

  return (
    <div className="chatbot-container">
      <div className="rectangle-3">
        <p className="text">Chat with us!</p>
      </div>
      <div className="bars-main">
        <div>
          <img src={logo2} alt="Logo 2" className="logo2" />
        </div>
        <div></div> {/* Add styling or content for the middle section if needed */}
        <div>
          <img src={logo3} alt="Logo 3" className="logo3" />
        </div>
     </div>
     <Chatbot
       steps={stepsWithDelay}
       className="my-chatbot"
       userAvatar={logo3}
       botAvatar={logo2}
       bubbleOptionStyle={{ backgroundColor: "white", color: "#F5A445" }}
     />
     </div>
  );
};

export default ChatbotComponent;