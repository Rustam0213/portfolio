import React from "react";
import "./styles.css";

export default function Header({ activeButton, setActiveButton }) {
  const handleButtonClick = (buttonName) => {
    if (activeButton !== buttonName) {
      setActiveButton(buttonName);
    }
  };

  return (
    <div>
      <header>
        <h1>Welcome to my portfolio</h1>
        <div className="info">
          <div 
            className={`btn ${activeButton === "About Me" ? "active-btn" : ""}`} 
            onClick={() => handleButtonClick("About Me")}
          >
            About Me
          </div>
          <div 
            className={`btn ${activeButton === "My Works" ? "active-btn" : ""}`} 
            onClick={() => handleButtonClick("My Works")}
          >
            My Works
          </div>                    
        </div>                            
      </header>
    </div>
  );
}
