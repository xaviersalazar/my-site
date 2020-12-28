import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./Timeline.scss";

export const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <div id="timeline-content">
      <ul className="timeline">
        <motion.div
          ref={ref}
          initial={{ height: 0 }}
          animate={{ height: inView ? "100%" : 0 }}
          transition={{ duration: 25 }}
          className="timeline-line"
        />
        <li className="event" data-date="Nov 2010">
          <p>got a job as an it specialist</p>
        </li>
        <li className="event" data-date="June 2013">
          <p>started freelance development (still doing it)</p>
        </li>
        <li className="event" data-date="Feb 2015">
          <p>joined the U.S. Army</p>
        </li>
        <li className="event" data-date="May 2018">
          <p>got out of the U.S. Army</p>
        </li>
        <li className="event" data-date="May 2018">
          <p>started a full-stack boot-camp at Codeup</p>
        </li>
        <li className="event" data-date="Oct 2018">
          <p>graduated from Codeup</p>
        </li>
        <li className="event" data-date="Oct 2018">
          <p>got a job as a full-stack dev at Appddiction Studio</p>
        </li>
        <li className="event" data-date="Jan 2019">
          <p>started pursuing a BS in Computer Science online</p>
        </li>
        <li className="event" data-date="Feb 2019">
          <p>joined the Texas National Guard</p>
        </li>
        <li className="event" data-date="Dec 2019">
          <p>left Apddiction Studio, got a job at USAA</p>
        </li>
        <li className="event" data-date="June 2020">
          <p>
            left USAA, got a job at ERP International as a senior software dev
          </p>
        </li>
      </ul>
    </div>
  );
};
