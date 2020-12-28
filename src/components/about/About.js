import React, { useEffect, useState } from "react";
import Container from "react-bulma-components/lib/components/container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ReactComponent as JavascriptSvg } from "../../svg/javascript.svg";
import { ReactComponent as ReactSvg } from "../../svg/react.svg";
import { ReactComponent as AngularSvg } from "../../svg/angular.svg";
import { ReactComponent as TypescriptSvg } from "../../svg/typescript.svg";
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
    <div id="about">
      <div className="header">
        <h1 className="title">about</h1>
        <motion.hr
          className="animated-hr"
          ref={ref}
          animate={{ width: inView ? determineWidth() : "0%" }}
          transition={{ duration: 2 }}
        />
      </div>
      <div className="about-me has-text-centered">
        <motion.p
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
          transition={{ bounce: "bounceIn", duration: 0.5 }}
        >
          i've been a front-end developer since 2013 and have since joined the
          U.S. Army, attended a coding boot-camp, pursued (and still pursuing)
          my computer science degree, and am now currently a senior software
          developer
        </motion.p>
      </div>
      <div className="columns is-mobile icons">
        <div className="column has-text-centered">
          <JavascriptSvg className="icon-svg" />
        </div>
        <div className="column has-text-centered">
          <ReactSvg className="icon-svg" />
        </div>
        <div className="column has-text-centered">
          <AngularSvg className="icon-svg" />
        </div>
        <div className="column has-text-centered">
          <TypescriptSvg className="icon-svg" />
        </div>
      </div>
    </div>
  );
};
