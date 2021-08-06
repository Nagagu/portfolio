import React from "react";
import { Link } from "react-router-dom";

export const Menu = ({ menuIsOpen }) => {
  return (
    menuIsOpen && (
      <div className="modal-menu">
        <div className="menu">
          <Link className="nav-item nav-link" to="/portfolio/all">
            All
          </Link>
          <Link className="nav-item nav-link" to="/portfolio/bnw">
            B&W
          </Link>
          <Link className="nav-item nav-link" to="/portfolio/color">
            Color
          </Link>

          <Link className="nav-item nav-link" to="/portfolio/madrid">
            Madrid
          </Link>
        </div>
      </div>
    )
  );
};
