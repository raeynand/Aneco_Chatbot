// dialog flow for "Contact" ================================================
const contactPrompts = [
    {
      id: "contactus",
      message:
        "For concerns you may contact our office in the following contact information:",
      trigger: "emails",
    },
  
    {
      id: "emails",
      message:
        "BUTUAN CITY Email:customercare@aneco.ph helpdesk@aneco.ph admin@aneco.ph anecocentral@yahoo.com",
      trigger: "no.",
    },
  
    {
      id: "no.",
      message:
        "TUNAGO BUTUAN CITY Mobile No. +63 9389110247 CABADBARAN CITY Telephone No. (085) 343-0179 NASIPIT Telephone No. (085) 343-2136 BUENAVISTA Telephone No. (085) 343-4757",
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
  
  export default contactPrompts;
  