import React from "react";
import Particles from "react-tsparticles";

export const ParticlesBackground = () => (
  <Particles
    id="tsparticles"
    height="100%"
    width="100%"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      background: "#ffffff",
    }}
    options={{
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.25,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#030301",
        },
        links: {
          color: "#030301",
          distance: 150,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "random",
          enable: true,
          outMode: "bounce",
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 750,
          },
          value: 70,
        },
        opacity: {
          value: 0.25,
        },
        shape: {
          type: "line",
        },
        size: {
          random: true,
          value: 3,
        },
      },
      detectRetina: true,
    }}
  />
);
