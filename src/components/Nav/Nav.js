import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://cdn.freebiesupply.com/logos/large/2x/netflix-2-logo-png-transparent.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
        alt="Avatar Logo"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
