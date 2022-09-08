import React from "react";
// import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

export const NavBar = ({ setMenuIsOpen, menuIsOpen }) => {
  // const handleOpenMenu = () => {
  //   setMenuIsOpen(true);
  // };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/portfolio/all"
          >
            All
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/portfolio/bnw"
          >
            B&W
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/portfolio/color"
          >
            Color
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/portfolio/madrid"
          >
            Madrid
          </NavLink>
        </div>
      </div>
      <label for="menu" onClick={() => setMenuIsOpen(!menuIsOpen)}>
        {" "}
        <i className="fas fa-bars"></i>
      </label>
    </nav>
  );
};
