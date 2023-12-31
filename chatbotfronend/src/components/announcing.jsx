// dialog flow for "Announcements" ================================================
const annPrompts = [
    {
      id: "ANN",
      message: "Announcements: (examples...) ",
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
  
  export default annPrompts;
  