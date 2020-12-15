import React from "react";
import Container from "react-bulma-components/lib/components/container";
import "./Landing.scss";

export const Landing = () => (
  <Container className="main-background" fluid>
    <h1 className="name">Xavier Salazar</h1>
    <p className="subtitle has-text-grey-lighter">
      front-end, full-stack, and mobile developer for 7+ years
    </p>
  </Container>
);
