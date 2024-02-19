import React from "react";
import "./experience.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div id="experience" className="experience-container container">
      <h1>Work experience & Education</h1>
      <VerticalTimeline lineColor="gray">
        <VerticalTimelineElement
          className="vertical-timeline-element--work exp-card"
          contentStyle={{
            background: "transparent",
            backdropFilter: "blur(2px)",
            color: "grey",
            boxShadow: "0 0 20px 10px rgba(50, 50, 50, 0.65)",
          }}
          contentArrowStyle={{
            display: "none",
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="July 2022 - Sept 2023"
          iconStyle={{
            background: "gray ",
            color: "#fff",
            boxShadow: "0 0 0px 3px gray",
          }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">LTIMindtree</h4>

          <li>
            Skills utilized: React.js, javascript(ES6), HTML5, CSS3, ReactHooks,
            Context API, Tailwind CSS
          </li>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work exp-card"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(2px)",
            color: "grey",
            boxShadow: "0 0 20px 10px rgba(0, 0, 0, 0.65)",
          }}
          contentArrowStyle={{
            display: "none",
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="July 2018 - July 2022"
          iconStyle={{
            background: "gray ",
            color: "#fff",
            boxShadow: "0 0 0px 3px gray",
          }}
          icon={<FontAwesomeIcon icon={faBuildingColumns} />}
        >
          <h3 className="vertical-timeline-element-title">BE Computer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            D. Y. Patil institute of engineering
          </h4>
          <p>CGPA: 9.23</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work exp-card"
          contentStyle={{
            background: "transparent",
            backdropFilter: "blur(2px)",
            color: "grey",
            boxShadow: "0 0 20px 10px rgba(0, 0, 0, 0.65)",
          }}
          contentArrowStyle={{
            display: "none",
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="July 2017 - July 2018"
          iconStyle={{
            background: "gray ",
            boxShadow: "0 0 0px 3px gray",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faBuildingColumns} />}
        >
          <h3 className="vertical-timeline-element-title">HSC </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Shri Brijlal Biyani college of science
          </h4>
          <p>percentage: 90.46</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work exp-card"
          contentStyle={{
            background: "transparent",
            backdropFilter: "blur(2px)",
            color: "grey",
            boxShadow: "0 0 20px 10px rgba(0, 0, 0, 0.65)",
          }}
          contentArrowStyle={{
            display: "none",
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="July 2015 - July 2016"
          iconStyle={{
            background: "gray",
            boxShadow: "0 0 0px 3px gray",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faBuildingColumns} />}
        >
          <h3 className="vertical-timeline-element-title">SSC</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Shri Samarth high school
          </h4>
          <p>Percentage:89.60</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
