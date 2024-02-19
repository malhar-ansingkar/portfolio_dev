import React from "react";
import "./home.css";
import displayPicture from "../../assets/portfolio_img-min.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import CV from "../../assets/Malhar_ansingkar_v2.pdf";

const Home = () => {
  return (
    <div className="home-page container">
      <div id="home" className="home-container ">
        <div className="left-container">
          <img
            className="display-picture-img"
            src={displayPicture}
            alt="profile picture"
          />
          <div className="socials">
            <a href="https://www.linkedin.com/in/malhar-ansingkar-b06013191/">
              <FontAwesomeIcon icon={faLinkedin} />{" "}
            </a>
            <a href="https://github.com/malhar-ansingkar">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/malhaaaaaaaaaar/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="right-container">
          <h1>Namaste I'm Malhar</h1>
          <p>
            A MERN stack developer with over a year of hands-on experience, From
            design to developement, I thrive on transforming ideas into
            functional, user-centric solutions. Explore my projects and discover
            how I leverage the power of MongoDB, Express.js, React.js, and
            Node.js to build robust, modern web experiences.
            {/* A MERN stack developer and a AWS enthusiast with over one year of
            experience designing and developing seamless UI that are both
            responsive and fault tolerant. */}
          </p>
          <div className="cta">
            <a href={CV} download className="btn btn-primary ">
              <h4>Download CV</h4>
            </a>
            <a href="#contact" className="btn btn-primary">
              <h4>Get in touch</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
