import Project from './Project';

function Projects(props) {
  return (
    <section className="projects">
      <h2 className="visually-hidden">Projects</h2>

      <div className="projects__list layout--column layout--loose">
        { props.projects.map(project => <Project className="projects__item project layout--leading-narrow" project={project} key={ project.name }/>) }
      </div>
    </section>
  )
}

export default Projects;
