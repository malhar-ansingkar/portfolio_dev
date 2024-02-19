import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faBootstrap,
  faCss3,
  faGithub,
  faGolang,
  faHtml5,
  faJs,
  faNode,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about" className="about-page container">
      <h1>Skills</h1>
      <div className="about-container">
        <li className="about-container-item">
          <FontAwesomeIcon icon={faReact} /> <h5>React</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faJs} /> <h5>Javascript</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faHtml5} /> <h5>HTML5</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faCss3} /> <h5>CSS3</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faBootstrap} /> <h5>Bootstrap</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faSass} /> <h5>SASS</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faNode} /> <h5>Node.js</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faNodeJs} /> <h5>Express.js</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faGolang} /> <h5>Golang</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faAws} /> <h5>AWS</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faGithub} /> <h5>Github</h5>
        </li>
        <li className="about-container-item">
          <FontAwesomeIcon icon={faNpm} /> <h5>npm</h5>
        </li>
      </div>
    </div>
  );
};

export default About;
