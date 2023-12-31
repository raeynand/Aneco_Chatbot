// api/signup/routes.js
module.exports = [
    {
      method: 'POST',
      path: '/signups',
      handler: 'signup.create',
    },
  ];
  