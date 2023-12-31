// dialog flow for "How to apply" ================================================
const applyPrompts = [
    {
      id: "apply",
      message:
        "To apply for our electric service conection, click this link https://www.aneco.ph/application ",
      trigger: "Back to main menu button",
    },
    {
      id: "Back to main menu button",
      options: [
        {
          value: "Back to main menu",
          label: "Back to main menu",
          trigger: "contact-reasons",
        },
      ],
    },
  ];
  
  export default applyPrompts;
  

