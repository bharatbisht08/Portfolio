import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeHeader.scss";

const HomeHeader = () => {
  return (
    <div className="homeheader">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div>
        <h1 className="name">Bharat Bisht</h1>
        <h2 className="line-1 anim-typewriter">
          Aspiring JavaScript Developer
        </h2>
        <h2 className="summary">
          Over 3+ years of IT experience which includes Extensive experience as
          a React JS & Node JS Developer.
        </h2>
      </div>
    </div>
  );
};

export default HomeHeader;
