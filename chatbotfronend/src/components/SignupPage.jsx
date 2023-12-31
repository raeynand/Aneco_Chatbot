import React from 'react';
import axios from 'axios'; // Import Axios
import { useHistory, Link } from 'react-router-dom';
import '../css/SignupPage.css'; // Import the CSS file for styling
import peopleImage from '../img/people 1.png'; // Import the image

const SignupPage = () => {
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Extract form data
    const LASTNAME = e.target.LASTNAME.value;
    const FIRSTNAME = e.target.FIRSTNAME.value;
    const email = e.target.emailadd.value;
    const password1 = e.target.password1.value;
    const password2 = e.target.password2.value;
    const GENDER = e.target.GENDER.value;

    // Perform form validation
    if (!LASTNAME || !LASTNAME|| !email || !password1 || !password2 || !GENDER) {
      console.error('Please fill in all required fields.');
      return;
    }

    // Validate password match
    if (password1 !== password2) {
      console.error('Passwords do not match.');
      return;
    }

    // Log form data for debugging
    console.log('Form Data:', { LASTNAME, FIRSTNAME, email, password1, password2, GENDER});

  try {
    const response = await axios.post('http://localhost:1337/api/auth/local/register', {
      username: email,
      email,
      password: password1,
      LASTNAME: LASTNAME,
      FIRSTNAME: FIRSTNAME,
      GENDER: GENDER,
    });
  
    history.push('/signup2');
  } catch (error) {
    console.error('Registration failed:', error.response);
  
    if (error.response && error.response.data) {
      console.error('Error details:', error.response.data);
    }
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
            <input type="name" id="LASTNAME" name="lastName" placeholder="Last Name" required />
            <input type="name" id="FIRSTNAME" name="firstName" placeholder="First Name" required />
            <input type="email" id="emailadd" name="emailadd" placeholder="Email Address" required />
            <input type="password" id="password1" name="password1" placeholder="Password" required />
            <input type="password" id="password2" name="password2" placeholder="Confirm Password" required />
            <div className="checkbox-container">
              <label htmlFor="gender" className="gender-label">
                Gender:
              </label>
              <div className="gender-options">
                <label htmlFor="male">
                  <input type="radio" id="male" name="GENDER" value="male" />
                  Male
                </label>
                <label htmlFor="female">
                  <input type="radio" id="female" name="GENDER" value="female" />
                  Female
                </label>
                  <div className="signup-button">
                    <button type="submit" className="signup-button">Next</button>
                  </div>
            </div>
            </div>
            </form>
            <p className="back-to-login-button">
                    Already have an account? <Link to="/login">Log in</Link>
            </p>
      </div>
      
      )
;
      }

export default SignupPage;