// ./src/api/auth/controllers/local.js
module.exports = {
    register: async (ctx) => {
      try {
        const { username, email, password } = ctx.request.body;
  
        // Your registration logic here
        // Validate input, create user, etc.
  
        ctx.send({ message: 'User registered successfully' });
      } catch (error) {
        console.error('Registration failed:', error);
        ctx.throw(400, 'Bad Request');
      }
    },
  };
  
  