import React from "react";
import "./projects.css";
import studentComp from "../../assets/Student_campanion.png";
import beachResort from "../../assets/beach-resort.png";
import covidTracker from "../../assets/covid_tracker.png";
import linkedInLanding from "../../assets/linkedin.png";

const Projects = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Student Companion",
      img: studentComp,
      description:
        "Student companion is the companion for student who are new in the city and want to explore city",
      technologies: " JavaScript | HTML5 | CSS3 | Bootstrap | API | JSON",
      demo: "",
      github: "https://github.com/malhar-ansingkar/Student-Companion",
    },
    {
      id: 2,
      title: "Beach Resort",
      img: beachResort,
      description:
        "A Resort catalogue with filter options designed for a resort to display the available options",
      technologies: "React.js | JS | HTML5 | CSS3 | Netlify | Contentful(CMS)",
      demo: "https://beach-resort-by-malhar.netlify.app/rooms",
      github: "https://github.com/malhar-ansingkar/beach-resort",
    },
    {
      id: 3,
      title: "Covid Tracker",
      img: covidTracker,
      description:
        "A dashboard to track COVID-19 data(cases,active cases,deaths) in a pictorial form",
      technologies:
        " React.js | Chart.js | disease.sh | API | HTML | CSS | JSX",
      demo: "",
      github: "https://github.com/malhar-ansingkar/Covid-Tracker",
    },
    {
      id: 4,
      title: "LinkedIn Clone",
      img: linkedInLanding,
      description:
        "A clone of landing page of linkedIn made in react.js with sign-up and login",
      technologies: "React.js | Firebase | HTML | CSS | JSX",
      demo: "https://malhar-ansingkar.github.io/linked-in-clone//",
      github: "https://github.com/malhar-ansingkar/linked-in-clone",
    },
  ];
  return (
    <div id="project" className="projects-container container">
      <h1>My Projects</h1>
      <div className="project-list">
        {soloProjects.map((project) => (
          <article className="project__item" key={project.id}>
            <div className="project__item-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div
              className="proj
            ect__item-content"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.technologies}</p>
            </div>
            <div className="project__item-cta">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Github
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
