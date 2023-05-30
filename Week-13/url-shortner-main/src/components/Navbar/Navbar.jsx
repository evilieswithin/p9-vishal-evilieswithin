import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate} from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();


  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo" onClick={() => navigate("/")}>
        <h1 className="text-4xl cursor-pointer">Shortly</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans" onClick={() => navigate("/")}>
          <p>Home</p>
        </li>
        <li className="p__opensans" onClick={() => navigate("/about")}>
          <p>About</p>
        </li>
        <li className="p__opensans" onClick={() => navigate("/pricing")}>
          <p>Pricing</p>
        </li>
        <li className="p__opensans" onClick={() => navigate("/resources")}>
          <p>Resources</p>
        </li>
        <li className="p__opensans" onClick={() => navigate("/contactus")}>
          <p>Contact us</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
