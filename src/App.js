import React from "react";
import Container from "react-bulma-components/lib/components/container";
import { ParticlesBackground } from "./components/particles/ParticlesBackground";
import "./App.scss";
import { Landing } from "components/landing/Landing";

export const App = () => (
  <>
    <ParticlesBackground />
    <Container className="nav">
      <a href="#" className="nav-item">
        about me
      </a>
      <a href="#" className="nav-item">
        work
      </a>
      <a href="#" className="nav-item">
        contact
      </a>
    </Container>
    <Landing />
  </>
);
