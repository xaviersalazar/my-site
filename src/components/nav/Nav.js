import React from "react";
import Container from "react-bulma-components/lib/components/container";
import { NavItem } from "./NavItem";
import "./Nav.scss";

const navItems = [
  {
    title: "about me",
    link: "#",
  },
  {
    title: "work",
    link: "#",
  },
  {
    title: "contact me",
    link: "#",
  },
];

export const Nav = () => (
  <Container className="nav">
    {navItems.map((item) => (
      <NavItem title={item.title} link={item.link} />
    ))}
  </Container>
);
