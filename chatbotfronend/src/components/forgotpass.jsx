// src/components/forgotpass.jsx
import React from 'react';
import { useHistory, Link} from 'react-router-dom';
import '../css/forgotpass.css'; 
import peopleImage from '../img/people 1.png'; 

const ForgotPasswordPage = () => {
  const history = useHistory(); // Initialize useHistory hook

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Perform any necessary validations or API requests with the entered email value
    // Example: You can console.log(email) to see the entered value

    // Assuming validation is successful, redirect to a success message page or login page
    history.push('/password-reset-success');
  };

  return (
    <div className="forgot-password-page">
      <h1 className="forgot-header">Forgot Password</h1>
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
      <div className="forgot-container">
        <form className="forgot-form" onSubmit={handleResetPassword}>
          <input type="email" id="resetemail" name="resetemail" placeholder="Email" required />
          <button type="submit" className="reset-button">Reset Password</button>
          <p className="back-to-login">
            Remember your password? <Link to="/login">Login</Link>
        </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;