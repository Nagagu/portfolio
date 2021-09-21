import React from "react";
import { Link, useHistory } from "react-router-dom";

export const Menu = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    menuIsOpen && (
      <div className="modal-menu">
        <div className="menu">
          <Link
            className="nav-item nav-link"
            onClick={(e) => {
              setMenuIsOpen(false);
            }}
            to="/portfolio/all"
          >
            All
          </Link>
          <Link
            className="nav-item nav-link"
            onClick={() => setMenuIsOpen(false)}
            to="/portfolio/bnw"
          >
            B&W
          </Link>
          <Link
            className="nav-item nav-link"
            onClick={() => setMenuIsOpen(false)}
            to="/portfolio/color"
          >
            Color
          </Link>

          <Link
            className="nav-item nav-link"
            onClick={() => setMenuIsOpen(false)}
            to="/portfolio/madrid"
          >
            Madrid
          </Link>
        </div>
      </div>
    )
  );
};
