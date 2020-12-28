import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Timeline } from "./Timeline";
import "./Work.scss";

export const Work = () => {
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
    <div id="work">
      <div className="text-center">
        <h1 className="title">work</h1>
        <motion.hr
          className="animated-hr"
          ref={ref}
          animate={{ width: inView ? determineWidth() : "0%" }}
          transition={{ duration: 2 }}
        />
      </div>
      <Timeline />
    </div>
  );
};
