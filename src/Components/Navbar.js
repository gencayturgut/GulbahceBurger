import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ handleClick }, items) => {
  const [darkMode, setDarkMode] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);

  const aboutUsHandler = (event) => {
    event.preventDefault();
    if (aboutUs) {
      setAboutUs(false);
      return;
    }
    setAboutUs(true);
  };

  const darkModeHandler = (event) => {
    event.preventDefault();
    setDarkMode(true);
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <div onClick={handleClick} className="header">Gülbahçe Burger</div>
        <button className="darkmodebutton">Switch to Dark Mode</button>
        <button onClick={aboutUsHandler} className="aboutusbutton" style={aboutUs ? { color: "#da3eea" } : {}}>About Us</button>
        
      </div>
      <div className="displaytext" style={aboutUs ? { display: "block" } : { display: 'none' }}>About us: <br />Gülbahçe Burger is a fast food joint in Urla/İzmir. It opened in business in 2023.</div>
    </React.Fragment>
  );
};

export default Navbar;
