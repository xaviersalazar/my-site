import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Skills } from "./Skills";
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
      return "25%";
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      console.log("here");
      return "11%";
    } else if (windowWidth >= 1024 && windowWidth < 1440) {
      return "10%";
    } else if (windowWidth >= 1440 && windowWidth < 2560) {
      return "6%";
    } else if (windowWidth >= 2560) {
      return "4%";
    }
  };

  return (
    <div id="about">
      <div className="text-center">
        <h1 className="title">about</h1>
        <motion.hr
          className="animated-hr"
          ref={ref}
          animate={{ width: inView ? determineWidth() : "0%" }}
          transition={{ duration: 2 }}
        />
      </div>
      <div className="about-me text-center">
        <motion.p
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
          transition={{ bounce: "bounceIn", duration: 0.5 }}
          className="about-me-summary"
        >
          i enjoy all things programming, especially the front-end, and i've
          been a developer since 2013. i've since joined the U.S. Army, attended
          a coding boot-camp, pursued (and still pursuing) my computer science
          degree, and am now currently a senior software developer
        </motion.p>
      </div>
      <Skills />
    </div>
  );
};
