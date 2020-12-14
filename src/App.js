import React from "react";
import Container from "react-bulma-components/lib/components/container";
import { ParticlesBackground } from "./components/ParticlesBackground";
import "./App.scss";

export const App = () => (
  <>
    <ParticlesBackground />
    <Container className="nav">
      <h4 className="nav-item">about me</h4>
      <h4 className="nav-item">work</h4>
      <h4 className="nav-item">contact</h4>
    </Container>
    <Container className="main-background" fluid>
      <h1 className="name">Xavier Salazar</h1>
      <p className="subtitle has-text-grey-lighter">
        front-end, full-stack, and mobile developer for 7+ years
      </p>
    </Container>
  </>
);
