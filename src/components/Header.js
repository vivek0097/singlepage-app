import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>It's a <span>React.js</span>Website</h1>
        <p className="details">It's designed by <i>Vivek Singh</i> !</p>
        <div className='header-btns'>
          <a href="#" className='cv-btn'>Hire Me</a>
          <a href="#" className='cv-btn1'>Download App</a>
        </div>
      </div>

      <div className='arrow'></div>
    </div>
  );
}

export default Header;
