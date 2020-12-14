import React from "react";
import Particles from "react-tsparticles";

export const App = () => (
  <>
    <Particles
      id="tsparticles"
      height="100vh"
      width="100%"
      options={{
        background: {
          color: {
            value: "#0e1212",
          },
        },
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
              opacity: 0.8,
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
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
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
              value_area: 950,
            },
            value: 90,
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
  </>
);
