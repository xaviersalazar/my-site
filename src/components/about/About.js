import React, { useEffect, useState } from "react";
import Container from "react-bulma-components/lib/components/container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./About.scss";

export const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const determineWidth = () => {
    if (windowWidth >= 320 && windowWidth < 768) {
      console.log("here");
      return "25%";
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      console.log("here");
      return "13%";
    } else if (windowWidth >= 1024 && windowWidth < 1440) {
      return "11%";
    } else if (windowWidth >= 1440 && windowWidth < 2560) {
      return "8%";
    } else if (windowWidth >= 2560) {
      return "7%";
    }
  };

  return (
    <Container className="columns" id="about">
      <div className="header column is-full">
        <h1 className="title">about</h1>
        <motion.hr
          className="animated-hr"
          ref={ref}
          animate={{ width: inView ? determineWidth() : "0%" }}
          transition={{ duration: 3 }}
        />
      </div>
    </Container>
  );
};
