import React from 'react'
import "./Login.css";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import app_logo from "../assets/logo-app.png";

const Login = () => {
    return (
        <div className = "h-screen bg-gradient-to-b from-[#F7FFE5] to-[#A0C49D]">
            <div className = "title">
              <img className = "w-[20vh] h-auto pt-[10vh] mx-auto block rounded-[10vh]"
                src={app_logo}
                alt="logo"
              />
              <h1 className = "text-[#446741] text-2xl text-center font-cursive">
                SKIBIDI
              </h1>
            </div>
            <div className = "login">
                <div className="button">
                    <SignUpButton />
                </div> 
                <div className="button">
                  <SignInButton />
                </div>
            </div>            
        </div>
    )
}

export default Login

