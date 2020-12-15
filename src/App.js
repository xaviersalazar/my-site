import React from "react";
import Container from "react-bulma-components/lib/components/container";
import { ParticlesBackground } from "./components/particles/ParticlesBackground";
import "./App.scss";

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
    <Container className="main-background" fluid>
      <h1 className="name">Xavier Salazar</h1>
      <p className="subtitle has-text-grey-lighter">
        front-end, full-stack, and mobile developer for 7+ years
      </p>
    </Container>
  </>
);
