import React, { useState } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'
const Navbar = ({style}) => {
  const [open, setopen] = useState(false);

  const setthemenuOpen = () => {
    setopen(!open);
  };
  return (
    <div className="navbar" style={style}>
      <div className="navbar-container">
        <div className="navbar-logo ">
          <h1>
            Real Estate Website <small>Real Estate</small>
          </h1>
        </div>
        <nav className={`navbar-menu ${open === true ? "open" : ""}`}>
          <div className="navbar-menuItems">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Properities</a>
            </li>
            <li>
              <a>Agents</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </div>
        </nav>
        <button style={{border:"none", outline:"none"}} className="navbar-submit"><a>Submite</a></button>
        {open != true ? (
          <div
            onClick={() => {
              setthemenuOpen();
            }}
            className="navbar-icon"
          >
            <img src="/src/assets/menuIcon.png" />
          </div>
        ) : (

          <div
            onClick={() => {
              setthemenuOpen();
            }}
            className="navbar-icon"
          >
            <img src="/src/assets/closeIcon.png" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
