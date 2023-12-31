// src/components/LoginPage.jsx
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/LoginPage.css'; // Import the CSS file for styling
import peopleImage from '../img/people 1.png'; // Import the image

const LoginPage = () => {
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    try {
      // Make a POST request to Strapi's login endpoint
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      });
  
      // Assuming successful login, get the JWT token from the response
      const jwtToken = response.data.jwt;
  
      // Include the token in the Authorization header for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
  
      // Store the token in localStorage for persistent authentication
      localStorage.setItem('userToken', jwtToken);
  
      // Redirect to the chatbot page or any other page as needed
      history.push('/chatbot');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
  
      if (error.response && error.response.data) {
        console.error('Error details:', error.response.data);
      }
    }
  };
  
  

 return (
   <div className="login-page">
     <h1 className="login-header">Login</h1>
     <img src={peopleImage} alt="People" className="people-1" />
     <div className="ellipse-1"></div>
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="200"
       height="200"
       viewBox="0 0 175 192"
       fill="none"
       style={{
         position: 'absolute',
         width: '200px',
         height: '200px',
         top: '-23px',
         left: '-35px',
       }}
     >
       <g filter="url(#filter0_d_2283_6073)">
         <circle cx="100" cy="77" r="100" fill="#D9D9D9" />
       </g>
       <defs>
         <filter
           id="filter0_d_2283_6073"
           x="-45"
           y="-28"
           width="220"
           height="220"
           filterUnits="userSpaceOnUse"
           colorInterpolationFilters="sRGB"
         >
           <feFlood floodOpacity="0" result="BackgroundImageFix" />
           <feColorMatrix
             in="SourceAlpha"
             type="matrix"
             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
             result="hardAlpha"
           />
           <feOffset dy="5" />
           <feGaussianBlur stdDeviation="5" />
           <feComposite in2="hardAlpha" operator="out" />
           <feColorMatrix
             type="matrix"
             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
           />
           <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2283_6073" />
           <feBlend
             mode="normal"
             in="SourceGraphic"
             in2="effect1_dropShadow_2283_6073"
             result="shape"
           />
         </filter>
       </defs>
     </svg>
     <div className="rectangle-6"></div>
     <div className="rectangle-5"></div>
     <div className="login-container">
       <form className="login-form" onSubmit={handleLogin}>
         <input type="email" id="email" name="email" placeholder="Email" required />
         <input type="password" id="password" name="password" placeholder="Password" required />
         <div className="checkbox-container">
           <label htmlFor="rememberMe" className="remember-me-label">
             <input type="checkbox" id="rememberMe" name="rememberMe" />
             <span>Remember me</span>
           </label>
           <Link to="/forgotpass" className="forgot-password">
             Forgot Password?
            </Link>
         </div>
         <div className="button-container">
           <button type="submit" className="login-button">Login</button>
         </div>
         <div className="dont-have-account-container">
            <p className="dont-have-account-label">Don't have an Account?</p>
            <a href="/signup" className="signup-link">Sign up</a>
      </div>
       </form>
     </div>
   </div>
 );
      }
 export default LoginPage;

 

 



 