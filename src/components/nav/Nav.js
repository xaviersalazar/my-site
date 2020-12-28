import React from "react";
import Container from "react-bulma-components/lib/components/container";
import { NavItem } from "./NavItem";
import "./Nav.scss";

const navItems = [
  {
    title: "about",
    link: "#",
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
