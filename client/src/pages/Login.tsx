import React from 'react'
import "./Login.css";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import app_logo from "../assets/logo-app (2).png";

const Login = () => {
    return (
        <div className = "login-container">
            <div className = "title">
              <img className = "logo-app"
                src={app_logo}
                alt="logo"
              />

              <h1 className = "skibidi-title">
                SKIBIDI
              </h1>

              <h2 className = "skibidi">
                Smart Keeping Income & Budgets <br></br>
                with Intuitive Digital Incentive
              </h2>

              <h1 className = "welcome">
                Welcome to SKIBIDI!
              </h1>

              <h2 className = "welcome-text">
                Please Sign In or Sign Up to continue
              </h2>
            </div>

            <div className = "login">
                <div className="sign-up-button">
                    <SignUpButton />
                </div>
                
                <div className="sign-in-button">
                  <SignInButton />
                </div>
            </div>

            
        </div>
    )
}

export default Login

