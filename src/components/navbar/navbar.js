import {
  faBook,
  faBriefcase,
  faHouse,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav className="navbar-container">
      <li>
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faHouse} />{" "}
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faUser} />{" "}
        </a>
      </li>

      <li>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faBook} />{" "}
        </a>
      </li>

      <li>
        <a
          href="#project"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faBriefcase} />{" "}
        </a>
      </li>

      <li>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faPaperPlane} />{" "}
        </a>
      </li>
    </nav>
  );
};

export default Navbar;
