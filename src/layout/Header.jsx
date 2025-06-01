import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            MyWebsite
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/CreateApi">
                  CreateApi
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className="nav-link" to="/viewApi"  >
                  ViewApi
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
