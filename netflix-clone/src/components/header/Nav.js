import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://www.pxpng.com/public/uploads/preview/-11621687998ytrgnduxoh.png"
          alt="Logo"
        />

        <img className="nav_avatar" src="" alt="twimg.com/profileImage" />
      </div>
    </div>
  );
}

export default Nav;
