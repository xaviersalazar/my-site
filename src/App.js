import React from "react";
import { ParticlesBackground } from "./components/particles/ParticlesBackground";
import { Landing } from "components/landing/Landing";
import { Nav } from "components/nav/Nav";
import "./App.scss";

export const App = () => (
  <>
    <ParticlesBackground />
    <Nav />
    <Landing />
  </>
);
