// dialogue flow of "Payment"
const payPrompts = [
    {
      id: "payment1",
      message: "How would you like to pay?",
      trigger: "payment2",
    },
    {
      id: "payment2",
      options: [
        { value: "gcash", label: "Gcash", trigger: "g-cash" },
        {
          value: "paymaya",
          label: "PayMaya",
          trigger: "paymaya",
        },
      ],
      delay: 1500,
    },
    {
      id: "g-cash",
      message: "Click this link (www.gcash.com) to pay from Gcash",
      trigger: "PP-reject",
    },
  
    {
      id: "paymaya",
      message: "Click this link (www.maya.ph) to pay from PayMaya",
      trigger: "PP-reject",
    },
  
    {
      id: "PP-reject",
      options: [
        {
          value: "main-menu",
          label: "Return to main menu",
          trigger: "contact-reasons",
        },
      ],
    },
  ];
  
  export default payPrompts;
  