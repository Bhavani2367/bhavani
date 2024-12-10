import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginComponent from './GoogleLoginComponent';
import FacebookLoginComponent from './FacebookLoginComponent';
import GitLoginComponent from './GitLoginComponent'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="flex-container">
        {/* Image Section */}
        <div className="image-section">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDg7a81Dh-ofQDiPdEZ1_Uvy4jAwW5oXzPIw&ss" 
            alt="NotFound" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </div>

        {/* Login Options Section */}
        <div className="login-options">
          <h2 style={{ color: 'Red' }}>Continue with Google</h2>
          <GoogleOAuthProvider clientId="333625709155-1pm7hjmqnf8ik2gdcb0nmam0u36miik3.apps.googleusercontent.com">
            <GoogleLoginComponent /><br /><br />
          </GoogleOAuthProvider>

          <h2 style={{ color: 'Blue' }}>Continue with Facebook</h2>
          <FacebookLoginComponent /><br /><br />

          <h2 style={{ color: 'Black' }}>Continue with GitHub</h2>
          <GitLoginComponent /><br /><br />
        </div>
      </div>
    </div>
  );
};

export default Login;
