import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpeg";
import CV from "../../assets/Smith-Cv.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Summary/Objective</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            My objective is to obtain a challenging and responsible position in
            a dynamic company, utilizing best programming practices, cyber
            security, and a strong perseverance and determination to myself, my
            co-workers, and my job.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
