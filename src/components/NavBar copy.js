import React from "react";
// import { Redirect, Route, Switch } from "react-router";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      {/* <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <input type="checkbox" id="menu" />
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
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
      <label for="menu">
        {" "}
        <i className="fas fa-bars"></i>
      </label>
    </nav>
  );
};
