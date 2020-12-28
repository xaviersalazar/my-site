import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./Skills.scss";

const skills = [
  {
    skill: "html, css, javascript",
    percent: "95%",
    duration: 2,
  },
  {
    skill: "java, python, node",
    percent: "90%",
    duration: 2.25,
  },
  {
    skill: "react, angular",
    percent: "85%",
    duration: 2.5,
  },
  {
    skill: "react native, redux, graphql",
    percent: "80%",
    duration: 2.75,
  },
  {
    skill: "sql, mongodb",
    percent: "75%",
    duration: 3,
  },
  {
    skill: "ionic, electron",
    percent: "70%",
    duration: 3.25,
  },
  {
    skill: "sass, jquery, webpack",
    percent: "60%",
    duration: 3.5,
  },
  {
    skill: "kubernetes, docker, ruby",
    percent: "50%",
    duration: 3.75,
  },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  return (
    <>
      {skills.map((skill) => {
        return (
          <div key={skill.skill}>
            <div className="row skills">
              <div className="column">
                <motion.div
                  ref={ref}
                  animate={{ width: inView ? skill.percent : "0%" }}
                  transition={{ duration: skill.duration }}
                  className="progress-bar"
                />
              </div>
              <div className="column">
                <p className="skill">{skill.skill}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
