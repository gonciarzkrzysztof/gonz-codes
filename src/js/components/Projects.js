import React, { useState, useEffect } from "react";
import Project from './Project';


function Projects(props) {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  });


  return (
    <section className="projects">
      <h2 className="visually-hidden">Projects</h2>

      <div className="projects__list layout--column layout--loose">
        {props.projects.map(project => <Project className="projects__item project layout--leading-narrow" project={project} key={project.title} />)}
      </div>
    </section>
  )
}

export default Projects;
