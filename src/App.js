import React from "react";
import { Landing } from "components/landing/Landing";
import { Nav } from "components/nav/Nav";
import { About } from "components/about/About";
import "./App.scss";

export const App = () => (
  <>
    <Nav />
    <Landing />
    <About />
  </>
);
