import React from "react";
import "./Nav.scss";

export const NavItem = ({ title, link }) => (
  <a href={link} className="nav-item">
    {title}
  </a>
);
