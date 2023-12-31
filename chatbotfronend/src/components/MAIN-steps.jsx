// src/components/MAIN-steps.jsx

import viewPrompts from "./viewbill";
import payPrompts from "./pay";
import applyPrompts from "./applying";
import annPrompts from "./announcing";
import contactPrompts from "./contacting";

// MAIN DIALOG FLOW
const steps = [
  {
    id: "Greet",
    message: `Hello, I am Aneco Chatbot. I will reply to any question and topic you have regarding Aneco.`,
    trigger: "Ask-name",
  },
  {
    id: "Ask-name",
    message: "What should I call you?",
    trigger: "waiting-for-name",
  },
  {
    id: "waiting-for-name",
    user: true,
    trigger: "name-given",
  },
  {
    id: "name-given",
    message: `Pleasure to meet you, {previousValue}. What brings you here?`,
    trigger: "contact-reasons",
  },
  {
    id: "contact-reasons",
    options: [
      { value: "recruitment", label: "View my Bill", trigger: "bill" },
      {
        value: "programming buddy",
        label: "Payment",
        trigger: "payment1",
      },
      {
        value: "ping pong",
        label: "How to apply",
        trigger: "apply",
      },
      {
        value: "announcing",
        label: "Announcements",
        trigger: "ANN",
      },
      {
        value: "contact",
        label: "Contact Us",
        trigger: "contactus",
      },
    ],
  },

  // Goodbye prompt
  {
    id: "goodbye",
    message: "It was nice to chat. Good bye! 👋🏼",
    end: true,
  },


  // view my bill
  ...viewPrompts,

  // payment
  ...payPrompts,

  // apply
  ...applyPrompts,

  // announcement
  ...annPrompts,

  // contact us
  ...contactPrompts,

];

export default steps;
