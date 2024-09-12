import React, { useState } from 'react';
import { UserButton } from "@clerk/clerk-react";
import app_logo from "../assets/logo-app.png";

const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#C4D7B2] drop-shadow-lg">
      <div className="mx-auto" style={{ maxWidth: '95vw', paddingLeft: '4vw', paddingRight: '4vw', fontWeight:"bolder"}}>
        <div className="flex items-center justify-between" style={{ height: '7vh' }}>
          <div className="flex items-center">
            <div className="text-black font-bold" style={{ fontSize: '2.5vh' }}>
              <div className="cursor-pointer text-skibidi-color flex items-center"> 
                <img
                  src = {app_logo}
                  alt="logo"
                  style={{ height: '7vh', width: '7vh' }}
                /> SKIBIDI
              </div>
            </div>
          </div>
          <div className = "pt-[1vh]">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
