import React from 'react';
import axios from 'axios'; // Import Axios
import { useHistory } from 'react-router-dom';
import '../css/SignupPage.css'; // Import the CSS file for styling
import peopleImage from '../img/people 1.png'; // Import the image

const SignupPage2 = () => {
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    const ANECO_ACCOUNT_NUMBER = e.target.ANECO_ACCOUNT_NUMBER?.value ?? '';
    const SOA_NUMBER = e.target.SOA_NUMBER?.value ?? '';
    const OR_NUMBER = e.target.OR_NUMBER?.value ?? '';
    const privacyChecked = e.target.privacy?.checked ?? false;
    const emailSchedChecked = e.target.emailsched?.checked ?? false;
  
    // Perform basic validation
    if (!ANECO_ACCOUNT_NUMBER || !SOA_NUMBER || !OR_NUMBER || !privacyChecked || !emailSchedChecked) {
      alert('Please fill in all required fields.');
      return; // Stop execution if validation fails
    }
  
    try {
      // Make a POST request to the Strapi endpoint with "data" key
      const response = await axios.post('http://localhost:1337/api/signups', {
        data: {
          ANECO_ACCOUNT_NUMBER,
          SOA_NUMBER,
          OR_NUMBER,
          privacyChecked,
          emailSchedChecked,
        },
      });
  
      // Assuming the request is successful, you can redirect or perform other actions
      history.push('/success');
    } catch (error) {
      console.error('Additional information submission failed:', error.response);
      // Handle submission failure (show error message, etc.)
    }
  };
  
  

  return (
    <div className="signup-page">
      <h1 className="signup-header">Sign Up</h1>
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
      <div className="signup-container"></div>
          <form className="signup-form" onSubmit={handleSignUp}>
          <input type="number" id="ANECO_ACCOUNT_NUMBER" name="ANECO_ACCOUNT_NUMBER" placeholder="Aneco Account Number" required />
          <input type="number" id="SOA_NUMBER" name="SOA_NUMBER" placeholder="SOA Number" required />
          <input type="number" id="OR_NUMBER" name="OR_NUMBER" placeholder="OR Number" required />


            <div className="privacy-checkbox-container">
              <label htmlFor="privacy" className="privacy-checkbox">
                <input type="checkbox" id="privacy" name="privacy" />
                <span>I consent to the privacy policy and terms and conditions of use, including agreeing to my data being processed by ANECO, Inc.</span>
              </label>
              <label htmlFor="emailsched" className="email-checkbox">
                <input type="checkbox" id="emailsched" name="emailsched" />
                <span>I want to receive schedules of Power Interruptions. (You can unsubscribe anytime by clicking unsubscribe link in the email.)</span>
              </label>
            </div>
            <button type="submit" className="signup2-button">Sign Up</button>
          </form>
            </div>
      )
;
      }

export default SignupPage2;


      
