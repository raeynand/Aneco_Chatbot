// dialog flow for "View my bill" ================================================
const viewPrompts = [
    {
      id: "bill",
      message: `Here's your bill as of (month,year) ...`,
      trigger: "Back to main menu button",
    },
    {
      id: `back to main menu button`,
      options: [
        {
          value: "Back to main menu",
          label: "Back to main menu",
          trigger: "contact-reasons",
        },
      ],
    },
  ];
  
  export default viewPrompts;
  