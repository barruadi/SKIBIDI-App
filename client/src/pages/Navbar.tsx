import "./Navbar.css";
import React, { useState } from 'react';
import { UserButton } from "@clerk/clerk-react";
import app_logo from "../assets/logo-app (2).png";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const skibidi_button = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav className="Navbar">
      <div className="mx-auto" style={{ maxWidth: '95vw', paddingLeft: '4vw', paddingRight: '4vw', fontWeight:"bolder"}}>
        <div className="flex items-center justify-between" style={{ height: '6vh' }}>
          <div className="flex items-center">
            <div className="text-black font-bold" style={{ fontSize: '2.5vh' }}>
              <div className="clickable-div" onClick={skibidi_button}>
                <img
                  src = {app_logo}
                  alt="logo"
                  style={{ height: '6.5vh', width: '6.5vh' }}
                />
              </div>
            </div>
          </div>
          <div className = "user-button-container">
            <UserButton />
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h1 style={{paddingTop:"2vh", paddingBottom:"0.5vh", fontSize:"6vw", fontWeight:"bold"}}>S.K.I.B.I.D.I</h1>
            <p>
              Smart Keeping Income & Budgets with Intuitive Digital Incentives
            </p>

            <br></br>

            <pre>
              Created by :
              <br></br>
              M.Fariz Rifqi R. (19623233) <br></br>
              Barru Adi U (19623079) <br></br>
              Andrew Isra S. D (19623017) <br></br>
              M. Raihan Nazhim O. (19623215) <br></br>
              Darryl Rayhananta A. (19623049) <br></br>
              Syahrizal Bani K. (19623260) <br></br>
              Matilda Angelina S. (19623064) <br></br>
              Muhammad Zahran R. A. (19623237) <br></br>
              Muhamad Hasbullah F. (19623203) <br></br>
              Nayaka Ghana S. (19623031) <br></br>
              Farella Kamala B. (19623046) <br></br>
              <br></br>
            </pre>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
