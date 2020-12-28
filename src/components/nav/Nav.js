import React from "react";
import { NavItem } from "./NavItem";
import "./Nav.scss";

const navItems = [
  {
    title: "about",
    link: "#about",
  },
  {
    title: "work",
    link: "#",
  },
  {
    title: "contact",
    link: "#",
  },
];

export const Nav = () => (
  <div id="nav">
    {navItems.map((item) => (
      <NavItem key={item.title} title={item.title} link={item.link} />
    ))}
  </div>
);
