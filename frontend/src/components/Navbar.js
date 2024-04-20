import React, { useState } from 'react';
import logo1 from './assets/logo-black.png';
import logo3 from './assets/search-w.png';
import logo5 from './assets/night.png';
import logo2 from './assets/logo-white.png';
import logo4 from './assets/search-w.png';
import logo6 from './assets/day.png';


const Navbar = () => {
  const [nightMode, setNightMode] = useState(true);

  const handleModeChange = () => {
    setNightMode(prevMode => !prevMode);
    document.body.style.backgroundColor = nightMode ? 'black' : 'white';
    document.body.classList.toggle('night-mode', nightMode);
  };

  return (
    <div className={`Navbar ${nightMode ? 'night' : 'day'}`}>
      <img src={nightMode ? logo1 : logo2} alt="" className="Logo" />
      <div className="logo">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="Services">Services</a></li>
    <li><a href="Login">Login</a></li>
    <li><a href="New">New-Account</a></li>
  </ul>
</div>

      <div className="Search-box">
        <input type="text" placeholder="Search" />
        <img src={nightMode ? logo3 : logo4} alt="" />
      </div>
      <img src={nightMode ? logo5 : logo6} alt="" className="toggle-icon" onClick={handleModeChange} />
    </div>
  );
};

export default Navbar;
