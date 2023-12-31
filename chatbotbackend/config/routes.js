// ./config/routes.js
module.exports = [
    {
      method: 'POST',
      path: '/auth/local/register',
      handler: 'auth.local.register',
    },
    {
      method: 'GET',  // Add this route for GET requests
      path: '/auth/local/register',
      handler: 'auth.local.getRegister',  // You can change this handler name
    },
    {
      method: 'POST',
      path: '/api/signups',
      handler: 'signup.create',
    },

    {
      method: 'GET',
      path: '/api/signups',
      handler: 'signup.find',
    },
  
  ];
  
  
  